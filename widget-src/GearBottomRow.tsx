import GearItem from "./GearItem";
import { WIDGET_SPACING } from "./constants";

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
      x={840}
      y={1520}
      spacing={WIDGET_SPACING}
      cornerRadius={12}
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