/* ---------- ICONS ---------- */

const ICON_SIZE = [34, 34];
const ICON_ANCHOR = [17, 34];
const POPUP_ANCHOR = [0, -30];

function makeSvgIcon(url) {
  return L.icon({
    iconUrl: url,
    iconSize: ICON_SIZE,
    iconAnchor: ICON_ANCHOR,
    popupAnchor: POPUP_ANCHOR,
  });
}

const ICONS = {
  bus: makeSvgIcon("./assets/icons/bus-stop-svgrepo-com.svg"),
  mtr: makeSvgIcon("./assets/icons/hong-kong-metro-logo-svgrepo-com.svg"),
  restaurant: makeSvgIcon("./assets/icons/restaurant-svgrepo-com.svg"),
  "convenience-store": makeSvgIcon("./assets/icons/convenience-store-svgrepo-com.svg"),
  store: makeSvgIcon("./assets/icons/store-svgrepo-com.svg"),
  toilet: makeSvgIcon("./assets/icons/toilet-restroom-svgrepo-com.svg"),
  hotel: makeSvgIcon("./assets/icons/building-big-svgrepo-com.svg"),
  mall: makeSvgIcon("./assets/icons/shopping-center-svgrepo-com.svg"),
  hiking: makeSvgIcon("./assets/icons/mountain-road-svgrepo-com.svg"),
  garden: makeSvgIcon("./assets/icons/garden-svgrepo-com.svg"),
  museum: makeSvgIcon("./assets/icons/museum-svgrepo-com.svg"),
  railway: makeSvgIcon("./assets/icons/train-svgrepo-com (1).svg"),
  tree: makeSvgIcon("./assets/icons/tree-svgrepo-com.svg"),
  temple: makeSvgIcon("./assets/icons/temple.svg"),
  exhibition: makeSvgIcon("./assets/icons/pavilion-svgrepo-com.svg"),
};

export function getIcon(category) {
  return ICONS[category] || ICONS.museum;
}

export function getCategoryIconUrl(category) {
  return getIcon(category)?.options?.iconUrl || "";
}
