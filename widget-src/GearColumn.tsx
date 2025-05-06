import GearIcon from "./GearIcon.js";
import GearItemDetails from "./GearItemDetails.js";
import { WIDGET_SPACING } from "./constants";

const { widget } = figma;
const { AutoLayout } = widget;

interface GearColumnProps {
  children: any[],
  rightAlign: boolean
}

const GearColumn = ({
  children,
  rightAlign
}: GearColumnProps) => {
  return (
    <AutoLayout 
      spacing={WIDGET_SPACING}
      direction="vertical"
      horizontalAlignItems={rightAlign ? 'end' : 'start'}>
      {
        ...children
      }
    </AutoLayout>
  )
}

export default GearColumn;