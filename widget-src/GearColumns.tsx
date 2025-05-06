import GearColumn from "./GearColumn";
import GearItem from "./GearItem";
import { WIDGET_WIDTH, WIDGET_HEIGHT, WIDGET_SPACING } from "./constants";

const { widget } = figma;
const { AutoLayout } = widget;

interface GearColumnsProps {
  gear: any
}

const GearColumns = ({
  gear
}: GearColumnsProps) => {
  return (
    <AutoLayout 
      spacing={WIDGET_SPACING}
      positioning="absolute"
      verticalAlignItems="center"
      horizontalAlignItems="center"
      width={WIDGET_WIDTH}
      height={WIDGET_HEIGHT}
      y={124}>
      <GearColumn rightAlign={false}>
        <GearItem 
          gearItem={gear.head}
          rightAlign={false}
          gearSlot="HEAD" />
        <GearItem 
          gearItem={gear.neck}
          rightAlign={false}
          gearSlot="NECK" />
        <GearItem 
          gearItem={gear.shoulder}
          rightAlign={false}
          gearSlot="SHOULDER" />
        <GearItem 
          gearItem={gear.chest}
          rightAlign={false}
          gearSlot="CHEST" />
        <GearItem 
          gearItem={gear.back}
          rightAlign={false}
          gearSlot="BACK" />
        <GearItem 
          gearItem={gear.shirt}
          rightAlign={false}
          gearSlot="SHIRT" />
        <GearItem 
          gearItem={gear.tabard}
          rightAlign={false}
          gearSlot="TABARD" />
        <GearItem 
          gearItem={gear.wrist}
          rightAlign={false}
          gearSlot="WRIST" />
      </GearColumn>
      <GearColumn rightAlign={true}>
        <GearItem 
          gearItem={gear.weapon}
          rightAlign={true}
          gearSlot="MAIN_HAND" />
      </GearColumn>
      <GearColumn rightAlign={false}>
        <GearItem 
          gearItem={gear.offhand}
          rightAlign={false}
          gearSlot="OFF_HAND" />
      </GearColumn>
      <GearColumn rightAlign={true}>
        <GearItem 
          gearItem={gear.hand}
          rightAlign={true}
          gearSlot="HANDS" />
        <GearItem 
          gearItem={gear.waist}
          rightAlign={true}
          gearSlot="WAIST" />
        <GearItem 
          gearItem={gear.leg}
          rightAlign={true}
          gearSlot="LEGS" />
        <GearItem 
          gearItem={gear.foot}
          rightAlign={true}
          gearSlot="FEET" />
        <GearItem 
          gearItem={gear.leftFinger}
          rightAlign={true}
          gearSlot="FINGER_1" />
        <GearItem 
          gearItem={gear.rightFinger}
          rightAlign={true}
          gearSlot="FINGER_2" />
        <GearItem 
          gearItem={gear.leftTrinket}
          rightAlign={true}
          gearSlot="TRINKET_1" />
        <GearItem 
          gearItem={gear.rightTrinket}
          rightAlign={true}
          gearSlot="TRINKET_2" />
      </GearColumn>
    </AutoLayout>
  )
}

export default GearColumns;