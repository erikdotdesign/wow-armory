import {
  WIDGET_QUALITY_COLORS
} from './constants';

export const toRgba = (rgba) => {
  return {
    r: rgba.r / 255,
    g: rgba.g / 255,
    b: rgba.b / 255,
    a: rgba.a
  }
}

export const rarityColor = (rarity) => {
  return WIDGET_QUALITY_COLORS[rarity.toLowerCase()];
  // switch (rarity) {
  //   case "ARTIFACT":
  //     return WIDGET_COLOR_ARTIFACT;
  //   case "AZERITE":
  //     return WIDGET_COLOR_AZERITE;
  //   case "HEIRLOOM":
  //     return WIDGET_COLOR_HEIRLOOM;
  //   case "LEGENDARY":
  //     return WIDGET_COLOR_LEGENDARY;
  //   case "EPIC":
  //     return WIDGET_COLOR_EPIC;
  //   case "RARE":
  //     return WIDGET_COLOR_RARE;
  //   case "UNCOMMON":
  //     return WIDGET_COLOR_UNCOMMON;
  //   case "COMMON":
  //     return WIDGET_COLOR_COMMON;
  //   case "POOR":
  //     return WIDGET_COLOR_POOR;
  // }
}