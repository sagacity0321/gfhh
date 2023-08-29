import { useMemo } from "react";
import "./SizeM.css";
const SizeM = ({ iconJamIconsOutlineLogos, sizeMPosition }) => {
  const sizeMStyle = useMemo(() => {
    return {
      position: sizeMPosition,
    };
  }, [sizeMPosition]);

  return (
    <div className="sizem" style={sizeMStyle}>
      <img
        className="icon-jam-icons-outline-l7"
        alt=""
        src={iconJamIconsOutlineLogos}
      />
    </div>
  );
};

export default SizeM;
