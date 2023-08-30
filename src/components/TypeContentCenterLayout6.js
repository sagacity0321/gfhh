import { useMemo } from "react";
import AlignmentCenter from "./AlignmentCenter";
import CardFormFilterContainer from "./CardFormFilterContainer";
import StyleOutlineSizeMBrand from "./StyleOutlineSizeMBrand";
import "./TypeContentCenterLayout6.css";
const TypeContentCenterLayout6 = ({
  iconJamIconsOutlineLogos,
  iconJamIconsOutlineLogos1,
  iconJamIconsOutlineLogos2,
  iconJamIconsOutlineLogos3,
  typeContentCenterLayout6Position,
  typeContentCenterLayout6ZIndex,
}) => {
  const typeContentCenterLayout6Style = useMemo(() => {
    return {
      position: typeContentCenterLayout6Position,
      zIndex: typeContentCenterLayout6ZIndex,
    };
  }, [typeContentCenterLayout6Position, typeContentCenterLayout6ZIndex]);

  return (
    <div
      className="typecontent-center-layout6"
      style={typeContentCenterLayout6Style}
    >
      <AlignmentCenter
        caption="Caption"
        headline1="Purus sagittis fringilla arcu neque."
        bibendumAmetAtMolestieMat="Bibendum amet at molestie mattis."
        text="Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis."
        caption
        text={false}
        headline1={false}
        headline2
        showBibendumAmetAt
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
      <CardFormFilterContainer
        imageDescription="/icon--jamicons--outline--logos--calendar11.svg"
        descriptionText="Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. "
        thumbnailId="/icon--jamicons--outline--logos--luggage3.svg"
        carDescription="Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur. "
      />
      <CardFormFilterContainer
        imageDescription="/icon--jamicons--outline--logos--activity1.svg"
        descriptionText="Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit."
        thumbnailId="/icon--jamicons--outline--logos--car3.svg"
        carDescription="Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius. "
      />
      <StyleOutlineSizeMBrand
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus10.svg"
        text="Primary Action"
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright10.svg"
        text
        iconLeft={false}
        iconRight={false}
        styleOutlineSizeMBrandPosition="unset"
        styleOutlineSizeMBrandHeight="56px"
        styleOutlineSizeMBrandPadding="0px 16px"
        styleOutlineSizeMBrandBackgroundColor="#0f62fe"
        styleOutlineSizeMBrandZIndex="unset"
        styleOutlineSizeMBrandWidth="unset"
        styleOutlineSizeMBrandFlex="unset"
        styleOutlineSizeMBrandCursor="unset"
        textContainerBoxSizing="border-box"
        buttonTextFontSize="20px"
        buttonTextColor="#fff"
        buttonTextDisplay="inline-block"
      />
    </div>
  );
};

export default TypeContentCenterLayout6;
