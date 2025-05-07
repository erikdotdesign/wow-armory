import { WIDGET_COLOR_STAT } from "./constants";

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
    <AutoLayout>
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
        : null
      }
    </AutoLayout>
  )
}

export default InspectorInventoryType;