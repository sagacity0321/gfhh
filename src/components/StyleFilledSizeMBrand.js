import { useMemo } from "react";
import "./StyleFilledSizeMBrand.css";
const StyleFilledSizeMBrand = ({
  iconJamIconsOutlineLogos,
  iconJamIconsOutlineLogos1,
  text = "Button Text",
  sepRight = false,
  iconLeft = true,
  sepLeft = false,
  iconRight = false,
  styleFilledSizeMBrandPosition,
  styleFilledSizeMBrandFlex,
}) => {
  const styleFilledSizeMBrandStyle = useMemo(() => {
    return {
      position: styleFilledSizeMBrandPosition,
      flex: styleFilledSizeMBrandFlex,
    };
  }, [styleFilledSizeMBrandPosition, styleFilledSizeMBrandFlex]);

  return (
    <div
      className="stylefilled-sizem-brand-"
      style={styleFilledSizeMBrandStyle}
    >
      {iconLeft && (
        <img
          className="icon-jam-icons-outline-l9"
          alt=""
          src={iconJamIconsOutlineLogos}
        />
      )}
      {sepLeft && <div className="separator-left" />}
      {text && (
        <div className="text-container">
          <div className="button-text">{text}</div>
        </div>
      )}
      {sepRight && <div className="separator-right" />}
      {iconRight && (
        <img
          className="icon-jam-icons-outline-l10"
          alt=""
          src={iconJamIconsOutlineLogos1}
        />
      )}
    </div>
  );
};

export default StyleFilledSizeMBrand;
