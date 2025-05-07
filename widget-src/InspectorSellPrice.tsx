import { WIDGET_COLOR_STAT } from "./constants";

const { widget } = figma;
const { Text, AutoLayout, Image } = widget;

interface InspectorSellPriceProps {
  sellPrice: any;
}

const InspectorSellPrice = ({
  sellPrice
}: InspectorSellPriceProps) => {

  const goldIconUrl = "https://render.worldofwarcraft.com/us/icons/tooltips/gold.gif";
  const silverIconUrl = "https://render.worldofwarcraft.com/us/icons/tooltips/silver.gif";
  const copperIconUrl = "https://render.worldofwarcraft.com/us/icons/tooltips/copper.gif";

  const coins = [{
    name: 'gold',
    icon: goldIconUrl
  }, {
    name: 'silver',
    icon: silverIconUrl
  }, {
    name: 'copper',
    icon: copperIconUrl
  }];

  return (
    sellPrice
    ? <AutoLayout
        verticalAlignItems="center"
        spacing={4}>
        <Text
          fontSize={12}
          lineHeight={18}
          fontWeight={400}
          fill={WIDGET_COLOR_STAT}>
          { sellPrice.display_strings.header }
        </Text>
        {
          coins.map((coin, index) => (
            sellPrice.display_strings[coin.name] !== "0"
            ? <>
                <Text
                  key={index}
                  fontSize={12}
                  lineHeight={18}
                  fontWeight={400}
                  fill={WIDGET_COLOR_STAT}>
                  { sellPrice.display_strings[coin.name] }
                </Text>
                <Image
                  src={coin.icon}
                  width={11}
                  height={12} />
              </>
            : null
          ))
        }
      </AutoLayout>
    : null
  )
}

export default InspectorSellPrice;