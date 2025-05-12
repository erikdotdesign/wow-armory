import GearItem from "./GearItem";
import { WIDGET_SPACING, WIDGET_COLUMN_Y_OFFSET, WIDGET_GEAR_COLUMN_PADDING, WIDGET_GEAR_COLUMN_SPACING, WIDGET_GEAR_COLUMN_BORDER_RADIUS } from "./constants";

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
      x={1648}
      y={WIDGET_COLUMN_Y_OFFSET}
      spacing={WIDGET_GEAR_COLUMN_SPACING}
      padding={WIDGET_GEAR_COLUMN_PADDING}
      cornerRadius={WIDGET_GEAR_COLUMN_BORDER_RADIUS}
      fill={{
        r: 0,
        g: 0,
        b: 0,
        a: 0.75
      }}
      effect={{
        type: "background-blur",
        blur: 20,
      }}>
      {
        gearList.map((gearItem, index) => (
          <GearItem 
            key={gear[gearItem.prop] ? gear[gearItem.prop].id : index}
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