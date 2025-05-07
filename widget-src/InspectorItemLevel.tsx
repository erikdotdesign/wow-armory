import { WIDGET_COLOR_GOLD } from "./constants";

const { widget } = figma;
const { Text } = widget;

interface InspectorItemLevelProps {
  itemLevel: any;
}

const InspectorItemLevel = ({
  itemLevel
}: InspectorItemLevelProps) => {
  return (
    <Text 
      fontFamily="Inter"
      fontSize={12}
      lineHeight={18}
      fontWeight={400}
      fill={WIDGET_COLOR_GOLD}>
      { itemLevel.display_string }
    </Text>
  )
}

export default InspectorItemLevel;