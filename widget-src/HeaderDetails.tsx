import { WIDGET_WIDTH, WIDGET_COLOR_GOLD, WIDGET_COLOR_GRAY } from "./constants";
import { playerClassColor } from "./helpers";
const { widget } = figma;
const { Text, AutoLayout, Span } = widget;

const HeaderDetails = ({
  playerClass,
  level,
  race,
  realm,
  spec,
  guild
}) => {
  return (
    <AutoLayout
      direction="vertical"
      verticalAlignItems="center"
      horizontalAlignItems="end"
      width={WIDGET_WIDTH / 3}>
      <Text
        fontFamily="Inter"
        fontSize={24}
        lineHeight={44}
        fontWeight={700}
        fill={"#ffffff"}>
        {`${level} ${race.name} `}
        <Span 
          fill={playerClassColor(playerClass.enum)}>
          {spec ? `${spec.name} ` : ''}{`${playerClass.name}`}
        </Span>
      </Text>
      <Text
        fontFamily="Inter"
        fontSize={24}
        lineHeight={44}
        fontWeight={700}
        fill={guild ? WIDGET_COLOR_GOLD : WIDGET_COLOR_GRAY}>
        {`<${guild ? guild.name : 'No guild'}>`}
      </Text>
      <Text
        fontFamily="Inter"
        fontSize={24}
        lineHeight={44}
        fontWeight={700}
        fill={"#ffffff"}>
        {realm.name}
      </Text>
    </AutoLayout>
  )
}

export default HeaderDetails;