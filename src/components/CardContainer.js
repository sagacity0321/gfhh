import { useMemo } from "react";
import "./CardContainer.css";
const CardContainer = ({ propHeight, propAlignSelf }) => {
  const cellStyle = useMemo(() => {
    return {
      height: propHeight,
      alignSelf: propAlignSelf,
    };
  }, [propHeight, propAlignSelf]);

  return (
    <div className="cell" style={cellStyle}>
      <b className="gamename1">Baldur’s Gate 3</b>
      <div className="logos2">
        <div className="win2">
          <div className="win-child5" />
          <div className="win-child6" />
          <div className="win-child7" />
          <div className="win-child8" />
        </div>
        <div className="apple2" />
      </div>
    </div>
  );
};

export default CardContainer;
