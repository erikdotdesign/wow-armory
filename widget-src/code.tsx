const { widget } = figma;
const { AutoLayout, Text, useEffect, useSyncedState, Image, Frame, waitForTask } = widget;
import CharacterRender from "./CharacterRender";
import GearItem from "./GearItem";
import GearColumns from "./GearColumns";

const Widget = () => {
  const [armory, setArmory] = useSyncedState<any>("armory", null);

  useEffect(() => {
    figma.ui.onmessage = async (msg) => {
      if (msg.type === "add-armory") {
        setArmory(msg.characterData);
      }
    };
  })

  return (
    armory
    ? <AutoLayout
        direction="horizontal"
        horizontalAlignItems="center"
        verticalAlignItems="center">
        <CharacterRender render={armory.render} />
        <GearColumns gear={armory.gear} />
      </AutoLayout>
    : <AutoLayout
        direction="horizontal"
        horizontalAlignItems="center"
        verticalAlignItems="center"
        height="hug-contents"
        padding={8}
        fill="#FFFFFF"
        cornerRadius={8}
        spacing={12}
        onClick={async () => {
          await new Promise((resolve) => {
            figma.showUI(__html__)
            figma.ui.on('message', (msg) => {
              if (msg === 'close') {
                figma.closePlugin()
              }
            })
          })
        }}
      >
        <Text fontSize={32} horizontalAlignText="center">
          Click Me
        </Text>
      </AutoLayout>
  )
}

widget.register(Widget);
