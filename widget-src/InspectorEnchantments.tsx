import { rarityColor } from "./helpers.js";

const { widget } = figma;
const { Text } = widget;

interface InspectorEnchantmentsProps {
  enchantments: any;
}

const InspectorEnchantments = ({
  enchantments
}: InspectorEnchantmentsProps) => {

  return (
    enchantments && enchantments.length > 0
    ? <Text
        fontSize={12}
        lineHeight={18}
        fontWeight={400}
        fill={rarityColor("UNCOMMON")}>
        { `${enchantments[0].display_string}` }
      </Text>
    : null
  )
}

export default InspectorEnchantments;