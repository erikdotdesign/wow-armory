import GearIcon from "./GearIcon.js";
import GearItemDetails from "./GearItemDetails.js";
import { WIDGET_SPACING, WIDGET_COLOR_GOLD } from "./constants";

const { widget } = figma;
const { AutoLayout } = widget;

interface GearItemProps {
  gearItem: any;
  rightAlign: boolean;
  gearSlot: GearSlotType;
  gearInspect: any;
  setGearInspect(gearItem: any): void;
}

const GearItem = ({
  gearItem,
  rightAlign = false,
  gearSlot,
  gearInspect,
  setGearInspect
}: GearItemProps) => {

  const handleClick = () => {
    if (gearItem) {
      if (gearInspect && gearInspect.id === gearItem.id) {
        setGearInspect(null);
      } else {
        setGearInspect(gearItem);
      }
    }
  }

  const isSelected = () => {
    return (gearItem && gearInspect) && (gearInspect.id === gearItem.id);
  }

  return (
    <AutoLayout
      height={72}
      overflow="visible"
      spacing={WIDGET_SPACING}
      onClick={handleClick}
      padding={8}
      fill={
        isSelected()
        ? {
            r: 0,
            g: 0,
            b: 0,
            a: 0.8
          }
        : null
      }
      stroke={
        isSelected()
        ? WIDGET_COLOR_GOLD
        : {
            r: 1,
            g: 1,
            b: 1,
            a: 0
          }
      }
      strokeWidth={1}
      hoverStyle={{
        fill: 
          isSelected()
          ? {
              r: 0,
              g: 0,
              b: 0,
              a: 0.8
            }
          : {
              r: 0,
              g: 0,
              b: 0,
              a: 0.25
            },
        stroke: 
          isSelected()
          ? WIDGET_COLOR_GOLD
          : {
              r: 1,
              g: 1,
              b: 1,
              a: 0.5
            }
      }}>
      {
        rightAlign
        ? null
        : <GearIcon 
            gearItem={gearItem}
            gearSlot={gearSlot} />
      }
      <GearItemDetails 
        gearItem={gearItem}
        rightAlign={rightAlign} />
      {
        rightAlign
        ? <GearIcon 
            gearItem={gearItem}
            gearSlot={gearSlot} />
        : null
      }
    </AutoLayout>
  )
}

export default GearItem;