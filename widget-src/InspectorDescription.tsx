import { WIDGET_COLOR_GOLD, WIDGET_INSPECTOR_DETAILS_WIDTH } from "./constants";

const { widget } = figma;
const { Text } = widget;

interface InspectorDescriptionProps {
  description: any;
}

const InspectorDescription = ({
  description
}: InspectorDescriptionProps) => {
  return (
    description
    ? <Text 
        fontFamily="Inter"
        fontSize={12}
        lineHeight={18}
        fontWeight={400}
        fill={WIDGET_COLOR_GOLD}
        maxWidth={WIDGET_INSPECTOR_DETAILS_WIDTH}>
        { `"${description}"` }
      </Text>
    : null
  )
}

export default InspectorDescription;