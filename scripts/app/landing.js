import { getPlanDotClass } from "./day-utils.js";

export function createLandingController({ state, landingDayMeta, routePlans, openMapForDay }) {
  function syncLandingSelection(dayKey, expandCard = false) {
    state.selectedLandingDay = dayKey === "day2" ? "day2" : "day1";
    const meta = landingDayMeta[state.selectedLandingDay];

    const landingCta = document.getElementById("landingGoToMapBtn");
    const selectedDayEl = document.getElementById("landingSelectedDay");
    const selectedSummaryEl = document.getElementById("landingSelectedSummary");

    if (landingCta) landingCta.textContent = `Open ${meta.title} on map`;
    if (selectedDayEl) selectedDayEl.textContent = meta.title;
    if (selectedSummaryEl) selectedSummaryEl.textContent = meta.summary;

    document.querySelectorAll("[data-select-day]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-select-day") === state.selectedLandingDay);
    });

    if (!expandCard) return;

    document.querySelectorAll(".dayCard").forEach((otherCard) => {
      otherCard.classList.remove("is-open");
      otherCard.querySelector(".dayCardHeader")?.setAttribute("aria-expanded", "false");
    });
    document.querySelectorAll(".dayCardBody").forEach((otherBody) => otherBody.classList.add("hidden"));

    const body = document.getElementById(`dayCardBody-${state.selectedLandingDay}`);
    const card = document.getElementById(`dayCard-${state.selectedLandingDay}`);
    const header = card?.querySelector(".dayCardHeader");

    card?.classList.add("is-open");
    header?.setAttribute("aria-expanded", "true");
    body?.classList.remove("hidden");
  }

  function initLandingPhotoRail() {
    const viewport = document.querySelector(".landingPhotoRailViewport");
    const rail = document.querySelector(".landingPhotoRail");
    if (!viewport || !rail) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let paused = false;
    let frameId = null;
    let lastTimestamp = 0;
    let offset = 0;

    const visibleItems = [...rail.children].filter((item) => item.getAttribute("aria-hidden") !== "true");
    const getLoopWidth = () => {
      if (!visibleItems.length) return rail.scrollWidth / 2;
      const gap = parseFloat(window.getComputedStyle(rail).columnGap || window.getComputedStyle(rail).gap || "14");
      return visibleItems.reduce((sum, item) => sum + item.getBoundingClientRect().width, 0) + gap * Math.max(visibleItems.length - 1, 0);
    };

    const applyTransform = () => {
      rail.style.transform = `translate3d(${-offset}px, 0, 0)`;
    };

    const tick = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!paused) {
        const loopWidth = getLoopWidth();
        offset += delta * 0.035;
        if (offset >= loopWidth) {
          offset -= loopWidth;
        }
        applyTransform();
      }

      frameId = window.requestAnimationFrame(tick);
    };

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };

    viewport.addEventListener("mouseenter", pause);
    viewport.addEventListener("mouseleave", resume);
    viewport.addEventListener("focusin", pause);
    viewport.addEventListener("focusout", resume);
    viewport.addEventListener("touchstart", pause, { passive: true });
    viewport.addEventListener("touchend", resume, { passive: true });
    window.addEventListener("resize", () => {
      const loopWidth = getLoopWidth();
      if (offset >= loopWidth) offset = 0;
      applyTransform();
    });

    if (frameId) window.cancelAnimationFrame(frameId);
    applyTransform();
    frameId = window.requestAnimationFrame(tick);
  }

  function renderLandingPlans() {
    Object.entries(routePlans).forEach(([dayKey, items]) => {
      const container = document.getElementById(`landingPlan-${dayKey}`);
      if (!container) return;
      container.innerHTML = "";
      items.forEach((item) => {
        const row = document.createElement("div");
        row.className = "landingPlanItem";
        row.innerHTML = `
          <div class="${getPlanDotClass(item.type)}"></div>
          <div class="planText">
            <div class="planLabel">${item.label}</div>
            <div class="planMeta">${item.meta || ""}</div>
          </div>
        `;
        container.appendChild(row);
      });
    });
  }

  function bindLanding() {
    document.querySelectorAll('.siteNavLinks a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        const target = targetId ? document.querySelector(targetId) : null;
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    document.querySelectorAll("[data-day-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const dayKey = btn.getAttribute("data-day-toggle");
        const body = document.getElementById(`dayCardBody-${dayKey}`);
        const willOpen = body.classList.contains("hidden");
        syncLandingSelection(dayKey, willOpen);
        if (!willOpen) {
          btn.setAttribute("aria-expanded", "false");
          btn.closest(".dayCard")?.classList.remove("is-open");
          body.classList.add("hidden");
        }
      });
    });

    document.querySelectorAll("[data-select-day]").forEach((btn) => {
      btn.addEventListener("click", () => {
        syncLandingSelection(btn.getAttribute("data-select-day"), true);
      });
    });

    document.querySelectorAll("[data-open-map]").forEach((btn) => {
      btn.addEventListener("click", () => openMapForDay(btn.getAttribute("data-open-map")));
    });

    document.getElementById("landingGoToMapBtn")?.addEventListener("click", () => openMapForDay(state.selectedLandingDay));
    document.getElementById("landingPreviewBtn")?.addEventListener("click", () => {
      syncLandingSelection(state.selectedLandingDay, true);
      document.getElementById("itinerarySection")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return {
    syncLandingSelection,
    initLandingPhotoRail,
    renderLandingPlans,
    bindLanding,
  };
}
