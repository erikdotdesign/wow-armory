import GearItem from "./GearItem";
import { WIDGET_SPACING, WIDGET_COLUMN_Y_OFFSET } from "./constants";

const { widget } = figma;
const { AutoLayout } = widget;

interface GearColumnLeftProps {
  gear: any;
  gearInspect: any;
  setGearInspect(gearItem: any): void;
}

const GearColumnLeft = ({
  gear,
  gearInspect,
  setGearInspect
}: GearColumnLeftProps) => {

  const gearList: {
    prop: string,
    slot: GearSlotType
  }[] = [{
    prop: 'head',
    slot: 'HEAD'
  },{
    prop: 'neck',
    slot: 'NECK'
  },{
    prop: 'shoulder',
    slot: 'SHOULDER'
  },{
    prop: 'chest',
    slot: 'CHEST'
  },{
    prop: 'back',
    slot: 'BACK'
  },{
    prop: 'shirt',
    slot: 'SHIRT'
  },{
    prop: 'tabard',
    slot: 'TABARD'
  },{
    prop: 'wrist',
    slot: 'WRIST'
  }];

  return (
    <AutoLayout 
      direction="vertical"
      positioning="absolute"
      x={392}
      y={WIDGET_COLUMN_Y_OFFSET}
      spacing={WIDGET_SPACING}
      cornerRadius={12}
      fill={{
        r: 0,
        g: 0,
        b: 0,
        a: 0.5
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
            rightAlign={false}
            gearSlot={gearItem.slot}
            gearInspect={gearInspect}
            setGearInspect={setGearInspect} />
        ))
      }
    </AutoLayout>
  )
}

export default GearColumnLeft;