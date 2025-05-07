import { WIDGET_COLOR_STAT } from "./constants";

const { widget } = figma;
const { Text } = widget;

interface InspectorBindingProps {
  binding: any;
}

const InspectorBinding = ({
  binding
}: InspectorBindingProps) => {
  return (
    <Text 
      fontFamily="Inter"
      fontSize={12}
      lineHeight={18}
      fontWeight={400}
      fill={WIDGET_COLOR_STAT}>
      { binding.name }
    </Text>
  )
}

export default InspectorBinding;