import { WIDGET_COLOR_GOLD, WIDGET_COLOR_SET_EQUIPPED, WIDGET_COLOR_SET_UNEQUIPPED, WIDGET_INSPECTOR_DETAILS_WIDTH } from "./constants";
import { rarityColor } from "./helpers.js";

const { widget } = figma;
const { AutoLayout, Text } = widget;

interface InspectorSetProps {
  set: any;
}

const InspectorSet = ({
  set
}: InspectorSetProps) => {

  return (
    set
    ? <AutoLayout
        direction="vertical">
        <Text 
          fontFamily="Inter"
          fontSize={12}
          lineHeight={18}
          fill={WIDGET_COLOR_GOLD}>
          { set.display_string }
        </Text>
        {
          set.items.map((item, index) => (
            <Text 
              key={index}
              fontFamily="Inter"
              fontSize={12}
              lineHeight={18}
              fill={
                item.is_equipped
                ? WIDGET_COLOR_SET_EQUIPPED
                : WIDGET_COLOR_SET_UNEQUIPPED
              }>
              { item.item.name }
            </Text>
          ))
        }
        <AutoLayout
          direction="vertical">
          {
            set.effects.map((effect, index) => (
              <Text 
                key={index}
                fontFamily="Inter"
                fontSize={12}
                lineHeight={18}
                maxWidth={WIDGET_INSPECTOR_DETAILS_WIDTH}
                fill={
                  effect.is_active
                  ? rarityColor("UNCOMMON")
                  : WIDGET_COLOR_SET_UNEQUIPPED
                }>
                { effect.display_string }
              </Text>
            ))
          }
        </AutoLayout>
      </AutoLayout>
    : null
  )
}

export default InspectorSet;