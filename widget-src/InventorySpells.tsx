import { WIDGET_INSPECTOR_DETAILS_WIDTH } from "./constants";
import { rarityColor } from "./helpers.js";

const { widget } = figma;
const { Text, AutoLayout } = widget;

interface InspectorSpellsProps {
  spells: any;
}

const InspectorSpells = ({
  spells
}: InspectorSpellsProps) => {

  return (
    spells && spells.length > 0
    ? <AutoLayout
        direction="vertical">
        {
          spells.map((spell, index) => (
            <Text
              key={index}
              fontSize={12}
              lineHeight={18}
              fontWeight={400}
              fill={rarityColor("UNCOMMON")}
              maxWidth={WIDGET_INSPECTOR_DETAILS_WIDTH}>
              { spell.description }
            </Text>
          ))
        }
      </AutoLayout>
    : null
  )
}

export default InspectorSpells;