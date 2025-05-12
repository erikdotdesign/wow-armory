const { widget } = figma;
const { AutoLayout, SVG } = widget;

interface BigRedButtonProps {
  pressed: boolean;
  setPressed(pressed: any): void;
}

const BigRedButton = ({
  pressed,
  setPressed
}: BigRedButtonProps) => {

  const handleClick = () => {
    if (!pressed) {
      setPressed(true);
    }
  }

  return (
    <AutoLayout 
      positioning="absolute"
      verticalAlignItems="center"
      horizontalAlignItems="center"
      width={264}
      height={264}
      x={2082}
      y={1542}
      onClick={handleClick}
      cornerRadius={264}
      strokeWidth={2}
      hoverStyle={{
        stroke: 
        {
          r: 1,
          g: 1,
          b: 1,
          a: 0.5
        }
      }}
      tooltip="DO NOT PRESS!">
      <SVG 
        src={
          `<svg width="244" height="244" viewBox="0 0 244 244" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="122" cy="122" r="122" fill="url(#paint0_linear_54_19778)"/>
            <circle cx="122" cy="122" r="103" fill="url(#paint1_linear_54_19778)"/>
            <g filter="url(#filter0_d_54_19778)">
            <circle cx="122" cy="122" r="84" fill="url(#paint2_linear_54_19778)"/>
            <circle cx="122" cy="122" r="80" stroke="url(#paint3_linear_54_19778)" stroke-width="8"/>
            </g>
            <circle cx="122" cy="9" r="4" fill="#242828"/>
            <circle cx="122" cy="235" r="4" fill="#959C9C"/>
            <circle cx="235" cy="122" r="4" fill="#94A5A5"/>
            <circle cx="206" cy="47" r="4" fill="#242828"/>
            <circle cx="206" cy="197" r="4" fill="#959C9C"/>
            <circle cx="37" cy="47" r="4" fill="#242828"/>
            <circle cx="37" cy="197" r="4" fill="#959C9C"/>
            <circle cx="9" cy="122" r="4" fill="#94A5A5"/>
            <defs>
            <filter id="filter0_d_54_19778" x="28" y="28" width="188" height="188" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_19778"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_19778" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_54_19778" x1="122" y1="0" x2="122" y2="244" gradientUnits="userSpaceOnUse">
            <stop stop-color="#989898"/>
            <stop offset="1" stop-color="#323232"/>
            </linearGradient>
            <linearGradient id="paint1_linear_54_19778" x1="122" y1="19" x2="122" y2="225" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7F532C"/>
            <stop offset="1" stop-color="#AE7B4E"/>
            </linearGradient>
            <linearGradient id="paint2_linear_54_19778" x1="122" y1="38" x2="122" y2="206" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9D0201"/>
            <stop offset="1" stop-color="#650101"/>
            </linearGradient>
            <linearGradient id="paint3_linear_54_19778" x1="122" y1="38" x2="122" y2="206" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF9191"/>
            <stop offset="1" stop-color="#995757"/>
            </linearGradient>
            </defs>
            </svg>
          `
        }
        width={244}
        height={244} />
    </AutoLayout>
  )
}

export default BigRedButton;