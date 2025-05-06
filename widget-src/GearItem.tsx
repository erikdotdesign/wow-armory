import GearIcon from "./GearIcon.js";
import GearItemDetails from "./GearItemDetails.js";

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
      positioning="absolute"
      spacing={{
        vertical: 0,
        horizontal: 16
      } as any}>
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