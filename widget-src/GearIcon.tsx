import { rarityColor } from "../helpers.js";

const { widget } = figma;
const { Image } = widget;

const GearIcon = ({
  gearItem
}) => {
  return (
    <Image
      src={gearItem.media.content.assets[0].value}
      width={56}
      height={56}
      stroke={rarityColor(gearItem.quality.type)}
      strokeWidth={1}
    />
  )
}

export default GearIcon;