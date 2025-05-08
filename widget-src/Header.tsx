import { playerClassColor } from "./helpers";
const { widget } = figma;
const { Image, Text, AutoLayout } = widget;

const Header = ({
  name,
  title,
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

  const factionIcons = {
    alliance: "https://assets-bwa.worldofwarcraft.blizzard.com/dab2428aa2f51e140c9a.png",
    horde: "https://assets-bwa.worldofwarcraft.blizzard.com/3edbc547ab318bd385b2.png"
  };

  return (
    <AutoLayout
      positioning="absolute">
      <AutoLayout
        verticalAlignItems="center">
        <Image
          src={
            factionIcons[faction.slug]
          }
          width={77}
          height={100} />
        <AutoLayout
          direction="vertical">
          <Text
            fontFamily="Inter"
            fontSize={48}
            fontWeight={700}
            fill={playerClassColor(playerClass.enum)}>
            {name}
          </Text>
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  )
}

export default Header;