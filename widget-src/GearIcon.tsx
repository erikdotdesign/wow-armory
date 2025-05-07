import { rarityColor } from "./helpers.js";

const { widget } = figma;
const { Image, AutoLayout } = widget;

interface GearIconProps {
  gearItem: any,
  gearSlot: GearSlotType
}

const GearIcon = ({
  gearItem,
  gearSlot
}: GearIconProps) => {

  const emptyGearPlaceholderUrl = "https://assets-bwa.worldofwarcraft.blizzard.com/55d306a87160872f515d.png";

  const getPlaceholderPosition = () => {
    switch (gearSlot) {
      case "HEAD":
        return 0;
      case "NECK":
        return 56;
      case "SHOULDER":
        return 56 * 2;
      case "CHEST":
      case "BACK":
        return 56 * 3;
      case "TABARD":
        return 56 * 4;
      case "SHIRT":
        return 56 * 5;
      case "WRIST":
        return 56 * 6;
      case "HANDS":
        return 56 * 7;
      case "WAIST":
        return 56 * 8;
      case "LEGS":
        return 56 * 9;
      case "FEET":
        return 56 * 10;
      case "FINGER_1":
      case "FINGER_2":
        return 56 * 11;
      case "TRINKET_1":
      case "TRINKET_2":
        return 56 * 12;
      case "MAIN_HAND":
        return 56 * 13;
      case "OFF_HAND":
        return 56 * 14;
    }
  }

  return (
    <AutoLayout
      width={56}
      height={56}
      overflow="hidden"
      stroke={gearItem ? rarityColor(gearItem.quality.type) : "#333333"}
      strokeWidth={1}>
      {
        gearItem
        ? <Image
            src={gearItem.media.content.assets[0].value}
            width={56}
            height={56}
          />
        : <Image
            src={emptyGearPlaceholderUrl}
            width={56}
            height={952}
            y={getPlaceholderPosition() * -1}
            positioning="absolute" />
      }
      {
        gearItem && gearItem.transmog
        ? <Image
            width={24}
            height={24}
            y={31}
            positioning="absolute"
            src={"https://assets-bwa.worldofwarcraft.blizzard.com/51ef2e5911d1706b1607.png"} />
        : null
      }
    </AutoLayout>
  )
}

export default GearIcon;