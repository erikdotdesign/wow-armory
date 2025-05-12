import CharacterRender from "./CharacterRender";
import GearColumnLeft from "./GearColumnLeft";
import GearColumnRight from "./GearColumnRight";
import GearBottomRow from "./GearBottomRow";
import Inspector from "./Inspector";
import Splash from "./Splash";
import Header from "./Header";
import FactionButton from "./FactionButton";

const { widget } = figma;
const { AutoLayout, useEffect, useSyncedState } = widget;

const Widget = () => {
  const [armory, setArmory] = useSyncedState<any>("armory", null);
  const [gearInspect, setGearInspect] = useSyncedState<any>("gear inspect", null);
  const [hordeCount, setHordeCount] = useSyncedState<any>("horde count", 0);
  const [allianceCount, setAllianceCount] = useSyncedState<any>("alliance count", 0);
  const [mogUpCount, setMogUpCount] = useSyncedState<any>("mog up count", 0);
  const [mogDownCount, setMogDownCount] = useSyncedState<any>("mog down count", 0);

  useEffect(() => {
    figma.ui.onmessage = async (msg) => {
      if (msg.type === "add-armory") {
        console.log(msg.characterData);
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
        <Header
          name={armory.name}
          title={armory.title}
          level={armory.level}
          achievement={armory.achievement}
          playerClass={armory.class}
          dungeonRating={armory.dungeonRating}
          faction={armory.faction}
          averageItemLevel={armory.averageItemLevel}
          race={armory.race}
          realm={armory.realm}
          spec={armory.spec}
          guild={armory.guild} />
        <FactionButton
          faction="alliance"
          factionCount={allianceCount}
          setFactionCount={setAllianceCount}
          winning={allianceCount > hordeCount}
          x={763}
          y={354} />
        <FactionButton
          faction="horde"
          factionCount={hordeCount}
          setFactionCount={setHordeCount}
          winning={hordeCount > allianceCount}
          x={1212}
          y={354} />
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
