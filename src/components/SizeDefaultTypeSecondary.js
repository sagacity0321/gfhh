import { useMemo } from "react";
import "./SizeDefaultTypeSecondary.css";
const SizeDefaultTypeSecondary = ({
  sizeDefaultTypeSecondaryS,
  sizeDefaultTypeSecondaryPosition,
  sizeDefaultTypeSecondaryHeight,
  sizeDefaultTypeSecondaryTop,
  sizeDefaultTypeSecondaryLeft,
  sizeDefaultTypeSecondaryWidth,
}) => {
  const sizeDefaultTypeSecondaryStyle = useMemo(() => {
    return {
      position: sizeDefaultTypeSecondaryPosition,
      height: sizeDefaultTypeSecondaryHeight,
      top: sizeDefaultTypeSecondaryTop,
      left: sizeDefaultTypeSecondaryLeft,
      width: sizeDefaultTypeSecondaryWidth,
    };
  }, [
    sizeDefaultTypeSecondaryPosition,
    sizeDefaultTypeSecondaryHeight,
    sizeDefaultTypeSecondaryTop,
    sizeDefaultTypeSecondaryLeft,
    sizeDefaultTypeSecondaryWidth,
  ]);

  return (
    <img
      className="sizedefault-typesecondary"
      alt=""
      src={sizeDefaultTypeSecondaryS}
      style={sizeDefaultTypeSecondaryStyle}
    />
  );
};

export default SizeDefaultTypeSecondary;
