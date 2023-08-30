import { useMemo } from "react";
import NameWaves from "./NameWaves";
import "./TypeLogosLayoutOnlyThis.css";
const TypeLogosLayoutOnlyThis = ({
  vector,
  group45,
  group46,
  group47,
  vector1,
  typeLogosLayoutOnlyThisPosition,
  typeLogosLayoutOnlyThisZIndex,
}) => {
  const typeLogosLayoutOnlyThisStyle = useMemo(() => {
    return {
      position: typeLogosLayoutOnlyThisPosition,
      zIndex: typeLogosLayoutOnlyThisZIndex,
    };
  }, [typeLogosLayoutOnlyThisPosition, typeLogosLayoutOnlyThisZIndex]);

  return (
    <div
      className="typelogos-layoutonly-this"
      style={typeLogosLayoutOnlyThisStyle}
    >
      <div className="row">
        <NameWaves
          vector="/vector12.svg"
          nameWavesPosition="unset"
          nameWavesHeight="unset"
          nameWavesJustifyContent="center"
          nameWavesFlex="1"
          vectorIconWidth="30.4px"
          wAVESMARATHONFontSize="24px"
          wAVESMARATHONLineHeight="110%"
          wAVESMARATHONFontFamily="Roboto"
          wAVESMARATHONFontWeight="bold"
        />
        <NameWaves
          vector="/group-451.svg"
          nameWavesPosition="unset"
          nameWavesHeight="unset"
          nameWavesJustifyContent="center"
          nameWavesFlex="1"
          vectorIconWidth="33.16px"
          wAVESMARATHONFontSize="24px"
          wAVESMARATHONLineHeight="110%"
          wAVESMARATHONFontFamily="Roboto"
          wAVESMARATHONFontWeight="bold"
        />
        <NameWaves
          vector="/vector311.svg"
          nameWavesPosition="unset"
          nameWavesHeight="unset"
          nameWavesJustifyContent="center"
          nameWavesFlex="1"
          vectorIconWidth="32px"
          wAVESMARATHONFontSize="24px"
          wAVESMARATHONLineHeight="110%"
          wAVESMARATHONFontFamily="Roboto"
          wAVESMARATHONFontWeight="bold"
        />
        <NameWaves
          vector="/group-461.svg"
          nameWavesPosition="unset"
          nameWavesHeight="unset"
          nameWavesJustifyContent="center"
          nameWavesFlex="1"
          vectorIconWidth="55.81px"
          wAVESMARATHONFontSize="24px"
          wAVESMARATHONLineHeight="110%"
          wAVESMARATHONFontFamily="Roboto"
          wAVESMARATHONFontWeight="bold"
        />
        <NameWaves
          vector="/group-471.svg"
          nameWavesPosition="unset"
          nameWavesHeight="unset"
          nameWavesJustifyContent="center"
          nameWavesFlex="1"
          vectorIconWidth="23.75px"
          wAVESMARATHONFontSize="24px"
          wAVESMARATHONLineHeight="110%"
          wAVESMARATHONFontFamily="Roboto"
          wAVESMARATHONFontWeight="bold"
        />
        <NameWaves
          vector="/vector13.svg"
          nameWavesPosition="unset"
          nameWavesHeight="unset"
          nameWavesJustifyContent="center"
          nameWavesFlex="1"
          vectorIconWidth="21.03px"
          wAVESMARATHONFontSize="18px"
          wAVESMARATHONLineHeight="unset"
          wAVESMARATHONFontFamily="unset"
          wAVESMARATHONFontWeight="unset"
        />
      </div>
    </div>
  );
};

export default TypeLogosLayoutOnlyThis;
