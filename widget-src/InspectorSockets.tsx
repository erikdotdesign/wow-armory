import { WIDGET_COLOR_STAT, WIDGET_COLOR_GRAY } from "./constants";
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
    ? <AutoLayout 
        direction="vertical">
        {
          sockets.map((socket, index) => (
            <AutoLayout 
              key={index}
              spacing={4}
              verticalAlignItems="center">
              <GearSocket 
                socket={socket} />
              <Text
                fontFamily="Inter"
                fontSize={12}
                lineHeight={18}
                fontWeight={400}
                fill={socket.display_string ? WIDGET_COLOR_STAT : WIDGET_COLOR_GRAY }>
                { socket.display_string ? socket.display_string : socket.socket_type.name }
              </Text>
            </AutoLayout>
          ))
        }
      </AutoLayout>
    : null
  )
}

export default InspectorSockets;