import CharacterRender from "./CharacterRender";
import GearColumnLeft from "./GearColumnLeft";
import GearColumnRight from "./GearColumnRight";
import GearBottomRow from "./GearBottomRow";
import Inspector from "./Inspector";
import Splash from "./Splash";
import Header from "./Header";
import FactionButton from "./FactionButton";
import MogButton from "./MogButton";
import BigRedButton from "./BigRedButton";
import Countdown from "./Countdown";

const { widget } = figma;
const { AutoLayout, useEffect, useSyncedState, waitForTask } = widget;

const Widget = () => {
  const [armory, setArmory] = useSyncedState<any>("armory", null);
  const [gearInspect, setGearInspect] = useSyncedState<any>("gear inspect", null);
  const [hordeCount, setHordeCount] = useSyncedState<any>("horde count", 0);
  const [allianceCount, setAllianceCount] = useSyncedState<any>("alliance count", 0);
  const [mogUpvoteCount, setMogUpvoteCount] = useSyncedState<any>("mog upvote count", 0);
  const [mogDownvoteCount, setMogDownvoteCount] = useSyncedState<any>("mog downvote count", 0);
  const [bigRedButtonPressed, setBigRedButtonPressed] = useSyncedState<any>("big red button pressed", false);
  const [countdown, setCountdown] = useSyncedState<any>("countdown", 3);

  const resetState = () => {
    setArmory(null);
    setGearInspect(null);
    setHordeCount(0);
    setAllianceCount(0);
    setMogUpvoteCount(0);
    setMogDownvoteCount(0);
    setBigRedButtonPressed(false);
    setCountdown(3);
  }

  useEffect(() => {
    figma.ui.onmessage = async (msg) => {
      if (msg.type === "add-armory") {
        console.log(msg.characterData);
        setArmory(msg.characterData);
        figma.closePlugin();
      }
    };
    if (bigRedButtonPressed) {
      if (countdown >= 1) {
        waitForTask(new Promise(resolve => {
          const timeout = setTimeout(() => {
            setCountdown(countdown - 1);
          }, 1000);
          return () => clearTimeout(timeout);
        }));
      } else {
        resetState();
      }
    }
  });

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
        <MogButton
          mogVote="upvote"
          mogVoteCount={mogUpvoteCount}
          setMogVoteCount={setMogUpvoteCount}
          x={384}
          y={354} />
        <MogButton
          mogVote="downvote"
          mogVoteCount={mogDownvoteCount}
          setMogVoteCount={setMogDownvoteCount}
          x={1834}
          y={354} />
        <BigRedButton
          pressed={bigRedButtonPressed}
          setPressed={setBigRedButtonPressed} />
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
        {
          bigRedButtonPressed
          ? <Countdown
              countdown={countdown} />
          : null
        }
      </AutoLayout>
    : <Splash />
  )
}

widget.register(Widget);
