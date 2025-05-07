import { WIDGET_COLOR_TRANSMOG } from "./constants";

const { widget } = figma;
const { Text } = widget;

interface InspectorTransmogProps {
  transmog: any;
}

const InspectorTransmog = ({
  transmog
}: InspectorTransmogProps) => {
  return (
    transmog
    ? <Text 
        fontFamily="Inter"
        fontSize={12}
        lineHeight={18}
        fontWeight={400}
        fill={WIDGET_COLOR_TRANSMOG}>
        { transmog.display_string }
      </Text>
    : null
  )
}

export default InspectorTransmog;