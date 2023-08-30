import { useMemo } from "react";
import "./AlignmentCenter.css";
const AlignmentCenter = ({
  bibendumAmetAtMolestieMat,
  caption = "Caption",
  text = "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.",
  headline1 = "Purus sagittis fringilla arcu neque.",
  headline2 = true,
  showLoremIpsumDolor,
  showBibendumAmetAt,
  alignmentCenterPosition,
  alignmentCenterWidth,
  alignmentCenterAlignSelf,
  captionTextAlign,
  mainHeadlineTextAlign,
  secondaryHeadlineTextAlign,
  secondaryHeadlineAlignSelf,
  secondaryHeadlinePosition,
  secondaryHeadlineFontSize,
  secondaryHeadlineLineHeight,
  secondaryHeadlineFontFamily,
  secondaryHeadlineColor,
  secondaryHeadlineMarginBlockStart,
  secondaryHeadlineMarginBlockEnd,
  secondaryHeadlineFontWeight,
  loremIpsumDolorMarginBlockStart,
  loremIpsumDolorMarginBlockEnd,
  loremIpsumDolorAlignSelf,
  loremIpsumDolorPosition,
  loremIpsumDolorFontSize,
  loremIpsumDolorLineHeight,
  loremIpsumDolorFontFamily,
  loremIpsumDolorColor,
  loremIpsumDolorTextAlign,
  bibendumAmetAtMargin,
  bibendumAmetAtAlignSelf,
  bibendumAmetAtPosition,
  bibendumAmetAtFontSize,
  bibendumAmetAtLineHeight,
  bibendumAmetAtFontFamily,
  bibendumAmetAtColor,
  bibendumAmetAtTextAlign,
  bibendumAmetAtFontWeight,
  paragraphTextAlign,
  paragraphAlignSelf,
  paragraphPosition,
  paragraphFontSize,
  paragraphLineHeight,
  paragraphFontFamily,
  paragraphColor,
  paragraphMarginBlockStart,
  paragraphMarginBlockEnd,
}) => {
  const alignmentCenterStyle = useMemo(() => {
    return {
      position: alignmentCenterPosition,
      width: alignmentCenterWidth,
      alignSelf: alignmentCenterAlignSelf,
    };
  }, [alignmentCenterPosition, alignmentCenterWidth, alignmentCenterAlignSelf]);

  const captionStyle = useMemo(() => {
    return {
      textAlign: captionTextAlign,
    };
  }, [captionTextAlign]);

  const mainHeadlineStyle = useMemo(() => {
    return {
      textAlign: mainHeadlineTextAlign,
    };
  }, [mainHeadlineTextAlign]);

  const secondaryHeadlineStyle = useMemo(() => {
    return {
      textAlign: secondaryHeadlineTextAlign,
      alignSelf: secondaryHeadlineAlignSelf,
      position: secondaryHeadlinePosition,
      fontSize: secondaryHeadlineFontSize,
      lineHeight: secondaryHeadlineLineHeight,
      fontFamily: secondaryHeadlineFontFamily,
      color: secondaryHeadlineColor,
      marginBlockStart: secondaryHeadlineMarginBlockStart,
      marginBlockEnd: secondaryHeadlineMarginBlockEnd,
      fontWeight: secondaryHeadlineFontWeight,
    };
  }, [
    secondaryHeadlineTextAlign,
    secondaryHeadlineAlignSelf,
    secondaryHeadlinePosition,
    secondaryHeadlineFontSize,
    secondaryHeadlineLineHeight,
    secondaryHeadlineFontFamily,
    secondaryHeadlineColor,
    secondaryHeadlineMarginBlockStart,
    secondaryHeadlineMarginBlockEnd,
    secondaryHeadlineFontWeight,
  ]);

  const loremIpsumDolorStyle = useMemo(() => {
    return {
      marginBlockStart: loremIpsumDolorMarginBlockStart,
      marginBlockEnd: loremIpsumDolorMarginBlockEnd,
      alignSelf: loremIpsumDolorAlignSelf,
      position: loremIpsumDolorPosition,
      fontSize: loremIpsumDolorFontSize,
      lineHeight: loremIpsumDolorLineHeight,
      fontFamily: loremIpsumDolorFontFamily,
      color: loremIpsumDolorColor,
      textAlign: loremIpsumDolorTextAlign,
    };
  }, [
    loremIpsumDolorMarginBlockStart,
    loremIpsumDolorMarginBlockEnd,
    loremIpsumDolorAlignSelf,
    loremIpsumDolorPosition,
    loremIpsumDolorFontSize,
    loremIpsumDolorLineHeight,
    loremIpsumDolorFontFamily,
    loremIpsumDolorColor,
    loremIpsumDolorTextAlign,
  ]);

  const bibendumAmetAtStyle = useMemo(() => {
    return {
      margin: bibendumAmetAtMargin,
      alignSelf: bibendumAmetAtAlignSelf,
      position: bibendumAmetAtPosition,
      fontSize: bibendumAmetAtFontSize,
      lineHeight: bibendumAmetAtLineHeight,
      fontFamily: bibendumAmetAtFontFamily,
      color: bibendumAmetAtColor,
      textAlign: bibendumAmetAtTextAlign,
      fontWeight: bibendumAmetAtFontWeight,
    };
  }, [
    bibendumAmetAtMargin,
    bibendumAmetAtAlignSelf,
    bibendumAmetAtPosition,
    bibendumAmetAtFontSize,
    bibendumAmetAtLineHeight,
    bibendumAmetAtFontFamily,
    bibendumAmetAtColor,
    bibendumAmetAtTextAlign,
    bibendumAmetAtFontWeight,
  ]);

  const paragraphStyle = useMemo(() => {
    return {
      textAlign: paragraphTextAlign,
      alignSelf: paragraphAlignSelf,
      position: paragraphPosition,
      fontSize: paragraphFontSize,
      lineHeight: paragraphLineHeight,
      fontFamily: paragraphFontFamily,
      color: paragraphColor,
      marginBlockStart: paragraphMarginBlockStart,
      marginBlockEnd: paragraphMarginBlockEnd,
    };
  }, [
    paragraphTextAlign,
    paragraphAlignSelf,
    paragraphPosition,
    paragraphFontSize,
    paragraphLineHeight,
    paragraphFontFamily,
    paragraphColor,
    paragraphMarginBlockStart,
    paragraphMarginBlockEnd,
  ]);

  return (
    <div className="alignmentcenter" style={alignmentCenterStyle}>
      <div className="top">
        {caption && (
          <b className="caption" style={captionStyle}>
            {caption}
          </b>
        )}
        {headline1 && (
          <b className="main-headline" style={mainHeadlineStyle}>
            {headline1}
          </b>
        )}
        {headline2 && (
          <b className="secondary-headline" style={secondaryHeadlineStyle}>
            {showLoremIpsumDolor && (
              <p className="lorem-ipsum-dolor" style={loremIpsumDolorStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            )}
            {showBibendumAmetAt && (
              <p className="bibendum-amet-at" style={bibendumAmetAtStyle}>
                {bibendumAmetAtMolestieMat}
              </p>
            )}
          </b>
        )}
      </div>
      {text && (
        <div className="paragraph" style={paragraphStyle}>
          {text}
        </div>
      )}
    </div>
  );
};

export default AlignmentCenter;
