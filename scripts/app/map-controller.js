import { getIcon } from "../map/icons.js";
import { landingViewEl, mapViewEl, isMobileView, refreshMapSize } from "./dom.js";
import {
  getFootprintText,
  getPreviewPhoto,
  getTransportTooltipSteps,
  isTooltipOnlyStop,
  isTransportStop,
} from "./day-utils.js";

export function createMapController({ state, days, legend, todo, stopPage }) {
  function getTooltipLinks(stop) {
    const links = [];
    if (stop.websiteUrl && stop.websiteLabel && stop.websiteLabel !== "Google Maps") {
      links.push(`<a class="tooltipLink" href="${stop.websiteUrl}" target="_blank" rel="noreferrer">${stop.websiteLabel}</a>`);
    }

    return links.join("");
  }

  function getTooltipTodoButton(stop) {
    if (stop?.category !== "mall" || !state.currentDay) return "";
    const order = todo.getTodoOrder(state.currentDay, stop);
    const added = order > 0;
    return `
      <button
        class="tooltipTodoBtn ${added ? "is-added" : ""}"
        type="button"
        data-tooltip-todo="${stop.id}"
        aria-pressed="${added ? "true" : "false"}"
      >
        ${added ? `Added as stop #${order}` : "Add to to-do list"}
      </button>
    `;
  }

  function tooltipHtml(stop) {
    if (isTransportStop(stop)) {
      const steps = getTransportTooltipSteps(stop);
      return `
        <div class="transportInfoCard">
          <div class="tooltipBody">
            <div class="tooltipTransportTag">${stop.category === "mtr" ? "MTR connection" : "Bus connection"}</div>
            <div class="tooltipTitle">${stop.title}</div>
            <div class="tooltipSubtitle">${stop.subtitle || ""}</div>
            ${steps.length ? `<div class="tooltipSteps">${steps.map((step) => `<div class="tooltipStep">${step}</div>`).join("")}</div>` : ""}
          </div>
        </div>
      `;
    }

    if (stop?.tooltipOnly) {
      const links = getTooltipLinks(stop);
      const todoButton = getTooltipTodoButton(stop);
      const previewImage = stop.category === "toilet"
        ? ""
        : `<img class="tooltipImg" src="${getPreviewPhoto(stop)}" alt="${stop.title} preview" />`;
      return `
        <div class="tooltipCard tooltipInfoCard">
          ${previewImage}
          <div class="tooltipBody">
            <div class="tooltipTitle">${stop.title}</div>
            ${stop.subtitle ? `<div class="tooltipSubtitle">${stop.subtitle}</div>` : ""}
            ${stop.openingHours ? `<div class="tooltipLine"><strong>Opening:</strong> ${stop.openingHours}</div>` : ""}
            ${stop.shortInfo ? `<div class="tooltipLine">${stop.shortInfo}</div>` : ""}
            ${stop.footprintEstimate ? `<div class="tooltipLine"><strong>Carbon:</strong> ${stop.footprintEstimate}</div>` : ""}
            ${links ? `<div class="tooltipLinks">${links}</div>` : ""}
            ${todoButton}
          </div>
        </div>
      `;
    }

    return `
      <div class="tooltipCard">
        <img class="tooltipImg" src="${getPreviewPhoto(stop)}" alt="${stop.title} preview" />
        <div class="tooltipBody">
          <div class="tooltipTitle">${stop.title}</div>
          ${stop.difficulty ? `<div class="tooltipLine"><strong>Difficulty:</strong> ${stop.difficulty}</div>` : ""}
          <div class="tooltipFootprint">${getFootprintText(stop)}</div>
        </div>
      </div>
    `;
  }

  function openStop(dayObj, stop) {
    stopPage.renderStopContent(dayObj, stop);
    stopPage.openStopPage();
    state.map.flyTo(stop.latlng, Math.max(state.map.getZoom(), 15), { duration: 0.45 });
  }

  function showDay(dayObj) {
    state.markersLayer.clearLayers();
    const bounds = [];

    dayObj.stops.forEach((stop) => {
      if (!state.activeCategories.has(stop.category)) return;
      bounds.push(stop.latlng);
      const marker = L.marker(stop.latlng, {
        icon: getIcon(stop.category),
        keyboard: true,
        title: stop.title,
      }).addTo(state.markersLayer);

      const tooltipOptions = {
        direction: "top",
        opacity: 1,
        className: isTransportStop(stop) ? "customTooltip transportTooltip" : "customTooltip",
        offset: [0, -14],
      };

      if (isTooltipOnlyStop(stop)) {
        marker.bindPopup(tooltipHtml(stop), {
          className: isTransportStop(stop) ? "transportPopup" : "infoPopup",
          autoPan: true,
          autoPanPadding: [18, 18],
          closeButton: !isMobileView(),
          maxWidth: 320,
          minWidth: 220,
          offset: [0, -12],
        });
        marker.on("click", () => {
          state.currentStop = null;
          stopPage.closeStopPage();
          marker.openPopup();
          state.map.flyTo(stop.latlng, Math.max(state.map.getZoom(), 15), { duration: 0.35 });
        });
      } else {
        marker.on("click", () => openStop(dayObj, stop));

        if (!isMobileView()) {
          marker.bindTooltip(tooltipHtml(stop), tooltipOptions);
        }
      }
    });

    if (bounds.length) {
      const pad = isMobileView() ? [28, 28] : [48, 48];
      state.map.fitBounds(bounds, { padding: pad, maxZoom: dayObj.zoom || 15 });
    } else {
      state.map.setView(dayObj.center, dayObj.zoom);
    }
  }

  function switchDay(dayObj) {
    state.currentDay = dayObj;
    state.currentStop = null;
    legend.syncActiveCategories(dayObj);
    document.getElementById("day1Btn").classList.toggle("active", dayObj === days.day1);
    document.getElementById("day2Btn").classList.toggle("active", dayObj === days.day2);
    todo.updateChecklistPanels(dayObj);
    stopPage.renderDefaultDayInfo(dayObj);
    legend.updateLegendAndMap();
    stopPage.closeStopPage();
  }

  function openMapForDay(dayKey) {
    landingViewEl().classList.add("hidden");
    mapViewEl().classList.remove("hidden");
    setTimeout(() => {
      refreshMapSize(state);
      switchDay(dayKey === "day2" ? days.day2 : days.day1);
    }, 40);
  }

  function initMap() {
    state.map = L.map("map", { zoomControl: false });
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      maxZoom: 20,
      attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
    }).addTo(state.map);
    state.markersLayer.addTo(state.map);
  }

  return {
    initMap,
    switchDay,
    openMapForDay,
    showDay,
  };
}
