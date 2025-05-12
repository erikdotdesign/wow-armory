import { WIDGET_VOTE_BUTTON_HEIGHT, WIDGET_MOG_BUTTON_WIDTH, WIDGET_VOTE_BUTTON_CORNER_RADIUS, WIDGET_COLOR_GOLD } from "./constants";

const { widget } = figma;
const { AutoLayout, Ellipse, SVG, Text } = widget;

interface MogButtonProps {
  mogVote: MogVote;
  mogVoteCount: any;
  x: number;
  y: number;
  winning: boolean;
  setMogVoteCount(mogVoteCount: any): void;
}

const MogButton = ({
  mogVote,
  mogVoteCount,
  x,
  y,
  winning,
  setMogVoteCount
}: MogButtonProps) => {

  const upvoteIcon = `
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.9682 50H28.9682V38H32.9682V50ZM43.1987 31.0498C43.4687 31.3198 43.6381 31.7004 43.6381 32.1104L43.6088 32.4297L42.6586 37H48.9682C50.0682 37 50.9682 37.9 50.9682 39V41C50.9682 41.26 50.9185 41.5005 50.8285 41.7305L47.809 48.7803C47.509 49.5002 46.7982 50 45.9682 50H36.9682C35.8684 49.9998 34.9682 49.0999 34.9682 48V38C34.9682 37.45 35.1883 36.9498 35.5483 36.5898L42.1381 30L43.1987 31.0498ZM36.9682 38V48H45.9682L48.9682 41V39H39.9682L41.309 33.6602L36.9682 38ZM20.9662 6C21.2662 6.00004 21.5085 6.0921 21.6918 6.27539C21.8748 6.45866 21.9662 6.70027 21.9662 7V8C21.9662 9.09996 22.3578 10.0419 23.141 10.8252C23.9243 11.6084 24.8664 12 25.9662 12C27.0661 12 28.0082 11.6084 28.7914 10.8252C29.5747 10.0419 29.9662 9.09996 29.9662 8V7C29.9662 6.70005 30.0584 6.45871 30.2416 6.27539C30.4249 6.09215 30.6664 6.00004 30.9662 6H34.4662L45.9662 12.5996C46.4328 12.8663 46.7333 13.2666 46.8666 13.7998C46.9999 14.333 46.933 14.8332 46.6664 15.2998L42.6664 22.2998C42.3998 22.7663 42.0081 23.0581 41.4916 23.1748C40.975 23.2915 40.4662 23.2168 39.9662 22.9502L37.9662 21.9502V25.124C36.5689 25.2983 35.2277 25.6534 33.9662 26.1641V15.2002L40.1664 18.5996L42.266 15.0996L33.6664 10.0996C33.1664 11.7996 32.2245 13.2085 30.8412 14.3252C29.458 15.4417 27.8327 16 25.9662 16C24.0997 16 22.4745 15.4418 21.0912 14.3252C19.7079 13.2085 18.766 11.7996 18.266 10.0996L9.66643 15.0996L11.766 18.5996L17.9662 15.2002V38H24.2485C24.0641 38.9718 23.9662 39.9745 23.9662 41C23.9662 41.3359 23.9781 41.6693 23.9985 42H15.9662C15.3997 42 14.9247 41.808 14.5414 41.4248C14.1582 41.0415 13.9662 40.5666 13.9662 40V21.9004L11.9662 23C11.4997 23.2666 10.9995 23.3335 10.4662 23.2002C9.93299 23.0669 9.53269 22.7664 9.26604 22.2998L5.26604 15.2998C4.99952 14.8332 4.93352 14.333 5.06682 13.7998C5.2002 13.2666 5.49967 12.8662 5.96624 12.5996L17.4662 6H20.9662Z" fill="white"/>
    </svg>
  `;

  const downvoteIcon = `
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.9994 31C44.0994 31 44.9994 31.9 44.9994 33V43C44.9994 43.55 44.7794 44.0502 44.4194 44.4102L37.8295 51L36.7699 49.9502C36.4999 49.6802 36.3295 49.2996 36.3295 48.8896L36.3598 48.5703L37.31 44H30.9994C29.8996 43.9998 28.9994 43.0999 28.9994 42V40C28.9994 39.74 29.0501 39.4995 29.1401 39.2695L32.1596 32.2197C32.4596 31.4999 33.1697 31.0002 33.9994 31H42.9994ZM33.9994 33L30.9994 40V42H39.9994L38.6596 47.3398L42.9994 43V33H33.9994ZM50.9994 43H46.9994V31H50.9994V43ZM20.9975 5C21.2974 5.00004 21.5398 5.0921 21.7231 5.27539C21.9061 5.45866 21.9975 5.70027 21.9975 6V7C21.9975 8.09996 22.389 9.04188 23.1723 9.8252C23.9556 10.6084 24.8976 11 25.9975 11C27.0974 11 28.0394 10.6084 28.8227 9.8252C29.606 9.04188 29.9975 8.09996 29.9975 7V6C29.9975 5.70005 30.0896 5.45871 30.2729 5.27539C30.4562 5.09215 30.6976 5.00004 30.9975 5H34.4975L45.9975 11.5996C46.464 11.8663 46.7645 12.2666 46.8979 12.7998C47.0312 13.333 46.9642 13.8332 46.6977 14.2998L42.6977 21.2998C42.4311 21.7663 42.0393 22.0581 41.5229 22.1748C41.0063 22.2915 40.4974 22.2168 39.9975 21.9502L37.9975 20.9502V24.124C36.6002 24.2983 35.2589 24.6534 33.9975 25.1641V14.2002L40.1977 17.5996L42.2973 14.0996L33.6977 9.09961C33.1977 10.7996 32.2558 12.2085 30.8725 13.3252C29.4892 14.4417 27.864 15 25.9975 15C24.1309 15 22.5058 14.4418 21.1225 13.3252C19.7392 12.2085 18.7973 10.7996 18.2973 9.09961L9.69768 14.0996L11.7973 17.5996L17.9975 14.2002V37H24.2797C24.0954 37.9718 23.9975 38.9745 23.9975 40C23.9975 40.3359 24.0093 40.6693 24.0297 41H15.9975C15.4309 41 14.956 40.808 14.5727 40.4248C14.1894 40.0415 13.9975 39.5666 13.9975 39V20.9004L11.9975 22C11.5309 22.2666 11.0307 22.3335 10.4975 22.2002C9.96424 22.0669 9.56394 21.7664 9.29729 21.2998L5.29729 14.2998C5.03077 13.8332 4.96477 13.333 5.09807 12.7998C5.23145 12.2666 5.53092 11.8662 5.99749 11.5996L17.4975 5H20.9975Z" fill="white"/>
    </svg>
  `;

  const winningIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 21V19H16V21H4ZM9.65 16.15L4 10.5L6.1 8.35L11.8 14L9.65 16.15ZM16 9.8L10.35 4.1L12.5 2L18.15 7.65L16 9.8ZM20.6 20L7.55 6.95L8.95 5.55L22 18.6L20.6 20Z" fill="black"/>
    </svg>
  `;

  const handleClick = () => {
    setMogVoteCount(mogVoteCount + 1);
  }

  return (
    <AutoLayout 
      positioning="absolute"
      verticalAlignItems="center"
      horizontalAlignItems="center"
      overflow="visible"
      spacing={8}
      width={WIDGET_MOG_BUTTON_WIDTH}
      height={WIDGET_VOTE_BUTTON_HEIGHT}
      x={x}
      y={y}
      cornerRadius={WIDGET_VOTE_BUTTON_CORNER_RADIUS}
      fill={{
        r: 0,
        g: 0,
        b: 0,
        a: 0.75
      }}
      effect={{
        type: "background-blur",
        blur: 20,
      }}
      hoverStyle={{
        stroke: 
        {
          r: 1,
          g: 1,
          b: 1,
          a: 0.5
        }
      }}
      strokeWidth={2}
      onClick={handleClick}>
      {
        mogVote === 'upvote'
        ? <SVG 
            src={upvoteIcon}
            width={56}
            height={56} />
          : null
      }
      <AutoLayout
        width={48}
        height={48}
        horizontalAlignItems="center"
        verticalAlignItems="center">
        <Ellipse
          positioning="absolute"
          width={48}
          height={48}
          fill={{
            r: 1,
            g: 1,
            b: 1,
            a: 0.12
          }} />
        <Text
          fontFamily="Inter"
          fontSize={24}
          lineHeight={48}
          fontWeight={700}
          fill={"#ffffff"}>
          {mogVoteCount}
        </Text>
      </AutoLayout>
      {
        mogVote === 'downvote'
        ? <SVG 
            src={downvoteIcon}
            width={56}
            height={56} />
          : null
      }
      {
        winning
        ? <AutoLayout
            positioning="absolute"
            width={48}
            height={48}
            horizontalAlignItems="center"
            verticalAlignItems="center"
            x={mogVote === 'upvote' ? -24 : WIDGET_MOG_BUTTON_WIDTH - 24}
            y={-24}>
            <Ellipse
              positioning="absolute"
              width={48}
              height={48}
              fill={WIDGET_COLOR_GOLD} />
            <SVG
              src={winningIcon}
              width={32}
              height={32} />
          </AutoLayout>
        : null
      }
    </AutoLayout>
  )
}

export default MogButton;