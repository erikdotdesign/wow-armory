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
      lineHeight={20}>
      { name }
    </Text>
  )
}

export default InspectorName;