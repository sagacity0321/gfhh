import { useMemo } from "react";
import "./NameHeaderLogo.css";
const NameHeaderLogo = ({ rectangle14Stroke, nameHeaderLogoPosition }) => {
  const nameHeaderLogoStyle = useMemo(() => {
    return {
      position: nameHeaderLogoPosition,
    };
  }, [nameHeaderLogoPosition]);

  return (
    <div className="nameheader-logo" style={nameHeaderLogoStyle}>
      <div className="icon-container2">
        <img className="rectangle-14-stroke1" alt="" src={rectangle14Stroke} />
      </div>
      <div className="text17">
        <b className="webbyframes1">WebbyFrames</b>
        <div className="for-figma1">for Figma</div>
      </div>
    </div>
  );
};

export default NameHeaderLogo;
