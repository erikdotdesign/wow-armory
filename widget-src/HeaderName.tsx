import { WIDGET_WIDTH, WIDGET_COLOR_GRAY } from "./constants";
import { playerClassColor, getNamePosition } from "./helpers";
const { widget } = figma;
const { Image, Text, AutoLayout } = widget;

const HeaderTitle = ({title}) => {
  return (
    <Text
      fontFamily="Inter"
      fontSize={32}
      lineHeight={56}
      fontWeight={700}
      fill={title ? "#ffffff" : WIDGET_COLOR_GRAY}>
      {
        title
        ? title
        : "No title"
      }
    </Text>
  )
}

const HeaderName = ({
  name,
  title,
  playerClass,
  faction
}) => {

  const factionIcons = {
    alliance: "https://assets-bwa.worldofwarcraft.blizzard.com/dab2428aa2f51e140c9a.png",
    horde: "https://assets-bwa.worldofwarcraft.blizzard.com/3edbc547ab318bd385b2.png"
  };

  const namePosition = title && getNamePosition(title);

  return (
    <AutoLayout
      verticalAlignItems="center"
      spacing={40}
      width={WIDGET_WIDTH / 3}>
      <Image
        src={factionIcons[faction.slug]}
        width={108}
        height={140} />
      <AutoLayout
        direction="vertical">
        {
          namePosition && namePosition.position === "succeeds"
          ? <HeaderTitle title={namePosition.title} />
          : null
        }
        <Text
          fontFamily="Inter"
          fontSize={56}
          lineHeight={72}
          fontWeight={700}
          fill={playerClassColor(playerClass.enum)}>
          {name}
        </Text>
        {
          (namePosition && namePosition.position === "precedes") || !title
          ? <HeaderTitle title={namePosition && namePosition.title} />
          : null
        }
      </AutoLayout>
    </AutoLayout>
  )
}

export default HeaderName;