import {
  WIDGET_COLOR_ARTIFACT,
  WIDGET_COLOR_AZERITE,
  WIDGET_COLOR_HEIRLOOM,
  WIDGET_COLOR_LEGENDARY,
  WIDGET_COLOR_EPIC,
  WIDGET_COLOR_RARE,
  WIDGET_COLOR_UNCOMMON,
  WIDGET_COLOR_COMMON,
  WIDGET_COLOR_POOR
} from './constants';

export const toRgba = (rgba) => {
  return {
    r: rgba.r / 255,
    g: rgba.g / 255,
    b: rgba.b / 255,
    a: rgba.a / 255
  }
}

export const rarityColor = (rarity) => {
  switch (rarity) {
    case "ARTIFACT":
      return WIDGET_COLOR_ARTIFACT;
    case "AZERITE":
      return WIDGET_COLOR_AZERITE;
    case "HEIRLOOM":
      return WIDGET_COLOR_HEIRLOOM;
    case "LEGENDARY":
      return WIDGET_COLOR_LEGENDARY;
    case "EPIC":
      return WIDGET_COLOR_EPIC;
    case "RARE":
      return WIDGET_COLOR_RARE;
    case "UNCOMMON":
      return WIDGET_COLOR_UNCOMMON;
    case "COMMON":
      return WIDGET_COLOR_COMMON;
    case "POOR":
      return WIDGET_COLOR_POOR;
  }
}