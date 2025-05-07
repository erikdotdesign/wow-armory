import { WIDGET_COLOR_STAT } from "./constants";

const { widget } = figma;
const { Text } = widget;

interface InspectorDurabilityProps {
  durability: any;
}

const InspectorDurability = ({
  durability
}: InspectorDurabilityProps) => {
  return (
    durability
    ? <Text 
        fontFamily="Inter"
        fontSize={12}
        lineHeight={18}
        fontWeight={400}
        fill={WIDGET_COLOR_STAT}>
        { durability.display_string }
      </Text>
    : null
  )
}

export default InspectorDurability;