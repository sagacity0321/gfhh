import { useMemo } from "react";
import "./IconJamIconsOutlineL11.css";
const IconJamIconsOutlineL = ({
  iconJamIconsOutlineLIconJ,
  iconJamIconsOutlineLWidth,
  iconJamIconsOutlineLHeight,
  iconJamIconsOutlineLFlexShrink,
}) => {
  const iconJamIconsOutlineL1Style = useMemo(() => {
    return {
      width: iconJamIconsOutlineLWidth,
      height: iconJamIconsOutlineLHeight,
      flexShrink: iconJamIconsOutlineLFlexShrink,
    };
  }, [
    iconJamIconsOutlineLWidth,
    iconJamIconsOutlineLHeight,
    iconJamIconsOutlineLFlexShrink,
  ]);

  return (
    <img
      className="icon-jam-icons-outline-l5"
      alt=""
      src={iconJamIconsOutlineLIconJ}
      style={iconJamIconsOutlineL1Style}
    />
  );
};

export default IconJamIconsOutlineL;
