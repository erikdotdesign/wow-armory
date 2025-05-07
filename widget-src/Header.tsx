const { widget } = figma;
const { Image } = widget;

const Header = ({
  name,
  faction,
  dungeonRating,
  averageItemLevel,
  achievement,
  race,
  guild,
  level,
  realm,
  spec
}) => {
  return (
    <Image
      src={socket.media.content.assets[0].value}
      width={15}
      height={15}
    />
  )
}

export default Header;