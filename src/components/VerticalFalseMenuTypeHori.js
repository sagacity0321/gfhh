import { useMemo } from "react";
import SizeXXSDotFalseRemoveBu from "./SizeXXSDotFalseRemoveBu";
import "./VerticalFalseMenuTypeHori.css";
const VerticalFalseMenuTypeHori = ({
  iconJamIconsOutlineLogos,
  iconJamIconsOutlineLogos1,
  text = "Menu Item",
  iconLeft = true,
  iconRight = true,
  badge = true,
  verticalFalseMenuTypeHoriPosition,
  verticalFalseMenuTypeHoriPadding,
  menuItemColor,
  menuItemLineHeight,
  menuItemFontWeight,
}) => {
  const verticalFalseMenuTypeHoriStyle = useMemo(() => {
    return {
      position: verticalFalseMenuTypeHoriPosition,
      padding: verticalFalseMenuTypeHoriPadding,
    };
  }, [verticalFalseMenuTypeHoriPosition, verticalFalseMenuTypeHoriPadding]);

  const menuItemStyle = useMemo(() => {
    return {
      color: menuItemColor,
      lineHeight: menuItemLineHeight,
      fontWeight: menuItemFontWeight,
    };
  }, [menuItemColor, menuItemLineHeight, menuItemFontWeight]);

  return (
    <div
      className="verticalfalse-menu-typehori"
      style={verticalFalseMenuTypeHoriStyle}
    >
      {iconLeft && (
        <img
          className="icon-jam-icons-outline-l50"
          alt=""
          src={iconJamIconsOutlineLogos}
        />
      )}
      {text && (
        <div className="menu-item24" style={menuItemStyle}>
          {text}
        </div>
      )}
      <SizeXXSDotFalseRemoveBu
        text="99+"
        sizeXXSDotFalseRemoveBuPosition="unset"
        sizeXXSDotFalseRemoveBuBackgroundColor="#697077"
        sizeXXSDotFalseRemoveBuPadding="var(--padding-12xs-5) var(--padding-7xs-5)"
        sizeXXSDotFalseRemoveBuMargin="unset"
        sizeXXSDotFalseRemoveBuTop="unset"
        sizeXXSDotFalseRemoveBuLeft="unset"
        sizeXXSDotFalseRemoveBuZIndex="unset"
        textColor="#fff"
      />
      {iconRight && (
        <img
          className="icon-jam-icons-outline-l50"
          alt=""
          src={iconJamIconsOutlineLogos1}
        />
      )}
    </div>
  );
};

export default VerticalFalseMenuTypeHori;
