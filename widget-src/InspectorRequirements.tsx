import { WIDGET_COLOR_STAT } from "./constants";

const { widget } = figma;
const { AutoLayout, Text } = widget;

interface InspectorRequirementsProps {
  requirements: any
}

const InspectorRequirements = ({
  requirements
}: InspectorRequirementsProps) => {
  return (
    requirements
    ? <AutoLayout
        direction="vertical">
        {
          requirements.playable_classes
          ? <Text 
              fontFamily="Inter"
              fontSize={12}
              lineHeight={18}
              fontWeight={400}
              fill={WIDGET_COLOR_STAT}>
              { requirements.playable_classes.display_string }
            </Text>
          : null
        }
        {
          requirements.level
          ? <Text 
              fontFamily="Inter"
              fontSize={12}
              lineHeight={18}
              fontWeight={400}
              fill={WIDGET_COLOR_STAT}>
              { requirements.level.display_string }
            </Text>
          : null
        }
      </AutoLayout>
    : null
  )
}

export default InspectorRequirements;