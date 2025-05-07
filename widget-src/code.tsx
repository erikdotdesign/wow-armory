import { WIDGET_WIDTH, WIDGET_HEIGHT, WIDGET_COLOR_RED } from "./constants";
import CharacterRender from "./CharacterRender";
import GearColumnLeft from "./GearColumnLeft";
import GearColumnRight from "./GearColumnRight";
import GearBottomRow from "./GearBottomRow";
import Inspector from "./Inspector";
import Splash from "./Splash";

const { widget } = figma;
const { AutoLayout, useEffect, useSyncedState } = widget;

const Widget = () => {
  const [armory, setArmory] = useSyncedState<any>("armory", null);
  const [gearInspect, setGearInspect] = useSyncedState<any>("gear inspect", null);

  useEffect(() => {
    figma.ui.onmessage = async (msg) => {
      if (msg.type === "add-armory") {
        setArmory(msg.characterData);
        figma.closePlugin();
      }
    };
  })

  return (
    armory
    ? <AutoLayout
        direction="horizontal"
        horizontalAlignItems="center"
        verticalAlignItems="center">
        <CharacterRender 
          render={armory.render} />
        <GearColumnLeft 
          gear={armory.gear}
          gearInspect={gearInspect}
          setGearInspect={setGearInspect} />
        <GearColumnRight 
          gear={armory.gear}
          gearInspect={gearInspect}
          setGearInspect={setGearInspect} />
        <GearBottomRow 
          gear={armory.gear}
          gearInspect={gearInspect}
          setGearInspect={setGearInspect} />
        {
          gearInspect
          ? <Inspector
              gearInspect={gearInspect}
              setGearInspect={setGearInspect} />
          : null
        }
      </AutoLayout>
    : <Splash />
  )
}

widget.register(Widget);
