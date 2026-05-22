import { setMobileBackdrop } from "./dom.js";

export function createMobileUtilityController({ state }) {
  function setUtilityMode(mode) {
    state.utilityMode = mode;
    document.getElementById("utilityTabFilters")?.classList.toggle("active", mode === "filters");
    document.getElementById("utilityTabTodo")?.classList.toggle("active", mode === "todo");
    document.getElementById("utilityTabSuggested")?.classList.toggle("active", mode === "suggested");
    document.getElementById("utilityFiltersPane")?.classList.toggle("hidden", mode !== "filters");
    document.getElementById("utilityTodoPane")?.classList.toggle("hidden", mode !== "todo");
    document.getElementById("utilitySuggestedPane")?.classList.toggle("hidden", mode !== "suggested");

    const eyebrow = document.getElementById("utilitySheetEyebrow");
    const title = document.getElementById("utilitySheetTitle");

    if (eyebrow) {
      eyebrow.textContent = mode === "filters"
        ? "Map legend"
        : mode === "todo"
          ? "Your route"
          : "Suggested itinerary";
    }

    if (title) {
      title.textContent = mode === "filters"
        ? "Show or hide categories"
        : mode === "todo"
          ? "Your ordered to-do list"
          : "Follow our recommended flow";
    }
  }

  function resetMobileUtilitySheetPosition(animate = true) {
    const sheet = document.getElementById("mobileUtilitySheet");
    if (!sheet) return;
    sheet.style.transition = animate ? "transform 240ms cubic-bezier(.22,.9,.24,1)" : "none";
    sheet.style.transform = "translateY(0px)";
  }

  function openMobileUtilitySheet(mode = "filters") {
    const sheet = document.getElementById("mobileUtilitySheet");
    if (!sheet) return;
    if (state.utilitySheetHideTimer) {
      clearTimeout(state.utilitySheetHideTimer);
      state.utilitySheetHideTimer = null;
    }
    setUtilityMode(mode);
    sheet.classList.remove("hidden");
    resetMobileUtilitySheetPosition(false);
    requestAnimationFrame(() => resetMobileUtilitySheetPosition(true));
    setMobileBackdrop(true);
  }

  function closeMobileUtilitySheet() {
    const sheet = document.getElementById("mobileUtilitySheet");
    if (!sheet) return;
    if (state.utilitySheetHideTimer) clearTimeout(state.utilitySheetHideTimer);
    sheet.style.transition = "transform 220ms cubic-bezier(.22,.9,.24,1)";
    sheet.style.transform = "translateY(100%)";
    setMobileBackdrop(false);
    state.utilitySheetHideTimer = window.setTimeout(() => {
      sheet.classList.add("hidden");
      sheet.style.transition = "";
      sheet.style.transform = "";
      state.utilitySheetHideTimer = null;
    }, 220);
  }

  function bindMobileUtilitySheetGestures() {
    const sheet = document.getElementById("mobileUtilitySheet");
    const handle = document.getElementById("utilitySheetHandle");
    const header = sheet?.querySelector(".utilitySheetHeader");
    const tabs = sheet?.querySelector(".utilityTabs");
    const dragTargets = [handle, header, tabs].filter(Boolean);

    if (!sheet || !dragTargets.length) return;

    let startY = 0;
    let startX = 0;
    let currentY = 0;
    let dragging = false;

    const startDrag = (touch) => {
      if (sheet.classList.contains("hidden")) return;
      dragging = true;
      startY = touch.clientY;
      startX = touch.clientX;
      currentY = 0;
      sheet.style.transition = "none";
    };

    const moveDrag = (touch, event) => {
      if (!dragging) return;
      const deltaY = touch.clientY - startY;
      const deltaX = touch.clientX - startX;
      if (deltaY <= 0 || Math.abs(deltaY) < Math.abs(deltaX)) {
        currentY = 0;
        sheet.style.transform = "translateY(0px)";
        return;
      }
      currentY = deltaY;
      sheet.style.transform = `translateY(${deltaY}px)`;
      event.preventDefault();
    };

    const endDrag = () => {
      if (!dragging) return;
      dragging = false;
      if (currentY > 90) closeMobileUtilitySheet();
      else resetMobileUtilitySheetPosition(true);
    };

    dragTargets.forEach((target) => {
      target.addEventListener("touchstart", (event) => {
        if (event.touches?.length !== 1) return;
        startDrag(event.touches[0]);
      }, { passive: true });

      target.addEventListener("touchmove", (event) => {
        if (event.touches?.length !== 1) return;
        moveDrag(event.touches[0], event);
      }, { passive: false });

      target.addEventListener("touchend", endDrag, { passive: true });
      target.addEventListener("touchcancel", endDrag, { passive: true });
    });
  }

  return {
    setUtilityMode,
    openMobileUtilitySheet,
    closeMobileUtilitySheet,
    bindMobileUtilitySheetGestures,
  };
}
