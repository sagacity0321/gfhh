import { useMemo } from "react";
import "./StateDefaultTextareaFalse.css";
const StateDefaultTextareaFalse = ({
  iconJamIconsOutlineLogos,
  iconJamIconsOutlineLogos1,
  iconRight = true,
  text = "Placeholder",
  iconLeft = true,
  stateDefaultTextareaFalseWidth,
  stateDefaultTextareaFalsePosition,
  textFlex,
}) => {
  const stateDefaultTextareaFalseStyle = useMemo(() => {
    return {
      width: stateDefaultTextareaFalseWidth,
      position: stateDefaultTextareaFalsePosition,
    };
  }, [stateDefaultTextareaFalseWidth, stateDefaultTextareaFalsePosition]);

  const textStyle = useMemo(() => {
    return {
      flex: textFlex,
    };
  }, [textFlex]);

  return (
    <div
      className="statedefault-textareafalse"
      style={stateDefaultTextareaFalseStyle}
    >
      {iconLeft && (
        <img
          className="icon-jam-icons-outline-l50"
          alt=""
          src={iconJamIconsOutlineLogos}
        />
      )}
      {text && (
        <div className="text15" style={textStyle}>
          {text}
        </div>
      )}
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

export default StateDefaultTextareaFalse;
