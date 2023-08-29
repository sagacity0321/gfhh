import { useMemo } from "react";
import AlignmentCenter from "./AlignmentCenter";
import "./TypeContentCenterLayout1.css";
const TypeContentCenterLayout1 = ({
  caption,
  loremIpsumDolorSitAmetCon,
  showParagraph,
  typeContentCenterLayout1Position,
  typeContentCenterLayout1BackgroundColor,
  typeContentCenterLayout1Padding,
  typeContentCenterLayout1ZIndex,
  loremIpsumDolorMarginBlockStart,
  loremIpsumDolorMarginBlockEnd,
  loremIpsumDolorAlignSelf,
  loremIpsumDolorPosition,
  loremIpsumDolorFontSize,
  loremIpsumDolorLineHeight,
  loremIpsumDolorFontFamily,
  loremIpsumDolorColor,
  loremIpsumDolorTextAlign,
  loremIpsumDolorDisplay,
}) => {
  const typeContentCenterLayout1Style = useMemo(() => {
    return {
      position: typeContentCenterLayout1Position,
      backgroundColor: typeContentCenterLayout1BackgroundColor,
      padding: typeContentCenterLayout1Padding,
      zIndex: typeContentCenterLayout1ZIndex,
    };
  }, [
    typeContentCenterLayout1Position,
    typeContentCenterLayout1BackgroundColor,
    typeContentCenterLayout1Padding,
    typeContentCenterLayout1ZIndex,
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
      display: loremIpsumDolorDisplay,
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
    loremIpsumDolorDisplay,
  ]);

  return (
    <div
      className="typecontent-center-layout1"
      style={typeContentCenterLayout1Style}
    >
      <AlignmentCenter
        caption="Caption"
        headline1="Purus sagittis fringilla arcu neque."
        bibendumAmetAtMolestieMat="Bibendum amet at molestie mattis."
        text="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
        caption
        text
        headline1={false}
        headline2
        showBibendumAmetAt
        alignmentCenterPosition="unset"
        alignmentCenterWidth="unset"
        alignmentCenterAlignSelf="stretch"
        captionTextAlign="center"
        mainHeadlineTextAlign="center"
        secondaryHeadlineTextAlign="center"
        secondaryHeadlineAlignSelf="stretch"
        secondaryHeadlinePosition="relative"
        secondaryHeadlineFontSize="42px"
        secondaryHeadlineLineHeight="110%"
        secondaryHeadlineFontFamily="Roboto"
        secondaryHeadlineColor="#21272a"
        secondaryHeadlineMarginBlockStart="unset"
        secondaryHeadlineMarginBlockEnd="unset"
        secondaryHeadlineFontWeight="unset"
        loremIpsumDolorAlignSelf="unset"
        loremIpsumDolorPosition="unset"
        loremIpsumDolorFontSize="unset"
        loremIpsumDolorLineHeight="unset"
        loremIpsumDolorFontFamily="unset"
        loremIpsumDolorColor="unset"
        loremIpsumDolorTextAlign="unset"
        bibendumAmetAtMargin="0"
        bibendumAmetAtAlignSelf="unset"
        bibendumAmetAtPosition="unset"
        bibendumAmetAtFontSize="unset"
        bibendumAmetAtLineHeight="unset"
        bibendumAmetAtFontFamily="unset"
        bibendumAmetAtColor="unset"
        bibendumAmetAtTextAlign="unset"
        bibendumAmetAtFontWeight="unset"
        paragraphTextAlign="center"
        paragraphAlignSelf="stretch"
        paragraphPosition="relative"
        paragraphFontSize="18px"
        paragraphLineHeight="140%"
        paragraphFontFamily="Roboto"
        paragraphColor="#21272a"
        paragraphMarginBlockStart="unset"
        paragraphMarginBlockEnd="unset"
      />
    </div>
  );
};

export default TypeContentCenterLayout1;
