import { WIDGET_WIDTH, WIDGET_HEIGHT, WIDGET_COLOR_RED, WIDGET_COLOR_GOLD, WIDGET_COLOR_RED_LIGHT } from "./constants";
import { toRgba } from "./helpers";

const { widget } = figma;
const { AutoLayout, Text, Image, SVG } = widget;

const Splash = () => {
  return (
    <AutoLayout
      width={WIDGET_WIDTH}
      height={WIDGET_HEIGHT}
      overflow="hidden">
      <Image
        src={"https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt1293dc96274487a1/605e55b8c0625f0ca747a84a/NVMY5Y41YZ9J1541609533301.jpg?auto=webp&quality=75"}
        width={WIDGET_WIDTH}
        height={2300} />
      <AutoLayout
        width={WIDGET_WIDTH}
        height={WIDGET_HEIGHT}
        positioning="absolute"
        verticalAlignItems="center"
        horizontalAlignItems="center">
        <AutoLayout
          width={556}
          height={556}
          stroke={WIDGET_COLOR_GOLD}
          strokeWidth={8}
          cornerRadius={48}
          direction="vertical"
          verticalAlignItems="center"
          horizontalAlignItems="center"
          spacing={72}
          fill={{
            type: "gradient-linear",
            gradientHandlePositions: [
              { x: 0.5, y: 0.5 },
              { x: 0.5, y: 1 },
              { x: 1, y: 0.5 }
            ],
            gradientStops: [
              { position: 0, color: toRgba({r: 33, g: 21, b: 16, a: 1}) },
              { position: 1, color: toRgba({r: 13, g: 8, b: 6, a: 1}) }
            ]
          }}>
          <SVG
            width={156}
            height={156}
            src={`
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" aria-labelledby="blz-icon-title-world-of-warcraft" viewBox="0 1 48 48">
                <title id="blz-icon-title-world-of-warcraft">World Of Warcraft</title>
                <path 
                  fill="#2B374C" 
                  fill-rule="evenodd" 
                  d="M24 8.848c8.8 0 16 7.255 16 16.121 0 8.867-7.2 16.121-16 16.121S8 33.836 8 24.97 15.2 8.847 24 8.847" 
                  clip-rule="evenodd">
                </path>
                <path 
                  fill="#F4BF2A" 
                  fill-rule="evenodd" 
                  d="M44 24.97c0-4.031-1.2-8.061-3.6-11.487V8.647c0-.202-.2-.202-.2-.202h-4.8c-6.8-4.635-15.8-4.635-22.6 0H7.6v5.038c-4.8 6.851-4.8 16.12 0 22.972v4.837c0 .201.2.201.2.201h4.8c6.8 4.635 15.8 4.635 22.8 0h4.8c.2 0 .2-.202.2-.403v-4.836c2.4-3.224 3.6-7.255 3.6-11.285m-37.4-.001c0-9.673 7.8-17.531 17.4-17.531s17.4 7.859 17.4 17.531C41.4 34.641 33.6 42.5 24 42.5S6.6 34.64 6.6 24.969" 
                  clip-rule="evenodd">
                </path>
                <path 
                  fill="#F4BF2A" 
                  fill-rule="evenodd" 
                  d="M12.4 15.498H19c-.2.806-.2 1.612-.2 2.418C19 20.94 21 29 21 29l3-12.695 3.2 12.292s2-10.881 2-11.687c0-.605-.4-1.008-.8-1.411h7c-1 .806-1.6 2.015-2 3.224-.6 2.418-2.8 14.509-2.8 15.315s.4 1.612.8 2.217H25c.2-.605.2-1.21.2-1.814 0-1.209-1-6.448-1-6.448s-1.4 5.44-1.4 6.448c0 .605.2 1.21.4 1.814h-6.6s1.2-1.008 1.2-1.814c-.2-2.418-3.6-15.315-3.8-16.322 0-1.008-.6-2.015-1.6-2.62" 
                  clip-rule="evenodd">
                </path>
              </svg>
            `} />
          <AutoLayout
            direction="horizontal"
            horizontalAlignItems="center"
            verticalAlignItems="center"
            height="hug-contents"
            padding={{
              horizontal: 64,
              vertical: 48
            }}
            fill={WIDGET_COLOR_RED}
            hoverStyle={{
              fill: WIDGET_COLOR_RED_LIGHT
            }}
            cornerRadius={24}
            onClick={async () => {
              await new Promise((resolve) => {
                figma.showUI(__html__, { width: 300, height: 528 })
                figma.ui.on('message', (msg) => {
                  if (msg === 'close') {
                    figma.closePlugin()
                  }
                })
              })
            }}
          >
            <Text 
              fontSize={32} 
              fontFamily="Inter"
              fontWeight={700}
              horizontalAlignText="center"
              fill={"#ffffff"}
              textCase="upper">
              Share Armory
            </Text>
          </AutoLayout>
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  )
}

export default Splash;