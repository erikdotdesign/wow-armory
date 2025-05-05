import GearIcon from "./GearIcon.js";
import GearItemDetails from "./GearItemDetails.js";

const { widget } = figma;
const { AutoLayout } = widget;

const GearItem = ({
  gearItem,
  rightAlign = false
}) => {
  return (
    <AutoLayout
      positioning="absolute"
      spacing={{
        vertical: 0,
        horizontal: 16
      }}>
      {
        rightAlign
        ? null
        : <GearIcon gearItem={gearItem} />
      }
      <GearItemDetails 
        gearItem={gearItem}
        rightAlign={rightAlign} />
      {
        rightAlign
        ? <GearIcon gearItem={gearItem} />
        : null
      }
    </AutoLayout>
  )
}

export default GearItem;