import { useMemo } from "react";
import "./PlaceholderVideo.css";
const PlaceholderVideo = ({
  iconJamIconsOutlineLogos,
  placeholderVideoPosition,
  placeholderVideoBackgroundColor,
  placeholderVideoWidth,
  placeholderVideoHeight,
  placeholderVideoAlignSelf,
  placeholderVideoFlex,
  placeholderVideoBackgroundImage,
  placeholderVideoBackgroundSize,
  placeholderVideoBackgroundRepeat,
  placeholderVideoBackgroundPosition,
}) => {
  const placeholderVideoStyle = useMemo(() => {
    return {
      position: placeholderVideoPosition,
      backgroundColor: placeholderVideoBackgroundColor,
      width: placeholderVideoWidth,
      height: placeholderVideoHeight,
      alignSelf: placeholderVideoAlignSelf,
      flex: placeholderVideoFlex,
      backgroundImage: placeholderVideoBackgroundImage,
      backgroundSize: placeholderVideoBackgroundSize,
      backgroundRepeat: placeholderVideoBackgroundRepeat,
      backgroundPosition: placeholderVideoBackgroundPosition,
    };
  }, [
    placeholderVideoPosition,
    placeholderVideoBackgroundColor,
    placeholderVideoWidth,
    placeholderVideoHeight,
    placeholderVideoAlignSelf,
    placeholderVideoFlex,
    placeholderVideoBackgroundImage,
    placeholderVideoBackgroundSize,
    placeholderVideoBackgroundRepeat,
    placeholderVideoBackgroundPosition,
  ]);

  return (
    <div className="placeholder-video" style={placeholderVideoStyle}>
      <img
        className="icon-jam-icons-outline-l4"
        alt=""
        src={iconJamIconsOutlineLogos}
      />
    </div>
  );
};

export default PlaceholderVideo;
