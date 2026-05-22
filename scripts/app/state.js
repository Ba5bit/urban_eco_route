export function createAppState() {
  return {
    map: null,
    markersLayer: L.layerGroup(),
    currentDay: null,
    currentStop: null,
    lightboxPhotos: [],
    lightboxIndex: 0,
    activeLightboxTitle: "",
    panoramaItems: [],
    panoramaIndex: 0,
    activePanoramaTitle: "",
    panoramaOffsetX: 0,
    activeCategories: new Set(),
    activeCategoriesByDay: new Map(),
    selectedLandingDay: "day1",
    utilityMode: "filters",
    utilitySheetHideTimer: null,
    audioGuideChoiceCache: new Map(),
    selectedAudioGuideLanguage: "en",
  };
}
