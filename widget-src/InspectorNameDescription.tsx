import { toRgba } from "./helpers.js"; 

const { widget } = figma;
const { Text } = widget;

interface InspectorNameDescriptionProps {
  nameDescription: any;
}

const InspectorNameDescription = ({
  nameDescription
}: InspectorNameDescriptionProps) => {

  return (
    nameDescription
    ? <Text 
        fontFamily="Inter"
        fontSize={12}
        lineHeight={18}
        fontWeight={400}
        fill={toRgba(nameDescription.color)}>
        { nameDescription.display_string }
      </Text>
    : null
  )
}

export default InspectorNameDescription;