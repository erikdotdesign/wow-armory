import GearItem from "./GearItem";
import { WIDGET_SPACING, WIDGET_COLUMN_Y_OFFSET } from "./constants";

const { widget } = figma;
const { AutoLayout } = widget;

interface GearColumnRightProps {
  gear: any;
  gearInspect: any;
  setGearInspect(gearItem: any): void;
}

const GearColumnRight = ({
  gear,
  gearInspect,
  setGearInspect
}: GearColumnRightProps) => {

  const gearList: {
    prop: string,
    slot: GearSlotType
  }[] = [{
    prop: 'hand',
    slot: 'HANDS'
  },{
    prop: 'waist',
    slot: 'WAIST'
  },{
    prop: 'leg',
    slot: 'LEGS'
  },{
    prop: 'foot',
    slot: 'FEET'
  },{
    prop: 'leftFinger',
    slot: 'FINGER_1'
  },{
    prop: 'rightFinger',
    slot: 'FINGER_2'
  },{
    prop: 'leftTrinket',
    slot: 'TRINKET_1'
  },{
    prop: 'rightTrinket',
    slot: 'TRINKET_2'
  }];

  return (
    <AutoLayout 
      direction="vertical"
      positioning="absolute"
      x={1548}
      y={WIDGET_COLUMN_Y_OFFSET}
      spacing={WIDGET_SPACING}>
      {
        gearList.map((gearItem, index) => (
          <GearItem 
            key={gearItem ? gear[gearItem.prop].id : index}
            gearItem={gear[gearItem.prop]}
            rightAlign={true}
            gearSlot={gearItem.slot}
            gearInspect={gearInspect}
            setGearInspect={setGearInspect} />
        ))
      }
    </AutoLayout>
  )
}

export default GearColumnRight;