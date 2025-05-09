import { WIDGET_WIDTH } from "./constants";
const { widget } = figma;
const { Image, Text, AutoLayout } = widget;
import HeaderName from "./HeaderName";
import HeaderStats from "./HeaderStats";
import HeaderDetails from "./HeaderDetails";

const Header = ({
  name,
  title,
  level,
  achievement,
  playerClass,
  dungeonRating,
  faction,
  averageItemLevel,
  race,
  realm,
  spec,
  guild
}) => {
  return (
    <AutoLayout
      positioning="absolute"
      spacing="auto"
      width={WIDGET_WIDTH}
      verticalAlignItems="center"
      padding={{
        horizontal: 64,
        vertical: 48
      }}>
      <HeaderName
        name={name}
        title={title}
        faction={faction}
        playerClass={playerClass} />
      <HeaderStats
        achievement={achievement}
        averageItemLevel={averageItemLevel}
        dungeonRating={dungeonRating} />
      <HeaderDetails
        playerClass={playerClass}
        race={race}
        spec={spec}
        guild={guild}
        realm={realm}
        level={level} />
    </AutoLayout>
  )
}

export default Header;