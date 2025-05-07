import { WIDGET_SPACING, WIDGET_COLUMN_Y_OFFSET, WIDGET_INSPECTOR_DETAILS_WIDTH } from "./constants";
import { rarityColor, toRgba } from "./helpers.js"; 
import GearIcon from "./GearIcon.js";
import GearSocket from "./GearSocket";
import InspectorTransmog from "./InspectorTransmog";
import InspectorNameDescription from "./InspectorNameDescription";
import InspectorItemLevel from "./InspectorItemLevel";
import InspectorBinding from "./InspectorBinding";
import InspectorStats from "./InspectorStats";
import InspectorSockets from "./InspectorSockets";
import InspectorEnchantments from "./InspectorEnchantments";
import InspectorInventoryType from "./InspectorInventoryType";
import InspectorSet from "./InspectorSet";
import InspectorDurability from "./InspectorDurability";
import InspectorRequirements from "./InspectorRequirements";
import InspectorDescription from "./InspectorDescription";

const { widget } = figma;
const { AutoLayout, Text } = widget;

interface InspectorProps {
  gearInspect: any;
  setGearInspect(gearItem: any): void;
}

const Inspector = ({
  gearInspect,
  setGearInspect
}: InspectorProps) => {

  return (
    <AutoLayout
      overflow="visible"
      spacing={WIDGET_SPACING}
      positioning="absolute"
      x={900}
      y={WIDGET_COLUMN_Y_OFFSET}
      padding={32}
      fill={{
        r: 0,
        g: 0,
        b: 0,
        a: 0.8
      }}>
      <GearIcon 
        gearItem={gearInspect}
        gearSlot={gearInspect.slot.type} />
      <AutoLayout 
        direction="vertical"
        width={WIDGET_INSPECTOR_DETAILS_WIDTH}>
        <Text 
          fill={rarityColor(gearInspect.quality.type)}
          fontFamily="Inter"
          fontSize={16}
          lineHeight={20}>
          { gearInspect.name }
        </Text>
        <InspectorNameDescription
          nameDescription={gearInspect.name_description} />
        <InspectorItemLevel
          itemLevel={gearInspect.level} />
        <InspectorTransmog
          transmog={gearInspect.transmog} />
        <InspectorBinding
          binding={gearInspect.binding} />
        <InspectorInventoryType
          inventoryType={gearInspect.inventory_type}
          subclass={gearInspect.item_subclass} />
        <InspectorStats
          stats={gearInspect.stats} />
        <InspectorEnchantments
          enchantments={gearInspect.enchantments} />
        <InspectorSockets 
          sockets={gearInspect.sockets} />
        <InspectorSet
          set={gearInspect.set} />
        <InspectorDurability
          durability={gearInspect.durability} />
        <InspectorRequirements
          requirements={gearInspect.requirements} />
        <InspectorDescription
          description={gearInspect.description} />
      </AutoLayout>
    </AutoLayout>
  )
}

export default Inspector;