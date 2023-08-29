import { useMemo } from "react";
import NameHeaderLogo from "./NameHeaderLogo";
import TypeInlineOnlineStoreFals from "./TypeInlineOnlineStoreFals";
import StyleOutlineSizeMBrand from "./StyleOutlineSizeMBrand";
import StyleFilledSizeMBrand from "./StyleFilledSizeMBrand";
import "./DesktopHorizontalLogoLe.css";
const DesktopHorizontalLogoLe = ({
  iconJamIconsOutlineLogos,
  iconJamIconsOutlineLogos1,
  iconJamIconsOutlineLogos2,
  iconJamIconsOutlineLogos3,
  iconJamIconsOutlineLogos4,
  iconJamIconsOutlineLogos5,
  iconJamIconsOutlineLogos6,
  iconJamIconsOutlineLogos7,
  iconJamIconsOutlineLogos8,
  iconJamIconsOutlineLogos9,
  iconJamIconsOutlineLogos10,
  iconJamIconsOutlineLogos11,
  iconJamIconsOutlineLogos12,
  buttonText,
  iconJamIconsOutlineLogos13,
  iconJamIconsOutlineLogos14,
  buttonText1,
  iconJamIconsOutlineLogos15,
  desktopHorizontalLogoLePosition,
  desktopHorizontalLogoLeMargin,
  desktopHorizontalLogoLeTop,
  desktopHorizontalLogoLeLeft,
  desktopHorizontalLogoLeZIndex,
}) => {
  const desktopHorizontalLogoLeStyle = useMemo(() => {
    return {
      position: desktopHorizontalLogoLePosition,
      margin: desktopHorizontalLogoLeMargin,
      top: desktopHorizontalLogoLeTop,
      left: desktopHorizontalLogoLeLeft,
      zIndex: desktopHorizontalLogoLeZIndex,
    };
  }, [
    desktopHorizontalLogoLePosition,
    desktopHorizontalLogoLeMargin,
    desktopHorizontalLogoLeTop,
    desktopHorizontalLogoLeLeft,
    desktopHorizontalLogoLeZIndex,
  ]);

  return (
    <div
      className="desktop-horizontal-logo-le"
      style={desktopHorizontalLogoLeStyle}
    >
      <div className="logo-container1">
        <NameHeaderLogo
          rectangle14Stroke="/rectangle-14-stroke1.svg"
          nameHeaderLogoPosition="unset"
        />
      </div>
      <TypeInlineOnlineStoreFals
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--home2.svg"
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--chevrondown12.svg"
        iconJamIconsOutlineLogos2="/icon--jamicons--outline--logos--home2.svg"
        iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--chevrondown12.svg"
        iconJamIconsOutlineLogos4="/icon--jamicons--outline--logos--home2.svg"
        iconJamIconsOutlineLogos5="/icon--jamicons--outline--logos--chevrondown12.svg"
        iconJamIconsOutlineLogos6="/icon--jamicons--outline--logos--home3.svg"
        iconJamIconsOutlineLogos7="/icon--jamicons--outline--logos--chevrondown1.svg"
        iconJamIconsOutlineLogos8="/icon--jamicons--outline--logos--home2.svg"
        iconJamIconsOutlineLogos9="/icon--jamicons--outline--logos--chevrondown12.svg"
        iconJamIconsOutlineLogos10="/icon--jamicons--outline--logos--home2.svg"
        iconJamIconsOutlineLogos11="/icon--jamicons--outline--logos--chevrondown12.svg"
        showMenuItem={false}
        menuItemVisible={false}
        menuItemVisible1
        showIconJamIconsOutlineL
        typeInlineOnlineStoreFalsPosition="unset"
        typeInlineOnlineStoreFalsJustifyContent="center"
        typeInlineOnlineStoreFalsFlex="unset"
        menuItemColor="#21272a"
        menuItemColor1="#21272a"
        menuItemColor2="#21272a"
        menuItemColor3="#21272a"
        menuItemColor4="#21272a"
        menuItemColor5="#21272a"
      />
      <div className="buttons-group3">
        <StyleOutlineSizeMBrand
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus3.svg"
          text="Button Text"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright12.svg"
          text
          iconLeft={false}
          iconRight={false}
          styleOutlineSizeMBrandPosition="unset"
          styleOutlineSizeMBrandHeight="48px"
          styleOutlineSizeMBrandPadding="var(--padding-base) var(--padding-xs)"
          styleOutlineSizeMBrandBackgroundColor="unset"
          styleOutlineSizeMBrandZIndex="unset"
          styleOutlineSizeMBrandWidth="unset"
          styleOutlineSizeMBrandFlex="unset"
          styleOutlineSizeMBrandCursor="unset"
          textContainerBoxSizing="border-box"
          buttonTextFontSize="16px"
          buttonTextColor="#0f62fe"
          buttonTextDisplay="inline-block"
        />
        <StyleFilledSizeMBrand
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus2.svg"
          text="Button Text"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright9.svg"
          text
          sepRight={false}
          iconLeft={false}
          sepLeft={false}
          iconRight={false}
          styleFilledSizeMBrandPosition="unset"
          styleFilledSizeMBrandFlex="unset"
        />
      </div>
    </div>
  );
};

export default DesktopHorizontalLogoLe;
