import { mobileBackdropEl } from "./dom.js";

export function createMapUiController({
  state,
  days,
  mapController,
  drawers,
  mobileUtility,
  legend,
  todo,
  stopPage,
  showLanding,
}) {
  function bindMapUi() {
    document.getElementById("day1Btn")?.addEventListener("click", () => mapController.switchDay(days.day1));
    document.getElementById("day2Btn")?.addEventListener("click", () => mapController.switchDay(days.day2));
    document.getElementById("backToLandingBtn")?.addEventListener("click", showLanding);
    document.getElementById("menuToggleBtn")?.addEventListener("click", () => {
      if (document.getElementById("legendDrawer")?.classList.contains("hidden")) drawers.openLegendDrawer();
      else drawers.closeLegendDrawer();
    });
    document.getElementById("todoToggleBtn")?.addEventListener("click", () => {
      if (document.getElementById("todoDrawer")?.classList.contains("hidden")) drawers.openTodoDrawer();
      else drawers.closeTodoDrawer();
    });
    document.getElementById("suggestedToggleBtn")?.addEventListener("click", () => {
      if (document.getElementById("suggestedDrawer")?.classList.contains("hidden")) drawers.openSuggestedDrawer();
      else drawers.closeSuggestedDrawer();
    });
    document.getElementById("legendCloseBtn")?.addEventListener("click", drawers.closeLegendDrawer);
    document.getElementById("todoCloseBtn")?.addEventListener("click", drawers.closeTodoDrawer);
    document.getElementById("suggestedCloseBtn")?.addEventListener("click", drawers.closeSuggestedDrawer);
    document.getElementById("mobileFilterFab")?.addEventListener("click", () => mobileUtility.openMobileUtilitySheet("filters"));
    document.getElementById("mobileTodoFab")?.addEventListener("click", () => mobileUtility.openMobileUtilitySheet("todo"));
    document.getElementById("mobileSuggestedFab")?.addEventListener("click", () => mobileUtility.openMobileUtilitySheet("suggested"));
    document.getElementById("mobileUtilityCloseBtn")?.addEventListener("click", mobileUtility.closeMobileUtilitySheet);
    document.getElementById("utilityTabFilters")?.addEventListener("click", () => mobileUtility.setUtilityMode("filters"));
    document.getElementById("utilityTabTodo")?.addEventListener("click", () => mobileUtility.setUtilityMode("todo"));
    document.getElementById("utilityTabSuggested")?.addEventListener("click", () => mobileUtility.setUtilityMode("suggested"));
    document.getElementById("todoClearAllBtn")?.addEventListener("click", () => todo.clearAllTodoStops(state.currentDay));
    document.getElementById("mobileTodoClearAllBtn")?.addEventListener("click", () => todo.clearAllTodoStops(state.currentDay));
    document.getElementById("legendSelectAllBtn")?.addEventListener("click", legend.selectAllLegendCategories);
    document.getElementById("legendClearAllBtn")?.addEventListener("click", legend.clearAllLegendCategories);
    document.getElementById("mobileLegendSelectAllBtn")?.addEventListener("click", legend.selectAllLegendCategories);
    document.getElementById("mobileLegendClearAllBtn")?.addEventListener("click", legend.clearAllLegendCategories);
    mobileBackdropEl()?.addEventListener("click", mobileUtility.closeMobileUtilitySheet);
    document.getElementById("stopPageBackBtn")?.addEventListener("click", stopPage.closeStopPage);
    document.getElementById("stopPageIntroBtn")?.addEventListener("click", showLanding);
    document.getElementById("stopTodoBtn")?.addEventListener("click", () => {
      if (!state.currentDay || !state.currentStop) return;
      todo.toggleStopTodo(state.currentDay, state.currentStop);
    });
    document.addEventListener("click", (event) => {
      const button = event.target.closest("[data-tooltip-todo]");
      if (!button || !state.currentDay) return;
      event.preventDefault();
      event.stopPropagation();

      const stop = state.currentDay.stops.find((item) => item.id === button.dataset.tooltipTodo);
      if (!stop) return;

      todo.toggleStopTodo(state.currentDay, stop);
      const order = todo.getTodoOrder(state.currentDay, stop);
      const added = order > 0;
      button.classList.toggle("is-added", added);
      button.setAttribute("aria-pressed", added ? "true" : "false");
      button.textContent = added ? `Added as stop #${order}` : "Add to to-do list";
    });
    mobileUtility.bindMobileUtilitySheetGestures();
  }

  return { bindMapUi };
}
