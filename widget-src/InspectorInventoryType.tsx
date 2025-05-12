import { WIDGET_COLOR_STAT, WIDGET_INSPECTOR_DETAILS_WIDTH } from "./constants";

const { widget } = figma;
const { AutoLayout, Text } = widget;

interface InspectorInventoryTypeProps {
  inventoryType: any;
  subclass: any;
}

const InspectorInventoryType = ({
  inventoryType,
  subclass
}: InspectorInventoryTypeProps) => {
  return (
    <AutoLayout
      width={WIDGET_INSPECTOR_DETAILS_WIDTH}
      spacing="auto">
      <Text 
        fontFamily="Inter"
        fontSize={12}
        lineHeight={18}
        fontWeight={400}
        fill={WIDGET_COLOR_STAT}>
        { inventoryType.name }
      </Text>
      {
        subclass && subclass.name !== 'Miscellaneous'
        ? <Text 
            fontFamily="Inter"
            fontSize={12}
            lineHeight={18}
            fontWeight={400}
            fill={WIDGET_COLOR_STAT}>
            { subclass.name }
          </Text>
        : <Text></Text>
      }
    </AutoLayout>
  )
}

export default InspectorInventoryType;