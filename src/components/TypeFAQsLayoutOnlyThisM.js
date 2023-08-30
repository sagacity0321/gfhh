import { useMemo } from "react";
import AlignmentCenter from "./AlignmentCenter";
import OpenFalse from "./OpenFalse";
import "./TypeFAQsLayoutOnlyThisM.css";
const TypeFAQsLayoutOnlyThisM = ({
  caption,
  iconJamIconsOutlineLogos,
  iconJamIconsOutlineLogos1,
  iconJamIconsOutlineLogos2,
  iconJamIconsOutlineLogos3,
  iconJamIconsOutlineLogos4,
  typeFAQsLayoutOnlyThisMPosition,
  typeFAQsLayoutOnlyThisMWidth,
  typeFAQsLayoutOnlyThisMZIndex,
}) => {
  const typeFAQsLayoutOnlyThisMStyle = useMemo(() => {
    return {
      position: typeFAQsLayoutOnlyThisMPosition,
      width: typeFAQsLayoutOnlyThisMWidth,
      zIndex: typeFAQsLayoutOnlyThisMZIndex,
    };
  }, [
    typeFAQsLayoutOnlyThisMPosition,
    typeFAQsLayoutOnlyThisMWidth,
    typeFAQsLayoutOnlyThisMZIndex,
  ]);

  return (
    <div
      className="typefaqs-layoutonly-this-m"
      style={typeFAQsLayoutOnlyThisMStyle}
    >
      <AlignmentCenter
        caption="Caption"
        headline1="Purus sagittis fringilla arcu neque."
        caption
        headline1={false}
        headline2
        showLoremIpsumDolor={false}
        alignmentCenterPosition="unset"
        alignmentCenterWidth="1280px"
        alignmentCenterAlignSelf="unset"
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
        loremIpsumDolorMarginBlockStart="unset"
        loremIpsumDolorMarginBlockEnd="unset"
        loremIpsumDolorAlignSelf="stretch"
        loremIpsumDolorPosition="relative"
        loremIpsumDolorFontSize="18px"
        loremIpsumDolorLineHeight="140%"
        loremIpsumDolorFontFamily="Roboto"
        loremIpsumDolorColor="#21272a"
        loremIpsumDolorTextAlign="center"
      />
      <div className="images1">
        <OpenFalse
          title="Who should use the app?"
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus22.svg"
          text="Answer"
          openFalseWidth="unset"
          openFalsePosition="unset"
          openFalseAlignSelf="stretch"
        />
        <OpenFalse
          title="What is included with my subscription?"
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus22.svg"
          text="Answer"
          openFalseWidth="unset"
          openFalsePosition="unset"
          openFalseAlignSelf="stretch"
        />
        <OpenFalse
          title="How do I get paid?"
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus22.svg"
          text="Answer"
          openFalseWidth="unset"
          openFalsePosition="unset"
          openFalseAlignSelf="stretch"
        />
        <OpenFalse
          title="Is my personal information safe?"
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus22.svg"
          text="Answer"
          openFalseWidth="unset"
          openFalsePosition="unset"
          openFalseAlignSelf="stretch"
        />
        <OpenFalse
          title="How can we get in touch?"
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus22.svg"
          text="Answer"
          openFalseWidth="unset"
          openFalsePosition="unset"
          openFalseAlignSelf="stretch"
        />
      </div>
    </div>
  );
};

export default TypeFAQsLayoutOnlyThisM;
