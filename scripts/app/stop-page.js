export function createStopPageController({ state, media, audioGuide, todo, getFootprintText }) {
  function resetStopPageScroll(page) {
    page.scrollTo?.({ top: 0, left: 0, behavior: "auto" });
    page.scrollTop = 0;
    page.scrollLeft = 0;
  }

  function openStopPage() {
    const page = document.getElementById("stopPage");
    if (!page) return;
    page.classList.remove("is-closing");
    page.classList.remove("hidden");
    resetStopPageScroll(page);
    requestAnimationFrame(() => {
      page.classList.add("is-open");
      resetStopPageScroll(page);
      window.setTimeout(() => resetStopPageScroll(page), 0);
    });
    page.setAttribute("aria-hidden", "false");
    document.body.classList.add("stop-page-open");
  }

  function closeStopPage() {
    const page = document.getElementById("stopPage");
    if (!page) return;
    if (page.classList.contains("hidden")) return;
    media.closePanoramaViewer();
    page.classList.remove("is-open");
    page.classList.add("is-closing");
    page.setAttribute("aria-hidden", "true");
    document.body.classList.remove("stop-page-open");
    setTimeout(() => {
      page.classList.add("hidden");
      page.classList.remove("is-closing");
    }, 320);
  }

  function renderStopContent(dayObj, stop) {
    state.currentStop = stop;
    document.getElementById("badge").textContent = dayObj.name;
    document.getElementById("badge").style.background = dayObj.color;
    document.getElementById("stopTitle").textContent = stop.title;
    document.getElementById("stopSubtitle").textContent = stop.subtitle || "";
    document.getElementById("stopStory").textContent = stop.story || "";
    document.getElementById("stopFootprint").textContent = getFootprintText(stop);
    todo.updateStopTodoButton(dayObj, stop);

    const routeHeading = document.getElementById("stopRouteHeading");
    const routeSummary = document.getElementById("stopRouteSummary");
    const routeSteps = document.getElementById("stopRouteSteps");
    const stopFacts = document.getElementById("stopFacts");
    if (routeHeading) routeHeading.textContent = stop.routeHeading || "Getting there";
    if (routeSummary) routeSummary.textContent = stop.routeSummary || "Use the route steps below to reach this stop from the current day area.";
    if (routeSteps) {
      routeSteps.innerHTML = "";
      (stop.steps || []).forEach((step) => {
        const li = document.createElement("li");
        li.textContent = step;
        routeSteps.appendChild(li);
      });
    }
    if (stopFacts) {
      const facts = [
        stop.difficulty ? { label: "Difficulty", value: stop.difficulty } : null,
        stop.distance ? { label: "Distance", value: stop.distance } : null,
        stop.duration ? { label: "Time", value: stop.duration } : null
      ].filter(Boolean);
      stopFacts.innerHTML = "";
      stopFacts.classList.toggle("hidden", !facts.length);
      facts.forEach((fact) => {
        const item = document.createElement("div");
        item.className = "stopFact";
        item.innerHTML = `<span class="stopFactLabel">${fact.label}</span><span class="stopFactValue">${fact.value}</span>`;
        stopFacts.appendChild(item);
      });
    }

    media.buildGallery(document.getElementById("gallery"), stop);
    media.renderPanoramaSection(stop);
    audioGuide.renderAudioGuide(stop);

    const tipsUl = document.getElementById("tips");
    const sdgNote = document.getElementById("sdgNote");
    tipsUl.innerHTML = "";
    (stop.tips || []).forEach((tip) => {
      const li = document.createElement("li");
      li.textContent = tip;
      tipsUl.appendChild(li);
    });
    if (sdgNote) {
      const tipText = (stop.tips || []).join(" ");
      const notes = [];
      if (tipText.includes("SDG 11")) {
        notes.push("SDG 11 focuses on sustainable cities and communities, including heritage protection, walkable public space, and inclusive urban life.");
      }
      if (tipText.includes("SDG 12")) {
        notes.push("SDG 12 focuses on responsible consumption and production, such as reducing waste, reusing items, and choosing lower-impact travel habits.");
      }
      if (tipText.includes("SDG 15")) {
        notes.push("SDG 15 focuses on life on land, including care for trails, forests, streams, and biodiversity.");
      }
      sdgNote.textContent = notes.join(" ");
      sdgNote.classList.toggle("hidden", !notes.length);
    }
  }

  function renderDefaultDayInfo(dayObj) {
    const titleEl = document.getElementById("stopTitle");
    if (!titleEl) return;
    document.getElementById("badge").textContent = dayObj.name;
    document.getElementById("badge").style.background = dayObj.color;
    titleEl.textContent = dayObj.name;
    document.getElementById("stopSubtitle").textContent = "Select a marker to open a full stop page.";
    document.getElementById("stopStory").textContent = "Each place opens as its own full page, where you can review photos, story notes, and decide whether to save it for your trip.";
    document.getElementById("stopFootprint").textContent = "Use the map tools for filters, then add the stops you actually want into your own to-do list.";
    document.getElementById("gallery").innerHTML = `<p class="muted">Open a stop to browse photos.</p>`;
    document.getElementById("audioBox").innerHTML = `<p class="muted">Open a stop to listen to the guide in Chinese, Cantonese, or English.</p>`;
    document.getElementById("tips").innerHTML = `<li>Build your own to-do list by adding stops from their individual pages.</li>`;
    const todoBtn = document.getElementById("stopTodoBtn");
    if (todoBtn) {
      todoBtn.classList.remove("is-added");
      todoBtn.textContent = "\u2713 Add to to-do list";
      todoBtn.setAttribute("aria-pressed", "false");
    }
    document.getElementById("panoramaCard")?.classList.add("hidden");
    document.getElementById("sdgNote")?.classList.add("hidden");
  }

  return {
    renderStopContent,
    renderDefaultDayInfo,
    openStopPage,
    closeStopPage,
  };
}
