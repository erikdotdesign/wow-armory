import { WIDGET_SPACING, WIDGET_COLUMN_Y_OFFSET, WIDGET_INSPECTOR_DETAILS_WIDTH, WIDGET_COLOR_GOLD } from "./constants";
import { rarityColor, toRgba } from "./helpers.js"; 
import GearIcon from "./GearIcon.js";
import InspectorName from "./InspectorName";
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
import InspectorSpells from "./InventorySpells";
import InspectorSellPrice from "./InspectorSellPrice";

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
      spacing={24}
      positioning="absolute"
      x={904}
      y={WIDGET_COLUMN_Y_OFFSET}
      padding={24}
      cornerRadius={16}
      stroke={WIDGET_COLOR_GOLD}
      strokeWidth={2}
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
      <GearIcon 
        gearItem={gearInspect}
        gearSlot={gearInspect.slot.type} />
      <AutoLayout 
        direction="vertical"
        width={WIDGET_INSPECTOR_DETAILS_WIDTH}
        spacing={8}>
        <AutoLayout
          direction="vertical">
          <InspectorName
            name={gearInspect.name}
            quality={gearInspect.quality} />
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
        </AutoLayout>
        <InspectorEnchantments
          enchantments={gearInspect.enchantments} />
        <InspectorSockets 
          sockets={gearInspect.sockets} />
        <InspectorSet
          set={gearInspect.set} />
        <InspectorSpells
          spells={gearInspect.spells} />
        {
          gearInspect.durability || gearInspect.requirements || gearInspect.sell_price
          ?  <AutoLayout
                direction="vertical">
                <InspectorDurability
                  durability={gearInspect.durability} />
                <InspectorRequirements
                  requirements={gearInspect.requirements} />
                <InspectorSellPrice
                  sellPrice={gearInspect.sell_price} />
              </AutoLayout>
          : null
        }
        <InspectorDescription
          description={gearInspect.description} />
      </AutoLayout>
    </AutoLayout>
  )
}

export default Inspector;