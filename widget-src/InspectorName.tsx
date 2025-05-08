import { WIDGET_INSPECTOR_DETAILS_WIDTH } from "./constants";
import { rarityColor } from "./helpers.js"; 

const { widget } = figma;
const { Text } = widget;

interface InspectorNameProps {
  name: any;
  quality: any;
}

const InspectorName = ({
  name,
  quality
}: InspectorNameProps) => {
  return (
    <Text 
      fill={rarityColor(quality.type)}
      fontFamily="Inter"
      fontSize={16}
      lineHeight={20}
      maxWidth={WIDGET_INSPECTOR_DETAILS_WIDTH}>
      { name }
    </Text>
  )
}

export default InspectorName;