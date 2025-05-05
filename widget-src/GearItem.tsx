import { rarityColor } from "../helpers.js";

const { widget } = figma;
const { AutoLayout, Image, Text } = widget;

const GearItem = ({
  gearItem
}) => {
  return (
    <AutoLayout
      positioning="absolute"
      spacing={{
        vertical: 0,
        horizontal: 16
      }}>
      <Image
        src={gearItem.media.content.assets[0].value}
        width={56}
        height={56}
        stroke={rarityColor(gearItem.quality.type)}
        strokeWidth={1}
      />
      <AutoLayout
        width={300}
        direction="vertical">
        <Text 
          fill={rarityColor(gearItem.quality.type)}
          fontFamily="Inter" 
          fontSize={16}
          lineHeight={24}
          width={300}>
          { gearItem.name }
        </Text>
        <AutoLayout 
          width={300}
          direction="horizontal"
          wrap={true}
          verticalAlignItems="center"
          spacing={{
            vertical: 0,
            horizontal: 4
          }}>
          <Text 
            fill={"#cacaca"}
            fontFamily="Inter" 
            fontSize={12}
            lineHeight={20}>
            { gearItem.level.value }
          </Text>
          {
            gearItem.enchantments && gearItem.enchantments.length > 0
            ? <Text
                fontSize={12}
                lineHeight={20}
                fill={rarityColor("UNCOMMON")}
                maxWidth={232}>
                { gearItem.enchantments[0].display_string }
              </Text>
            : null
          }
          {
            gearItem.sockets && gearItem.sockets.length > 0
            ? gearItem.sockets.map((socket, index) => (
                <Image
                  key={index}
                  src={socket.media.content.assets[0].value}
                  width={15}
                  height={15}
                />
              ))
            : null
          }
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  )
}

export default GearItem;