import {
  WIDGET_QUALITY_COLORS,
  WIDGET_CLASS_COLORS
} from './constants';

export const toRgba = (rgba) => {
  let weirdA;
  if (rgba.a > 1) {
    weirdA = rgba.a / 255;
  } else {
    weirdA = rgba.a;
  }
  return {
    r: rgba.r / 255,
    g: rgba.g / 255,
    b: rgba.b / 255,
    a: weirdA
  }
}

export const playerClassColor = (playerClass) => {
  return WIDGET_CLASS_COLORS[playerClass.toLowerCase()];
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

export const getNamePosition = (title) => {
  const placeholder = '{name}';

  const before = title.indexOf(placeholder) > 0;
  const after = title.indexOf(placeholder) + placeholder.length < title.length;

  const cleanTitle = title.replace(placeholder, '').trim();

  let position;

  if (before) {
    position = 'succeeds'; // e.g., "Slayer {name}"
  } else if (after) {
    position = 'precedes'; // e.g., "{name} Jenkins"
  }

  return { position, title: cleanTitle }
}