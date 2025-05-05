const { widget } = figma;
const { Image } = widget;

const GearSocket = ({
  socket
}) => {
  return (
    <Image
      src={socket.media.content.assets[0].value}
      width={15}
      height={15}
    />
  )
}

export default GearSocket;