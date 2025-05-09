import { WIDGET_GEAR_ITEM_ICON_SIZE } from './constants';
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
        return WIDGET_GEAR_ITEM_ICON_SIZE;
      case "SHOULDER":
        return WIDGET_GEAR_ITEM_ICON_SIZE * 2;
      case "CHEST":
      case "BACK":
        return WIDGET_GEAR_ITEM_ICON_SIZE * 3;
      case "TABARD":
        return WIDGET_GEAR_ITEM_ICON_SIZE * 4;
      case "SHIRT":
        return WIDGET_GEAR_ITEM_ICON_SIZE * 5;
      case "WRIST":
        return WIDGET_GEAR_ITEM_ICON_SIZE * 6;
      case "HANDS":
        return WIDGET_GEAR_ITEM_ICON_SIZE * 7;
      case "WAIST":
        return WIDGET_GEAR_ITEM_ICON_SIZE * 8;
      case "LEGS":
        return WIDGET_GEAR_ITEM_ICON_SIZE * 9;
      case "FEET":
        return WIDGET_GEAR_ITEM_ICON_SIZE * 10;
      case "FINGER_1":
      case "FINGER_2":
        return WIDGET_GEAR_ITEM_ICON_SIZE * 11;
      case "TRINKET_1":
      case "TRINKET_2":
        return WIDGET_GEAR_ITEM_ICON_SIZE * 12;
      case "MAIN_HAND":
        return WIDGET_GEAR_ITEM_ICON_SIZE * 13;
      case "OFF_HAND":
        return WIDGET_GEAR_ITEM_ICON_SIZE * 14;
    }
  }

  return (
    <AutoLayout
      width={WIDGET_GEAR_ITEM_ICON_SIZE}
      height={WIDGET_GEAR_ITEM_ICON_SIZE}
      overflow="hidden"
      stroke={gearItem ? rarityColor(gearItem.quality.type) : "#333333"}
      strokeWidth={1}
      cornerRadius={8}>
      {
        gearItem
        ? <Image
            src={gearItem.media.content.assets[0].value}
            width={WIDGET_GEAR_ITEM_ICON_SIZE}
            height={WIDGET_GEAR_ITEM_ICON_SIZE}
          />
        : <Image
            src={emptyGearPlaceholderUrl}
            width={WIDGET_GEAR_ITEM_ICON_SIZE}
            height={WIDGET_GEAR_ITEM_ICON_SIZE * 17}
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