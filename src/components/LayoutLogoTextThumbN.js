import { useMemo } from "react";
import NameWaves from "./NameWaves";
import SizeM from "./SizeM";
import "./LayoutLogoTextThumbN.css";
const LayoutLogoTextThumbN = ({
  vector,
  zoomerr,
  paragraph,
  layoutLogoTextThumbNPosition,
  layoutLogoTextThumbNWidth,
  layoutLogoTextThumbNFlex,
  vectorIconWidth,
}) => {
  const layoutLogoTextThumbNStyle = useMemo(() => {
    return {
      position: layoutLogoTextThumbNPosition,
      width: layoutLogoTextThumbNWidth,
      flex: layoutLogoTextThumbNFlex,
    };
  }, [
    layoutLogoTextThumbNPosition,
    layoutLogoTextThumbNWidth,
    layoutLogoTextThumbNFlex,
  ]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: vectorIconWidth,
    };
  }, [vectorIconWidth]);

  return (
    <div className="layoutlogo-text-thumb-n" style={layoutLogoTextThumbNStyle}>
      <NameWaves
        vector="/vector3.svg"
        nameWavesPosition="unset"
        nameWavesHeight="64px"
        nameWavesJustifyContent="flex-start"
        nameWavesFlex="unset"
        vectorIconWidth="32px"
        wAVESMARATHONFontSize="24px"
        wAVESMARATHONLineHeight="110%"
        wAVESMARATHONFontFamily="Roboto"
        wAVESMARATHONFontWeight="bold"
      />
      <div className="paragraph1">{paragraph}</div>
      <div className="author">
        <SizeM
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--user.svg"
          sizeMPosition="unset"
        />
        <div className="details">
          <b className="category">Author Name</b>
          <div className="category1">Role</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutLogoTextThumbN;
