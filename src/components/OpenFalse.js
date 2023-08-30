import { useMemo } from "react";
import "./OpenFalse.css";
const OpenFalse = ({
  title = "Question",
  iconJamIconsOutlineLogos,
  text = "Answer",
  openFalseWidth,
  openFalsePosition,
  openFalseAlignSelf,
}) => {
  const openFalseStyle = useMemo(() => {
    return {
      width: openFalseWidth,
      position: openFalsePosition,
      alignSelf: openFalseAlignSelf,
    };
  }, [openFalseWidth, openFalsePosition, openFalseAlignSelf]);

  return (
    <div className="openfalse" style={openFalseStyle}>
      <div className="toggle">
        <b className="question">{title}</b>
        <img
          className="icon-jam-icons-outline-l19"
          alt=""
          src={iconJamIconsOutlineLogos}
        />
      </div>
      <div className="text1">
        <div className="answer">{text}</div>
      </div>
    </div>
  );
};

export default OpenFalse;
