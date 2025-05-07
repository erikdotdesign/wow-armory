import { WIDGET_COLOR_STAT } from "./constants";
import GearSocket from "./GearSocket";

const { widget } = figma;
const { AutoLayout, Text } = widget;

interface InspectorSocketsProps {
  sockets: any;
}

const InspectorSockets = ({
  sockets
}: InspectorSocketsProps) => {

  return (
    sockets && sockets.length > 0
    ? <AutoLayout direction="vertical">
        {
          sockets.map((socket, index) => (
            <AutoLayout key={index}>
              <GearSocket 
                socket={socket} />
              <Text
                fontFamily="Inter"
                fontSize={12}
                lineHeight={18}
                fontWeight={400}
                fill={WIDGET_COLOR_STAT}>
                { socket.display_string }
              </Text>
            </AutoLayout>
          ))
        }
      </AutoLayout>
    : null
  )
}

export default InspectorSockets;