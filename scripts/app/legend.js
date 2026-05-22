import { categoryLabels, categoryLegendNames, categoryLegendOrder } from "../data/categories.js";
import { getCategoryIconUrl } from "../map/icons.js";
import { getDayCategories } from "./day-utils.js";

export function createLegendController({ state, getDayKey, onUpdateMap }) {
  function setStoredActiveCategories(dayObj, categories) {
    const next = new Set(categories);
    state.activeCategoriesByDay.set(getDayKey(dayObj), next);
    state.activeCategories = new Set(next);
  }

  function syncActiveCategories(dayObj) {
    const cats = getDayCategories(dayObj);
    const dayKey = getDayKey(dayObj);
    const stored = state.activeCategoriesByDay.get(dayKey);

    if (!stored) {
      setStoredActiveCategories(dayObj, cats);
      return;
    }

    setStoredActiveCategories(dayObj, [...stored].filter((cat) => cats.includes(cat)));
  }

  function buildLegendStatic(container, dayObj) {
    if (!container || !dayObj) return;
    const cats = getDayCategories(dayObj);
    container.innerHTML = "";
    categoryLegendOrder.filter((cat) => cats.includes(cat)).forEach((cat) => {
      const row = document.createElement("div");
      row.className = "legendStaticItem";
      row.innerHTML = `<img src="${getCategoryIconUrl(cat)}" alt="" /><span>${categoryLegendNames[cat] || categoryLabels[cat] || cat}</span>`;
      container.appendChild(row);
    });
  }

  function buildLegend(container, dayObj) {
    if (!container || !dayObj) return;
    syncActiveCategories(dayObj);
    const cats = getDayCategories(dayObj);
    container.innerHTML = "";

    cats.forEach((cat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `legendFilterRow ${state.activeCategories.has(cat) ? "active" : "inactive"}`;
      btn.innerHTML = `
        <img src="${getCategoryIconUrl(cat)}" alt="" />
        <span>${categoryLegendNames[cat] || categoryLabels[cat] || cat}</span>
        <span class="filterStatus">${state.activeCategories.has(cat) ? "Shown" : "Hidden"}</span>
      `;
      btn.addEventListener("click", () => {
        const next = new Set(state.activeCategories);
        if (next.has(cat)) next.delete(cat);
        else next.add(cat);
        setStoredActiveCategories(dayObj, next);
        updateLegendAndMap();
      });
      container.appendChild(btn);
    });
  }

  function selectAllLegendCategories() {
    if (!state.currentDay) return;
    setStoredActiveCategories(state.currentDay, getDayCategories(state.currentDay));
    updateLegendAndMap();
  }

  function clearAllLegendCategories() {
    if (!state.currentDay) return;
    setStoredActiveCategories(state.currentDay, []);
    updateLegendAndMap();
  }

  function updateLegendAndMap() {
    if (!state.currentDay) return;
    buildLegendStatic(document.getElementById("legendStaticList"), state.currentDay);
    buildLegendStatic(document.getElementById("mobileLegendStaticList"), state.currentDay);
    buildLegend(document.getElementById("legendFilters"), state.currentDay);
    buildLegend(document.getElementById("mobileLegendFilters"), state.currentDay);
    onUpdateMap(state.currentDay);
  }

  return {
    syncActiveCategories,
    selectAllLegendCategories,
    clearAllLegendCategories,
    updateLegendAndMap,
  };
}
