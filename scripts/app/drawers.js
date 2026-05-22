export function createDrawerController() {
  function openLegendDrawer() {
    closeTodoDrawer();
    closeSuggestedDrawer();
    document.getElementById("legendDrawer")?.classList.remove("hidden");
  }

  function closeLegendDrawer() {
    document.getElementById("legendDrawer")?.classList.add("hidden");
  }

  function openTodoDrawer() {
    closeLegendDrawer();
    closeSuggestedDrawer();
    document.getElementById("todoDrawer")?.classList.remove("hidden");
  }

  function closeTodoDrawer() {
    document.getElementById("todoDrawer")?.classList.add("hidden");
  }

  function openSuggestedDrawer() {
    closeLegendDrawer();
    closeTodoDrawer();
    document.getElementById("suggestedDrawer")?.classList.remove("hidden");
  }

  function closeSuggestedDrawer() {
    document.getElementById("suggestedDrawer")?.classList.add("hidden");
  }

  return {
    openLegendDrawer,
    closeLegendDrawer,
    openTodoDrawer,
    closeTodoDrawer,
    openSuggestedDrawer,
    closeSuggestedDrawer,
  };
}
