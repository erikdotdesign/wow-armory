import { toRgba } from "./helpers.js";

const { widget } = figma;
const { AutoLayout, Text } = widget;

interface InspectorStatsProps {
  stats: any
}

const InspectorStats = ({
  stats
}: InspectorStatsProps) => {
  return (
    stats
    ? <AutoLayout
        direction="vertical">
        {
          stats.map((stat, index) => (
            <Text 
              key={index}
              fontFamily="Inter"
              fontSize={12}
              lineHeight={18}
              fontWeight={400}
              fill={toRgba(stat.display.color)}>
              { stat.display.display_string }
            </Text>
          ))
        }
      </AutoLayout>
    : null
  )
}

export default InspectorStats;