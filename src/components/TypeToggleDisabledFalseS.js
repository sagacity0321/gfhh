import { useMemo } from "react";
import "./TypeToggleDisabledFalseS.css";
const TypeToggleDisabledFalseS = ({
  typeToggleDisabledFalseSPosition,
  typeToggleDisabledFalseSZIndex,
  frameDivAlignItems,
}) => {
  const typeToggleDisabledFalseSStyle = useMemo(() => {
    return {
      position: typeToggleDisabledFalseSPosition,
      zIndex: typeToggleDisabledFalseSZIndex,
    };
  }, [typeToggleDisabledFalseSPosition, typeToggleDisabledFalseSZIndex]);

  const frameDiv2Style = useMemo(() => {
    return {
      alignItems: frameDivAlignItems,
    };
  }, [frameDivAlignItems]);

  return (
    <div
      className="typetoggle-disabledfalse-s"
      style={typeToggleDisabledFalseSStyle}
    >
      <div className="typetoggle-disabledfalse-s-inner" style={frameDiv2Style}>
        <div className="frame-child" />
      </div>
    </div>
  );
};

export default TypeToggleDisabledFalseS;
