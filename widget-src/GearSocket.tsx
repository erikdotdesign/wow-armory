import { WIDGET_GEAR_SOCKET_SIZE } from "./constants";
const { widget } = figma;
const { Image, AutoLayout } = widget;

const GearSocket = ({
  socket
}) => {

  const socketFrameUrl = "https://s3.amazonaws.com/wow-render-us/icons/tooltips/sockets.png";

  const getFramePosition = (socketType) => {
    switch (socketType) {
      case "RED":
        return 0;
      case "YELLOW":
        return WIDGET_GEAR_SOCKET_SIZE;
      case "BLUE":
        return WIDGET_GEAR_SOCKET_SIZE * 2;
      case "WHITE":
      case "TINKER":
        return WIDGET_GEAR_SOCKET_SIZE * 3;
      case "PRISMATIC":
        return WIDGET_GEAR_SOCKET_SIZE * 4;
      case "PURPLE":
        return WIDGET_GEAR_SOCKET_SIZE * 5;
      case "ORANGE":
        return WIDGET_GEAR_SOCKET_SIZE * 6;
      case "GREEN":
        return WIDGET_GEAR_SOCKET_SIZE * 7;
      default:
        return WIDGET_GEAR_SOCKET_SIZE * 8;
    }
  }

  return (
    <AutoLayout
      width={WIDGET_GEAR_SOCKET_SIZE}
      height={WIDGET_GEAR_SOCKET_SIZE}
      overflow="hidden">
      {
        socket.media
        ? <Image
            src={socket.media.content.assets[0].value}
            width={WIDGET_GEAR_SOCKET_SIZE}
            height={WIDGET_GEAR_SOCKET_SIZE}
          />
        : null
      }
      <Image
        src={socketFrameUrl}
        width={WIDGET_GEAR_SOCKET_SIZE * 9}
        height={WIDGET_GEAR_SOCKET_SIZE}
        x={getFramePosition(socket.socket_type.type) * -1}
        positioning="absolute" />
    </AutoLayout>
  )
}

export default GearSocket;