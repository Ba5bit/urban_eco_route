export const mobileBackdropEl = () => document.getElementById("mobileBackdrop");
export const landingViewEl = () => document.getElementById("landingView");
export const mapViewEl = () => document.getElementById("mapView");

export function isMobileView() {
  const landscapeCompact = window.matchMedia("(orientation: landscape) and (max-height: 520px)").matches;
  return window.innerWidth <= 768 && !landscapeCompact;
}

export function refreshMapSize(state) {
  if (!state.map) return;
  requestAnimationFrame(() => state.map.invalidateSize());
}

export function setMobileBackdrop(isVisible) {
  const backdrop = mobileBackdropEl();
  if (!backdrop) return;
  backdrop.classList.toggle("is-open", !!isVisible);
}
