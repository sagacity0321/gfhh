import { useMemo } from "react";
import "./SizeXXSDotFalseRemoveBu.css";
const SizeXXSDotFalseRemoveBu = ({
  text,
  sizeXXSDotFalseRemoveBuPosition,
  sizeXXSDotFalseRemoveBuBackgroundColor,
  sizeXXSDotFalseRemoveBuPadding,
  sizeXXSDotFalseRemoveBuMargin,
  sizeXXSDotFalseRemoveBuTop,
  sizeXXSDotFalseRemoveBuLeft,
  sizeXXSDotFalseRemoveBuZIndex,
  textColor,
}) => {
  const sizeXXSDotFalseRemoveBuStyle = useMemo(() => {
    return {
      position: sizeXXSDotFalseRemoveBuPosition,
      backgroundColor: sizeXXSDotFalseRemoveBuBackgroundColor,
      padding: sizeXXSDotFalseRemoveBuPadding,
      margin: sizeXXSDotFalseRemoveBuMargin,
      top: sizeXXSDotFalseRemoveBuTop,
      left: sizeXXSDotFalseRemoveBuLeft,
      zIndex: sizeXXSDotFalseRemoveBuZIndex,
    };
  }, [
    sizeXXSDotFalseRemoveBuPosition,
    sizeXXSDotFalseRemoveBuBackgroundColor,
    sizeXXSDotFalseRemoveBuPadding,
    sizeXXSDotFalseRemoveBuMargin,
    sizeXXSDotFalseRemoveBuTop,
    sizeXXSDotFalseRemoveBuLeft,
    sizeXXSDotFalseRemoveBuZIndex,
  ]);

  const text1Style = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div
      className="sizexxs-dotfalse-remove-bu"
      style={sizeXXSDotFalseRemoveBuStyle}
    >
      <div className="text16" style={text1Style}>
        {text}
      </div>
    </div>
  );
};

export default SizeXXSDotFalseRemoveBu;
