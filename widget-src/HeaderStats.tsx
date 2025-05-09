import { WIDGET_WIDTH, WIDGET_COLOR_GOLD, WIDGET_COLOR_GRAY } from "./constants";
const { widget } = figma;
const { Text, AutoLayout, SVG } = widget;

const HeaderStat = ({src, stat}) => {
  return (
    <AutoLayout
      direction="vertical"
      horizontalAlignItems="center"
      spacing={32}
      width={172}>
      <SVG
        width={48}
        height={48}
        src={src} />
      <Text
        fontFamily="Inter"
        fontSize={24}
        lineHeight={32}
        fontWeight={700}
        fill={stat ? WIDGET_COLOR_GOLD : WIDGET_COLOR_GRAY}>
        {stat ? stat : "N/A"}
      </Text>
    </AutoLayout>
  )
}

const HeaderStats = ({
  achievement,
  averageItemLevel,
  dungeonRating
}) => {
  return (
    <AutoLayout 
      width={WIDGET_WIDTH / 3}
      horizontalAlignItems="center">
      <HeaderStat
        src={`<svg xmlns="http://www.w3.org/2000/svg" fill="${achievement ? WIDGET_COLOR_GOLD : WIDGET_COLOR_GRAY}" viewBox="0 0 64 64" class="Icon-svg"><path xmlns="http://www.w3.org/2000/svg" d="M51.492 3.677c-5.941 1.654-14.886 3.906-19.494 3.906-4.611 0-13.553-2.252-19.495-3.906-2.937-.815-5.875 1.255-5.875 4.144v34.684c0 1.336.657 2.597 1.778 3.415l20.792 15.176a4.76 4.76 0 0 0 2.8.904c.989 0 1.981-.3 2.805-.904L55.594 45.92c1.122-.818 1.778-2.08 1.778-3.415V7.823c-.002-2.888-2.942-4.961-5.88-4.146"></path></svg>`}
        stat={achievement && achievement} />
      <HeaderStat
        src={`<svg xmlns="http://www.w3.org/2000/svg" fill="${averageItemLevel ? WIDGET_COLOR_GOLD : WIDGET_COLOR_GRAY}" viewBox="0 0 64 64" class="Icon-svg"><path xmlns="http://www.w3.org/2000/svg" d="m13.593 18.962-6.729 7.035c-.135.142-.061.383.128.417l3.932.683a.23.23 0 0 0 .205-.068l3.428-3.584 7.684 7.93 3.927-4.106.346-.362 3.725-3.896-7.684-7.928 3.646-3.814a.25.25 0 0 0 .066-.213l-.654-4.112a.232.232 0 0 0-.398-.133l-6.853 7.167L7.485 4.401V.428A.42.42 0 0 0 7.075 0H.791a.42.42 0 0 0-.409.428v6.571c0 .236.183.427.409.427h3.512zm27.505 15.599-3.8 3.972-.24.251-3.958 4.139 18.652 19.411L61.562 64l-1.671-9.882zM63.209.017h-6.283a.42.42 0 0 0-.409.428v3.672L45.483 13.83l-6.728-7.034c-.135-.143-.366-.065-.397.132l-.654 4.111a.25.25 0 0 0 .066.214l3.428 3.585L4.002 53.726 2.408 63.983l9.451-1.748 37.336-39.036 3.646 3.812a.23.23 0 0 0 .205.069l3.931-.684c.188-.031.263-.274.128-.415l-6.854-7.166L59.41 7.442h3.799a.42.42 0 0 0 .409-.428V.444a.42.42 0 0 0-.409-.427"></path></svg>`}
        stat={averageItemLevel && `${averageItemLevel} ILVL`} />
      <HeaderStat
        src={`<svg xmlns="http://www.w3.org/2000/svg" fill="${dungeonRating ? WIDGET_COLOR_GOLD : WIDGET_COLOR_GRAY}" xml:space="preserve" viewBox="0 0 100 100" class="Icon-svg"><path d="M12.5 91.2h75v9.8h-75zM12.5.5h75v9.8h-75zM87.3 20.3v-4.6H12.6v4.6c.1 12.6 7.5 24.2 19 30.4C20.1 57 12.7 68.6 12.7 81.2v4.6h74.6v-4.6c-.1-12.6-7.5-24.2-19-30.4 11.6-6.3 19-18 19-30.5M50 46.2c-13.3 0-24.7-9.1-27.1-21.3h54.3C74.7 37.2 63.3 46.2 50 46.2M22.8 76.6C25.3 64.4 36.7 55.3 50 55.3s24.7 9.1 27.1 21.3z"></path></svg>`}
        stat={dungeonRating && `M+ ${dungeonRating.rating}`} />
    </AutoLayout>
  )
}

export default HeaderStats;