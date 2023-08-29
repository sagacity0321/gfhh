import { useMemo } from "react";
import PlaceholderVideo from "./PlaceholderVideo";
import "./ScreenDesktop.css";
const ScreenDesktop = ({
  iconJamIconsFilledCircle,
  iconJamIconsFilledCircle1,
  iconJamIconsFilledCircle2,
  iconJamIconsOutlineLogos,
  iconJamIconsOutlineLogos1,
  iconJamIconsOutlineLogos2,
  circles = true,
  arrows = true,
  screenDesktopPosition,
  screenDesktopBoxSizing,
  screenDesktopWidth,
  screenDesktopHeight,
  screenDesktopFlexShrink,
  screenDesktopAlignSelf,
  screenDesktopFlex,
  placeholderVideoBackgroundImage,
}) => {
  const screenDesktopStyle = useMemo(() => {
    return {
      position: screenDesktopPosition,
      boxSizing: screenDesktopBoxSizing,
      width: screenDesktopWidth,
      height: screenDesktopHeight,
      flexShrink: screenDesktopFlexShrink,
      alignSelf: screenDesktopAlignSelf,
      flex: screenDesktopFlex,
    };
  }, [
    screenDesktopPosition,
    screenDesktopBoxSizing,
    screenDesktopWidth,
    screenDesktopHeight,
    screenDesktopFlexShrink,
    screenDesktopAlignSelf,
    screenDesktopFlex,
  ]);

  const placeholderVideoStyle = useMemo(() => {
    return {
      backgroundImage: placeholderVideoBackgroundImage,
    };
  }, [placeholderVideoBackgroundImage]);

  return (
    <div className="screendesktop" style={screenDesktopStyle}>
      <div className="top-bar">
        {circles && (
          <div className="circles">
            <img
              className="icon-jam-icons-filled-ci"
              alt=""
              src={iconJamIconsFilledCircle}
            />
            <img
              className="icon-jam-icons-filled-ci"
              alt=""
              src={iconJamIconsFilledCircle1}
            />
            <img
              className="icon-jam-icons-filled-ci"
              alt=""
              src={iconJamIconsFilledCircle2}
            />
          </div>
        )}
        {arrows && (
          <div className="arrows">
            <img
              className="icon-jam-icons-outline-l1"
              alt=""
              src={iconJamIconsOutlineLogos}
            />
            <img
              className="icon-jam-icons-outline-l1"
              alt=""
              src={iconJamIconsOutlineLogos1}
            />
          </div>
        )}
      </div>
      <PlaceholderVideo
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--playcircle2.svg"
        placeholderVideoPosition="unset"
        placeholderVideoBackgroundColor="unset"
        placeholderVideoWidth="unset"
        placeholderVideoHeight="unset"
        placeholderVideoAlignSelf="stretch"
        placeholderVideoFlex="1"
        placeholderVideoBackgroundImage="url('/placeholder--video1@3x.png')"
        placeholderVideoBackgroundSize="cover"
        placeholderVideoBackgroundRepeat="no-repeat"
        placeholderVideoBackgroundPosition="top"
      />
    </div>
  );
};

export default ScreenDesktop;
