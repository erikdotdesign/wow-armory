import { WIDGET_WIDTH, WIDGET_HEIGHT } from "./constants";

const { widget } = figma;
const { AutoLayout, Image } = widget;

const CharacterRender = ({
  render
}) => {
  return (
    <AutoLayout
      width={WIDGET_WIDTH}
      height={WIDGET_HEIGHT}>
      <Image
        src={render.backgroundUrl}
        positioning="absolute"
        width={WIDGET_WIDTH}
        height={WIDGET_HEIGHT}
      />
      <Image
        src={render.shadowUrl}
        positioning="absolute"
        x={1004}
        y={1306.5}
        width={392}
        height={255}
      />
      <Image
        src={render.characterUrl}
        positioning="absolute"
        x={400}
        y={470}
        width={1600}
        height={1200}
      />
    </AutoLayout>
  )
}

export default CharacterRender;