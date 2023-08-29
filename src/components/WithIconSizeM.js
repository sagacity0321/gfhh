import { useMemo } from "react";
import "./WithIconSizeM.css";
const WithIconSizeM = ({
  iconJamIconsOutlineLogos,
  text = "Item Name",
  icon = true,
  withIconSizeMPosition,
}) => {
  const withIconSizeMStyle = useMemo(() => {
    return {
      position: withIconSizeMPosition,
    };
  }, [withIconSizeMPosition]);

  return (
    <div className="withicon-sizem" style={withIconSizeMStyle}>
      {icon && (
        <img
          className="icon-jam-icons-outline-l17"
          alt=""
          src={iconJamIconsOutlineLogos}
        />
      )}
      <div className="text">{text}</div>
    </div>
  );
};

export default WithIconSizeM;
