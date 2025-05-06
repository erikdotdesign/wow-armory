import GearIcon from "./GearIcon.js";
import GearItemDetails from "./GearItemDetails.js";
import { WIDGET_SPACING } from "./constants";

const { widget } = figma;
const { AutoLayout } = widget;

interface GearItemProps {
  gearItem: any,
  rightAlign: boolean,
  gearSlot: GearSlotType
}

const GearItem = ({
  gearItem,
  rightAlign = false,
  gearSlot
}: GearItemProps) => {
  return (
    <AutoLayout
      height={56}
      overflow="visible"
      spacing={WIDGET_SPACING}>
      {
        rightAlign
        ? null
        : <GearIcon 
            gearItem={gearItem}
            gearSlot={gearSlot} />
      }
      {
        gearItem
        ? <GearItemDetails 
            gearItem={gearItem}
            rightAlign={rightAlign} />
        : null
      }
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