import { day1, day2, landingDayMeta, routePlans } from "./scripts/data/itinerary.js";
import { createAppState } from "./scripts/app/state.js";
import { landingViewEl, mapViewEl, refreshMapSize } from "./scripts/app/dom.js";
import { getDayKey, getFootprintText } from "./scripts/app/day-utils.js";
import { createLegendController } from "./scripts/app/legend.js";
import { createAudioGuideController } from "./scripts/app/audio-guide.js";
import { createTodoController } from "./scripts/app/todo.js";
import { createMediaController } from "./scripts/app/media.js";
import { createLandingController } from "./scripts/app/landing.js";
import { createStopPageController } from "./scripts/app/stop-page.js";
import { createDrawerController } from "./scripts/app/drawers.js";
import { createMobileUtilityController } from "./scripts/app/mobile-utility.js";
import { createMapController } from "./scripts/app/map-controller.js";
import { createMapUiController } from "./scripts/app/map-ui.js";

const days = { day1, day2 };

function init() {
  const state = createAppState();
  const dayKeyFor = (dayObj) => getDayKey(dayObj, days);

  let mapController;

  const legend = createLegendController({
    state,
    getDayKey: dayKeyFor,
    onUpdateMap: (dayObj) => mapController.showDay(dayObj),
  });
  const audioGuide = createAudioGuideController({ state });
  const todo = createTodoController({ state, routePlans, getDayKey: dayKeyFor });
  const media = createMediaController({ state });
  const stopPage = createStopPageController({
    state,
    media,
    audioGuide,
    todo,
    getFootprintText,
  });
  const drawers = createDrawerController();
  const mobileUtility = createMobileUtilityController({ state });

  function showLanding() {
    mapViewEl().classList.add("hidden");
    landingViewEl().classList.remove("hidden");
    stopPage.closeStopPage();
    drawers.closeLegendDrawer();
    drawers.closeTodoDrawer();
    drawers.closeSuggestedDrawer();
    mobileUtility.closeMobileUtilitySheet();
  }

  mapController = createMapController({
    state,
    days,
    legend,
    todo,
    stopPage,
  });

  const landing = createLandingController({
    state,
    landingDayMeta,
    routePlans,
    openMapForDay: (dayKey) => mapController.openMapForDay(dayKey),
  });

  const mapUi = createMapUiController({
    state,
    days,
    mapController,
    drawers,
    mobileUtility,
    legend,
    todo,
    stopPage,
    showLanding,
  });

  mapController.initMap();
  landing.renderLandingPlans();
  landing.bindLanding();
  landing.syncLandingSelection("day1", true);
  landing.initLandingPhotoRail();
  mapUi.bindMapUi();
  media.bindLightbox();
  media.bindPanoramaViewer();

  window.addEventListener("resize", () => {
    refreshMapSize(state);
    if (!state.map || !state.currentDay) return;
    mapController.showDay(state.currentDay);
  });

  showLanding();
}

window.addEventListener("DOMContentLoaded", init);
