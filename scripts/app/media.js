export function createMediaController({ state }) {
  function updateLightbox() {
    const overlay = document.getElementById("galleryLightbox");
    const image = document.getElementById("lightboxImage");
    const counter = document.getElementById("lightboxCounter");
    const title = document.getElementById("lightboxTitle");
    const prevBtn = document.getElementById("lightboxPrev");
    const nextBtn = document.getElementById("lightboxNext");

    if (!overlay || !image || !state.lightboxPhotos.length) return;

    image.src = state.lightboxPhotos[state.lightboxIndex];
    image.alt = `${state.activeLightboxTitle} photo ${state.lightboxIndex + 1}`;
    counter.textContent = `${state.lightboxIndex + 1} / ${state.lightboxPhotos.length}`;
    title.textContent = state.activeLightboxTitle || "Photo gallery";
    prevBtn.disabled = state.lightboxPhotos.length <= 1;
    nextBtn.disabled = state.lightboxPhotos.length <= 1;
  }

  function openLightbox(photos, index = 0, title = "Photo gallery") {
    const overlay = document.getElementById("galleryLightbox");
    if (!overlay || !photos || !photos.length) return;

    state.lightboxPhotos = photos.slice();
    state.lightboxIndex = index;
    state.activeLightboxTitle = title;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    updateLightbox();
  }

  function closeLightbox() {
    const overlay = document.getElementById("galleryLightbox");
    if (!overlay) return;
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
  }

  function moveLightbox(step) {
    if (!state.lightboxPhotos.length) return;
    state.lightboxIndex = (state.lightboxIndex + step + state.lightboxPhotos.length) % state.lightboxPhotos.length;
    updateLightbox();
  }

  function buildGallery(container, stop) {
    container.innerHTML = "";
    if (!stop.photos || stop.photos.length === 0) {
      container.innerHTML = `<p class="muted">No photos yet.</p>`;
      return;
    }

    stop.photos.forEach((src, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "galleryItem";
      button.setAttribute("aria-label", `Open photo ${index + 1} of ${stop.photos.length}`);

      const img = document.createElement("img");
      img.src = src;
      img.alt = `${stop.title} photo ${index + 1}`;
      img.loading = "lazy";

      button.appendChild(img);
      button.addEventListener("click", () => openLightbox(stop.photos, index, stop.title));
      container.appendChild(button);
    });
  }

  function getStopPanoramas(stop) {
    return (stop?.panoramas || []).map((item, index) => (
      typeof item === "string" ? { src: item, label: `View ${index + 1}` } : item
    ));
  }

  function updatePanoramaViewer() {
    const overlay = document.getElementById("panoramaViewer");
    const canvas = document.getElementById("panoramaCanvas");
    const counter = document.getElementById("panoramaCounter");
    const title = document.getElementById("panoramaTitle");
    const prevBtn = document.getElementById("panoramaPrev");
    const nextBtn = document.getElementById("panoramaNext");

    if (!overlay || !canvas || !state.panoramaItems.length) return;

    const current = state.panoramaItems[state.panoramaIndex];
    canvas.style.backgroundImage = `url("${current.src}")`;
    canvas.style.backgroundPosition = `${state.panoramaOffsetX}px center`;
    canvas.setAttribute("aria-label", `${state.activePanoramaTitle} ${current.label || `view ${state.panoramaIndex + 1}`}`);
    counter.textContent = `${state.panoramaIndex + 1} / ${state.panoramaItems.length}`;
    title.textContent = current.label ? `${state.activePanoramaTitle} - ${current.label}` : state.activePanoramaTitle || "360 view";
    prevBtn.disabled = state.panoramaItems.length <= 1;
    nextBtn.disabled = state.panoramaItems.length <= 1;
  }

  function openPanoramaViewer(items, index = 0, title = "360 view") {
    const overlay = document.getElementById("panoramaViewer");
    if (!overlay || !items?.length) return;

    state.panoramaItems = items.slice();
    state.panoramaIndex = index;
    state.activePanoramaTitle = title;
    state.panoramaOffsetX = 0;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("panorama-open");
    updatePanoramaViewer();
  }

  function closePanoramaViewer() {
    const overlay = document.getElementById("panoramaViewer");
    if (!overlay) return;
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("panorama-open");
  }

  function movePanorama(step) {
    if (!state.panoramaItems.length) return;
    state.panoramaIndex = (state.panoramaIndex + step + state.panoramaItems.length) % state.panoramaItems.length;
    state.panoramaOffsetX = 0;
    updatePanoramaViewer();
  }

  function renderPanoramaSection(stop) {
    const card = document.getElementById("panoramaCard");
    const list = document.getElementById("panoramaList");
    const caption = document.getElementById("panoramaCaption");
    const openBtn = document.getElementById("panoramaOpenBtn");
    const panoramas = getStopPanoramas(stop);

    if (!card || !list || !caption || !openBtn) return;

    if (!panoramas.length) {
      card.classList.add("hidden");
      list.innerHTML = "";
      return;
    }

    card.classList.remove("hidden");
    caption.textContent = panoramas.length === 1
      ? "Open the immersive panorama and drag around this stop."
      : `Choose one of ${panoramas.length} immersive panoramas for this stop.`;

    list.innerHTML = "";
    panoramas.forEach((panorama, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "panoramaChip";
      button.textContent = panorama.label || `View ${index + 1}`;
      button.addEventListener("click", () => openPanoramaViewer(panoramas, index, stop.title));
      list.appendChild(button);
    });

    openBtn.onclick = () => openPanoramaViewer(panoramas, 0, stop.title);
  }

  function bindPanoramaViewer() {
    const overlay = document.getElementById("panoramaViewer");
    const stage = document.getElementById("panoramaStage");
    const canvas = document.getElementById("panoramaCanvas");
    if (!overlay || !stage || !canvas) return;

    document.getElementById("panoramaClose")?.addEventListener("click", closePanoramaViewer);
    document.getElementById("panoramaPrev")?.addEventListener("click", () => movePanorama(-1));
    document.getElementById("panoramaNext")?.addEventListener("click", () => movePanorama(1));

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) closePanoramaViewer();
    });

    let dragging = false;
    let startX = 0;
    let startOffset = 0;

    const onPointerMove = (event) => {
      if (!dragging) return;
      state.panoramaOffsetX = startOffset + (event.clientX - startX);
      canvas.style.backgroundPosition = `${state.panoramaOffsetX}px center`;
    };

    const endPointer = () => {
      dragging = false;
      canvas.classList.remove("is-dragging");
    };

    stage.addEventListener("pointerdown", (event) => {
      dragging = true;
      startX = event.clientX;
      startOffset = state.panoramaOffsetX;
      canvas.classList.add("is-dragging");
      stage.setPointerCapture?.(event.pointerId);
    });

    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerup", endPointer);
    stage.addEventListener("pointercancel", endPointer);
    stage.addEventListener("wheel", (event) => {
      event.preventDefault();
      state.panoramaOffsetX -= event.deltaY * 0.45;
      canvas.style.backgroundPosition = `${state.panoramaOffsetX}px center`;
    }, { passive: false });

    document.addEventListener("keydown", (event) => {
      if (!overlay.classList.contains("is-open")) return;
      if (event.key === "Escape") closePanoramaViewer();
      if (event.key === "ArrowLeft") movePanorama(-1);
      if (event.key === "ArrowRight") movePanorama(1);
    });
  }

  function bindLightbox() {
    const overlay = document.getElementById("galleryLightbox");
    if (!overlay) return;
    const stage = document.getElementById("lightboxStage");

    document.getElementById("lightboxClose")?.addEventListener("click", closeLightbox);
    document.getElementById("lightboxPrev")?.addEventListener("click", () => moveLightbox(-1));
    document.getElementById("lightboxNext")?.addEventListener("click", () => moveLightbox(1));

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) closeLightbox();
    });

    let startX = 0;
    let trackingTouch = false;
    stage?.addEventListener("touchstart", (event) => {
      if (event.touches?.length !== 1) return;
      startX = event.touches[0].clientX;
      trackingTouch = true;
    }, { passive: true });
    stage?.addEventListener("touchend", (event) => {
      if (!trackingTouch || event.changedTouches?.length !== 1) return;
      const deltaX = event.changedTouches[0].clientX - startX;
      if (Math.abs(deltaX) > 45) moveLightbox(deltaX > 0 ? -1 : 1);
      trackingTouch = false;
    }, { passive: true });

    document.addEventListener("keydown", (event) => {
      if (!overlay.classList.contains("is-open")) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") moveLightbox(-1);
      if (event.key === "ArrowRight") moveLightbox(1);
    });
  }

  return {
    buildGallery,
    renderPanoramaSection,
    closePanoramaViewer,
    bindLightbox,
    bindPanoramaViewer,
  };
}
