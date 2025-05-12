import GearItem from "./GearItem";
import { WIDGET_SPACING, WIDGET_GEAR_COLUMN_PADDING, WIDGET_GEAR_COLUMN_SPACING, WIDGET_GEAR_COLUMN_BORDER_RADIUS } from "./constants";

const { widget } = figma;
const { AutoLayout } = widget;

interface GearBottomRowProps {
  gear: any;
  gearInspect: any;
  setGearInspect(gearItem: any): void;
}

const GearBottomRow = ({
  gear,
  gearInspect,
  setGearInspect
}: GearBottomRowProps) => {

  const gearList: {
    prop: string,
    slot: GearSlotType
  }[] = [{
    prop: 'weapon',
    slot: 'MAIN_HAND'
  },{
    prop: 'offhand',
    slot: 'OFF_HAND'
  }];

  return (
    <AutoLayout 
      positioning="absolute"
      x={836}
      y={1520}
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
            rightAlign={index === 0}
            gearSlot={gearItem.slot}
            gearInspect={gearInspect}
            setGearInspect={setGearInspect} />
        ))
      }
    </AutoLayout>
  )
}

export default GearBottomRow;