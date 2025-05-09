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
        return 15;
      case "BLUE":
        return 15 * 2;
      case "WHITE":
        return 15 * 3;
      case "PRISMATIC":
        return 15 * 4;
      case "PURPLE":
        return 15 * 5;
      case "ORANGE":
        return 15 * 6;
      case "GREEN":
        return 15 * 7;
      case "TINKER":
        return 15 * 8;
      default:
        return 15 * 8;
    }
  }

  return (
    <AutoLayout
      width={15}
      height={15}
      overflow="hidden">
      {
        socket.media
        ? <Image
            src={socket.media.content.assets[0].value}
            width={15}
            height={15}
          />
        : null
      }
      <Image
        src={socketFrameUrl}
        width={135}
        height={15}
        x={getFramePosition(socket.socket_type.type) * -1}
        positioning="absolute" />
    </AutoLayout>
  )
}

export default GearSocket;