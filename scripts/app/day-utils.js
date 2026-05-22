import { categoryLabels, footprintByCategory } from "../data/categories.js";

export function getDayKey(dayObj, days) {
  return dayObj === days.day2 ? "day2" : "day1";
}

export function getDayCategories(dayObj) {
  return [...new Set(dayObj.stops.map((stop) => stop.category))];
}

export function getFootprintText(stop) {
  return stop.footprint || footprintByCategory[stop.category] || "Estimated footprint: 0.3-1.0 kg CO2e for a short stop within the suggested route.";
}

export function getPreviewPhoto(stop) {
  if (stop.photos?.length) return stop.photos[0];

  const escapeSvgText = (value) => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const title = escapeSvgText(stop?.title || "Location preview");
  const category = escapeSvgText(categoryLabels[stop?.category] || "Route stop");

  return "data:image/svg+xml;utf8," + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="420" viewBox="0 0 800 420">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fff7ea"/>
          <stop offset="100%" stop-color="#f2dcc2"/>
        </linearGradient>
      </defs>
      <rect width="800" height="420" fill="url(#bg)"/>
      <rect x="38" y="38" width="724" height="344" rx="28" fill="rgba(255,255,255,0.72)" stroke="rgba(186,122,38,0.16)"/>
      <text x="50%" y="44%" dominant-baseline="middle" text-anchor="middle" fill="#8a5417" font-size="24" font-family="Arial, sans-serif" letter-spacing="3">
        ${category.toUpperCase()}
      </text>
      <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="#2d3d4c" font-size="34" font-family="Arial, sans-serif" font-weight="700">
        ${title}
      </text>
    </svg>
  `);
}

export function isTransportStop(stop) {
  return stop?.category === "bus" || stop?.category === "mtr";
}

export function isTooltipOnlyStop(stop) {
  return isTransportStop(stop) || !!stop?.tooltipOnly;
}

export function getTransportTooltipSteps(stop) {
  return (stop.steps || []).filter(Boolean).slice(0, 4);
}

export function getPlanDotClass(type) {
  if (type === "transfer") return "planDot transfer";
  if (type === "optional") return "planDot optional";
  return "planDot";
}
