import { useMemo } from "react";
import LayoutLogoTextThumbN from "./LayoutLogoTextThumbN";
import "./TypeTestimonialsLayout1M.css";
const TypeTestimonialsLayout1M = ({
  iconJamIconsOutlineLogos,
  group46,
  iconJamIconsOutlineLogos1,
  typeTestimonialsLayout1MPosition,
  typeTestimonialsLayout1MZIndex,
}) => {
  const typeTestimonialsLayout1MStyle = useMemo(() => {
    return {
      position: typeTestimonialsLayout1MPosition,
      zIndex: typeTestimonialsLayout1MZIndex,
    };
  }, [typeTestimonialsLayout1MPosition, typeTestimonialsLayout1MZIndex]);

  return (
    <div
      className="typetestimonials-layout1-m"
      style={typeTestimonialsLayout1MStyle}
    >
      <div className="icon-jam-icons-outline-l-parent">
        <img
          className="icon-jam-icons-outline-l7"
          alt=""
          src={iconJamIconsOutlineLogos}
        />
        <LayoutLogoTextThumbN
          vector="/vector311.svg"
          zoomerr="Zoomerr"
          paragraph="Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."
          layoutLogoTextThumbNPosition="unset"
          layoutLogoTextThumbNWidth="unset"
          layoutLogoTextThumbNFlex="1"
          vectorIconWidth="32px"
        />
        <LayoutLogoTextThumbN
          vector="/group-462.svg"
          zoomerr="ArtVenue"
          paragraph="Nisl vitae viverra dignissim nibh. Nibh imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque."
          layoutLogoTextThumbNPosition="unset"
          layoutLogoTextThumbNWidth="unset"
          layoutLogoTextThumbNFlex="1"
          vectorIconWidth="55.81px"
        />
        <img
          className="icon-jam-icons-outline-l7"
          alt=""
          src={iconJamIconsOutlineLogos1}
        />
      </div>
    </div>
  );
};

export default TypeTestimonialsLayout1M;
