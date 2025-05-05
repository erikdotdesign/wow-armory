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
    case "AZERITE":
      return "#e5cc80";
    case "HEIRLOOM":
      return "#00ccff";
    case "LEGENDARY":
      return "#ff8000";
    case "EPIC":
      return "#c600ff";
    case "RARE":
      return "#0081ff";
    case "UNCOMMON":
      return "#1eff00";
    case "COMMON":
      return "#ffffff";
    case "POOR":
      return "#9d9d9d";
  }
}