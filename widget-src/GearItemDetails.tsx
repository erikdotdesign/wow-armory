import { rarityColor } from "../helpers.js";
import GearSocket from "./GearSocket.js";

const { widget } = figma;
const { AutoLayout, Text } = widget;

const ItemLevel = ({itemLevel}) => (
  <Text 
    fill={"#cacaca"}
    fontFamily="Inter" 
    fontSize={12}
    lineHeight={20}>
    { itemLevel }
  </Text>
);

const Sockets = ({sockets}) => (
  sockets && sockets.length > 0
  ? sockets.map((socket, index) => (
      <GearSocket 
        key={index}
        socket={socket} />
    ))
  : null
);

const GearItemDetails = ({
  gearItem,
  rightAlign
}) => {
  return (
    <AutoLayout
      direction="vertical"
      horizontalAlignItems={rightAlign ? 'end' : 'start'}
      width={300}>
      <Text 
        fill={rarityColor(gearItem.quality.type)}
        fontFamily="Inter" 
        fontSize={16}
        lineHeight={24}>
        { gearItem.name }
      </Text>
      <AutoLayout 
        direction="horizontal"
        wrap={true}
        verticalAlignItems="center"
        spacing={{
          vertical: 0,
          horizontal: 4
        }}>
        {
          rightAlign
          ? <Sockets sockets={gearItem.sockets} />
          : <ItemLevel itemLevel={gearItem.level.value} />
        }
        {
          gearItem.enchantments && gearItem.enchantments.length > 0
          ? <Text
              fontSize={12}
              lineHeight={20}
              fill={rarityColor("UNCOMMON")}
              horizontalAlignText={rightAlign ? 'right' : 'left'}
              maxWidth={216}>
              { `${gearItem.enchantments[0].display_string}` }
            </Text>
          : null
        }
        {
          rightAlign
          ? <ItemLevel itemLevel={gearItem.level.value} />
          : <Sockets sockets={gearItem.sockets} />
        }
      </AutoLayout>
    </AutoLayout>
  )
}

export default GearItemDetails;