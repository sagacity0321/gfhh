import { useMemo } from "react";
import "./PlaceholderPicture.css";
const PlaceholderPicture = ({
  placeholderPicturePlaceho,
  placeholderPicturePosition,
  placeholderPictureWidth,
  placeholderPictureHeight,
  placeholderPictureAlignSelf,
  placeholderPictureFlex,
  placeholderPictureMaxWidth,
  placeholderPictureOverflow,
  placeholderPictureMaxHeight,
  placeholderPictureFlexShrink,
}) => {
  const placeholderPictureStyle = useMemo(() => {
    return {
      position: placeholderPicturePosition,
      width: placeholderPictureWidth,
      height: placeholderPictureHeight,
      alignSelf: placeholderPictureAlignSelf,
      flex: placeholderPictureFlex,
      maxWidth: placeholderPictureMaxWidth,
      overflow: placeholderPictureOverflow,
      maxHeight: placeholderPictureMaxHeight,
      flexShrink: placeholderPictureFlexShrink,
    };
  }, [
    placeholderPicturePosition,
    placeholderPictureWidth,
    placeholderPictureHeight,
    placeholderPictureAlignSelf,
    placeholderPictureFlex,
    placeholderPictureMaxWidth,
    placeholderPictureOverflow,
    placeholderPictureMaxHeight,
    placeholderPictureFlexShrink,
  ]);

  return (
    <img
      className="placeholder-picture"
      alt=""
      src={placeholderPicturePlaceho}
      style={placeholderPictureStyle}
    />
  );
};

export default PlaceholderPicture;
