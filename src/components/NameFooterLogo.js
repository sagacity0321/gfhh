import { useMemo } from "react";
import "./NameFooterLogo.css";
const NameFooterLogo = ({
  rectangle14Stroke,
  figmaBlackIcon,
  nameFooterLogoPosition,
}) => {
  const nameFooterLogoStyle = useMemo(() => {
    return {
      position: nameFooterLogoPosition,
    };
  }, [nameFooterLogoPosition]);

  return (
    <div className="namefooter-logo" style={nameFooterLogoStyle}>
      <div className="icon-container1">
        <img className="rectangle-14-stroke" alt="" src={rectangle14Stroke} />
      </div>
      <img className="figma-black-icon" alt="" src={figmaBlackIcon} />
      <div className="text14">
        <b className="webbyframes">WebbyFrames</b>
        <div className="for-figma">for Figma</div>
      </div>
    </div>
  );
};

export default NameFooterLogo;
