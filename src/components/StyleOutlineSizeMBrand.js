import { useMemo } from "react";
import "./StyleOutlineSizeMBrand.css";
const StyleOutlineSizeMBrand = ({
  iconJamIconsOutlineLogos,
  iconJamIconsOutlineLogos1,
  text = "Button Text",
  iconLeft = true,
  iconRight = false,
  styleOutlineSizeMBrandPosition,
  styleOutlineSizeMBrandHeight,
  styleOutlineSizeMBrandPadding,
  styleOutlineSizeMBrandBackgroundColor,
  styleOutlineSizeMBrandZIndex,
  styleOutlineSizeMBrandWidth,
  styleOutlineSizeMBrandFlex,
  styleOutlineSizeMBrandCursor,
  textContainerBoxSizing,
  buttonTextFontSize,
  buttonTextColor,
  buttonTextDisplay,
}) => {
  const styleOutlineSizeMBrandStyle = useMemo(() => {
    return {
      position: styleOutlineSizeMBrandPosition,
      height: styleOutlineSizeMBrandHeight,
      padding: styleOutlineSizeMBrandPadding,
      backgroundColor: styleOutlineSizeMBrandBackgroundColor,
      zIndex: styleOutlineSizeMBrandZIndex,
      width: styleOutlineSizeMBrandWidth,
      flex: styleOutlineSizeMBrandFlex,
      cursor: styleOutlineSizeMBrandCursor,
    };
  }, [
    styleOutlineSizeMBrandPosition,
    styleOutlineSizeMBrandHeight,
    styleOutlineSizeMBrandPadding,
    styleOutlineSizeMBrandBackgroundColor,
    styleOutlineSizeMBrandZIndex,
    styleOutlineSizeMBrandWidth,
    styleOutlineSizeMBrandFlex,
    styleOutlineSizeMBrandCursor,
  ]);

  const textContainerStyle = useMemo(() => {
    return {
      boxSizing: textContainerBoxSizing,
    };
  }, [textContainerBoxSizing]);

  const buttonTextStyle = useMemo(() => {
    return {
      fontSize: buttonTextFontSize,
      color: buttonTextColor,
      display: buttonTextDisplay,
    };
  }, [buttonTextFontSize, buttonTextColor, buttonTextDisplay]);

  return (
    <div
      className="styleoutline-sizem-brand-"
      style={styleOutlineSizeMBrandStyle}
    >
      {iconLeft && (
        <img
          className="icon-jam-icons-outline-l13"
          alt=""
          src={iconJamIconsOutlineLogos}
        />
      )}
      {text && (
        <div className="text-container1" style={textContainerStyle}>
          <div className="button-text1" style={buttonTextStyle}>
            {text}
          </div>
        </div>
      )}
      {iconRight && (
        <img
          className="icon-jam-icons-outline-l14"
          alt=""
          src={iconJamIconsOutlineLogos1}
        />
      )}
    </div>
  );
};

export default StyleOutlineSizeMBrand;
