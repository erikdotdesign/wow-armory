import { WIDGET_WIDTH, WIDGET_HEIGHT } from "./constants";

const { widget } = figma;
const { AutoLayout, Rectangle, Text } = widget;

const Countdown = ({
  countdown
}) => {
  return (
    <AutoLayout
      width={WIDGET_WIDTH}
      height={WIDGET_HEIGHT}
      verticalAlignItems="center"
      horizontalAlignItems="center"
      positioning="absolute">
      <AutoLayout
        width={1260}
        height={1260}
        verticalAlignItems="center"
        horizontalAlignItems="center">
        <Rectangle
          positioning="absolute"
          fill="#9D0201"
          width={1260}
          height={1260} />
        <Text
          fontFamily="Inter"
          fontWeight={700}
          fill="#ffffff"
          fontSize={700}
          verticalAlignText="center">
          {countdown}
        </Text>
      </AutoLayout>
    </AutoLayout>
  )
}

export default Countdown;