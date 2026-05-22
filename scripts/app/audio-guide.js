import { audioGuideCatalog, audioGuideLabels } from "../data/audio-guides.js";

export function createAudioGuideController({ state }) {
  function getAudioGuideOptions(stop) {
    const entry = audioGuideCatalog[stop?.id];
    if (!entry) return null;

    const result = {};
    Object.entries(entry).forEach(([lang, files]) => {
      if (!files?.length) return;
      const cacheKey = `${stop.id}:${lang}`;
      if (!state.audioGuideChoiceCache.has(cacheKey)) {
        const choice = files[Math.floor(Math.random() * files.length)];
        state.audioGuideChoiceCache.set(cacheKey, choice);
      }
      result[lang] = state.audioGuideChoiceCache.get(cacheKey);
    });

    return Object.keys(result).length ? result : null;
  }

  function renderAudioGuide(stop) {
    const audioBox = document.getElementById("audioBox");
    if (!audioBox) return;

    const guideOptions = getAudioGuideOptions(stop);
    audioBox.innerHTML = "";

    if (!guideOptions) {
      audioBox.innerHTML = `<p class="muted">No audio guide for this stop yet.</p>`;
      return;
    }

    const languages = Object.keys(guideOptions);
    if (!languages.includes(state.selectedAudioGuideLanguage)) {
      state.selectedAudioGuideLanguage = languages[0];
    }

    const tabs = document.createElement("div");
    tabs.className = "audioGuideTabs";
    languages.forEach((lang) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `audioGuideTab ${lang === state.selectedAudioGuideLanguage ? "active" : ""}`;
      button.textContent = audioGuideLabels[lang] || lang.toUpperCase();
      button.addEventListener("click", () => {
        state.selectedAudioGuideLanguage = lang;
        if (state.currentStop?.id === stop.id) renderAudioGuide(stop);
      });
      tabs.appendChild(button);
    });

    const meta = document.createElement("div");
    meta.className = "audioGuideMeta";
    meta.textContent = `Guide available in ${languages.map((lang) => audioGuideLabels[lang] || lang.toUpperCase()).join(", ")}.`;

    const playerWrap = document.createElement("div");
    playerWrap.className = "audioGuidePlayer";
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.preload = "none";
    audio.src = guideOptions[state.selectedAudioGuideLanguage];
    playerWrap.appendChild(audio);

    audioBox.appendChild(tabs);
    audioBox.appendChild(meta);
    audioBox.appendChild(playerWrap);
  }

  return { renderAudioGuide };
}
