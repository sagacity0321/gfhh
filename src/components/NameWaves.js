import { useMemo } from "react";
import "./NameWaves.css";
const NameWaves = ({
  vector,
  nameWavesPosition,
  nameWavesHeight,
  nameWavesJustifyContent,
  nameWavesFlex,
  vectorIconWidth,
  wAVESMARATHONFontSize,
  wAVESMARATHONLineHeight,
  wAVESMARATHONFontFamily,
  wAVESMARATHONFontWeight,
}) => {
  const nameWavesStyle = useMemo(() => {
    return {
      position: nameWavesPosition,
      height: nameWavesHeight,
      justifyContent: nameWavesJustifyContent,
      flex: nameWavesFlex,
    };
  }, [
    nameWavesPosition,
    nameWavesHeight,
    nameWavesJustifyContent,
    nameWavesFlex,
  ]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: vectorIconWidth,
    };
  }, [vectorIconWidth]);

  const wAVESMARATHONStyle = useMemo(() => {
    return {
      fontSize: wAVESMARATHONFontSize,
      lineHeight: wAVESMARATHONLineHeight,
      fontFamily: wAVESMARATHONFontFamily,
      fontWeight: wAVESMARATHONFontWeight,
    };
  }, [
    wAVESMARATHONFontSize,
    wAVESMARATHONLineHeight,
    wAVESMARATHONFontFamily,
    wAVESMARATHONFontWeight,
  ]);

  return (
    <div className="namewaves" style={nameWavesStyle}>
      <img
        className="vector-icon"
        alt=""
        src={vector}
        style={vectorIconStyle}
      />
      <div className="wavesmarathon" style={wAVESMARATHONStyle}>
        <b className="waves">WAVES</b>
        <span className="marathon">MARATHON</span>
      </div>
    </div>
  );
};

export default NameWaves;
