import AlignmentCenter from "./AlignmentCenter";
import Button from "./Button";
import StyleOutlineSizeMBrand from "./StyleOutlineSizeMBrand";
import ScreenDesktop from "./ScreenDesktop";
import "./Section.css";
const Section = () => {
  return (
    <div className="section">
      <div className="content2">
        <AlignmentCenter
          caption="Caption"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          caption={false}
          headline1
          headline2
          alignmentCenterPosition="unset"
          alignmentCenterWidth="unset"
          alignmentCenterAlignSelf="stretch"
          captionTextAlign="left"
          mainHeadlineTextAlign="left"
          secondaryHeadlineTextAlign="unset"
          secondaryHeadlineAlignSelf="unset"
          secondaryHeadlinePosition="unset"
          secondaryHeadlineFontSize="unset"
          secondaryHeadlineLineHeight="unset"
          secondaryHeadlineFontFamily="unset"
          secondaryHeadlineColor="unset"
          secondaryHeadlineMarginBlockStart="0"
          secondaryHeadlineMarginBlockEnd="5px"
          secondaryHeadlineFontWeight="unset"
          bibendumAmetAtMargin="unset"
          bibendumAmetAtAlignSelf="stretch"
          bibendumAmetAtPosition="relative"
          bibendumAmetAtFontSize="42px"
          bibendumAmetAtLineHeight="110%"
          bibendumAmetAtFontFamily="Roboto"
          bibendumAmetAtColor="#21272a"
          bibendumAmetAtTextAlign="left"
          bibendumAmetAtFontWeight="bold"
          paragraphTextAlign="unset"
          paragraphAlignSelf="unset"
          paragraphPosition="unset"
          paragraphFontSize="unset"
          paragraphLineHeight="unset"
          paragraphFontFamily="unset"
          paragraphColor="unset"
          paragraphMarginBlockStart="0"
          paragraphMarginBlockEnd="5px"
        />
        <div className="buttons-group5">
          <Button
            primaryActionText="Primary Action"
            text
            iconLeft={false}
            iconRight
          />
          <StyleOutlineSizeMBrand
            iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus1.svg"
            text="Secondary Action"
            iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright.svg"
            text
            iconLeft={false}
            iconRight={false}
            styleOutlineSizeMBrandPosition="unset"
            styleOutlineSizeMBrandHeight="56px"
            styleOutlineSizeMBrandPadding="0px 16px"
            styleOutlineSizeMBrandBackgroundColor="transparent"
            styleOutlineSizeMBrandZIndex="unset"
            styleOutlineSizeMBrandWidth="unset"
            styleOutlineSizeMBrandFlex="unset"
            styleOutlineSizeMBrandCursor="pointer"
            textContainerBoxSizing="border-box"
            buttonTextFontSize="20px"
            buttonTextColor="#0f62fe"
            buttonTextDisplay="inline-block"
          />
        </div>
      </div>
      <ScreenDesktop
        iconJamIconsFilledCircle="/icon--jamicons--filled--circlef.svg"
        iconJamIconsFilledCircle1="/icon--jamicons--filled--circlef.svg"
        iconJamIconsFilledCircle2="/icon--jamicons--filled--circlef.svg"
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--chevronleft.svg"
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--chevronright.svg"
        iconJamIconsOutlineLogos2="/icon--jamicons--outline--logos--playcircle1.svg"
        circles
        arrows
        screenDesktopPosition="unset"
        screenDesktopBoxSizing="border-box"
        screenDesktopWidth="unset"
        screenDesktopHeight="unset"
        screenDesktopFlexShrink="unset"
        screenDesktopAlignSelf="stretch"
        screenDesktopFlex="1"
        placeholderVideoBackgroundImage="url('/placeholder--video@3x.png')"
      />
    </div>
  );
};

export default Section;
