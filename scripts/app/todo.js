export function createTodoController({ state, routePlans, getDayKey }) {
  function getTodoStorageKey(dayObj) {
    return `tour-stop-todo-${getDayKey(dayObj)}`;
  }

  function loadTodoIds(dayObj) {
    try {
      const raw = localStorage.getItem(getTodoStorageKey(dayObj));
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveTodoIds(dayObj, ids) {
    localStorage.setItem(getTodoStorageKey(dayObj), JSON.stringify(ids));
  }

  function getTodoOrder(dayObj, stop) {
    return loadTodoIds(dayObj).indexOf(stop.id) + 1;
  }

  function getOrderedTodoStops(dayObj) {
    const stopById = new Map(dayObj.stops.map((stop) => [stop.id, stop]));
    return loadTodoIds(dayObj)
      .map((id) => stopById.get(id))
      .filter(Boolean);
  }

  function updateStopTodoButton(dayObj, stop) {
    const btn = document.getElementById("stopTodoBtn");
    if (!btn || !dayObj || !stop) return;
    const order = getTodoOrder(dayObj, stop);
    const added = order > 0;
    btn.classList.toggle("is-added", added);
    btn.textContent = added ? `\u2713 Added as stop #${order}` : "\u2713 Add to to-do list";
    btn.setAttribute("aria-pressed", added ? "true" : "false");
  }

  function renderChecklist(container, dayObj) {
    if (!container || !dayObj) return;
    const items = getOrderedTodoStops(dayObj);
    container.innerHTML = "";

    if (!items.length) {
      container.innerHTML = `<div class="checkEmpty">Your to-do list is empty. Open a stop and add it with the check button.</div>`;
      return;
    }

    items.forEach((stop, index) => {
      const row = document.createElement("div");
      row.className = "checkItem";
      row.innerHTML = `
        <div class="checkOrder">${index + 1}</div>
        <div class="checkText">
          <div class="checkTitle">${stop.title}</div>
          <div class="checkMeta">${stop.subtitle || dayObj.name}</div>
        </div>
        <input type="checkbox" checked aria-label="Remove ${stop.title} from your to-do list" />
      `;
      const checkbox = row.querySelector("input");
      checkbox.addEventListener("change", () => {
        toggleStopTodo(dayObj, stop);
        if (state.currentStop?.id === stop.id && state.currentDay === dayObj) updateStopTodoButton(dayObj, stop);
      });
      container.appendChild(row);
    });
  }

  function renderSuggestedChecklist(container, dayObj) {
    if (!container || !dayObj) return;
    const items = routePlans[getDayKey(dayObj)] || [];
    container.innerHTML = "";

    items.forEach((item, index) => {
      const row = document.createElement("div");
      row.className = "checkItem suggestedItem";
      row.innerHTML = `
        <div class="checkOrder suggestedOrder">${index + 1}</div>
        <div class="checkText">
          <div class="checkTitle">${item.label}</div>
          <div class="checkMeta">${item.meta || ""}</div>
        </div>
        <div class="suggestedType suggestedType-${item.type}">${item.type}</div>
      `;
      container.appendChild(row);
    });
  }

  function updateChecklistPanels(dayObj) {
    renderChecklist(document.getElementById("routeChecklist"), dayObj);
    renderChecklist(document.getElementById("mobileChecklist"), dayObj);
    renderSuggestedChecklist(document.getElementById("suggestedChecklist"), dayObj);
    renderSuggestedChecklist(document.getElementById("mobileSuggestedChecklist"), dayObj);
  }

  function toggleStopTodo(dayObj, stop) {
    const ids = loadTodoIds(dayObj);
    const nextIds = ids.includes(stop.id) ? ids.filter((id) => id !== stop.id) : [...ids, stop.id];
    saveTodoIds(dayObj, nextIds);
    updateChecklistPanels(dayObj);
    updateStopTodoButton(dayObj, stop);
  }

  function clearAllTodoStops(dayObj) {
    if (!dayObj) return;
    saveTodoIds(dayObj, []);
    updateChecklistPanels(dayObj);
    if (state.currentStop && state.currentDay === dayObj) updateStopTodoButton(dayObj, state.currentStop);
  }

  return {
    getTodoOrder,
    toggleStopTodo,
    clearAllTodoStops,
    updateStopTodoButton,
    updateChecklistPanels,
  };
}
