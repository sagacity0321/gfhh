import { useMemo } from "react";
import PlaceholderPicture from "./PlaceholderPicture";
import LayoutHorizontalSizeL from "./LayoutHorizontalSizeL";
import StyleFilledSizeMBrand from "./StyleFilledSizeMBrand";
import StyleOutlineSizeMBrand from "./StyleOutlineSizeMBrand";
import "./ContentBox.css";
const ContentBox = ({
  placeholderPicture,
  iconJamIconsOutlineLogos,
  iconJamIconsOutlineLogos1,
  iconJamIconsOutlineLogos2,
  iconJamIconsOutlineLogos3,
  iconJamIconsOutlineLogos4,
  button2 = true,
  author = true,
  text = "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  title = "Title ",
  buttons = true,
  image = true,
  iconTop = false,
  category = "Category",
  contentBoxPosition,
  contentBoxWidth,
  contentBoxFlex,
}) => {
  const contentBoxStyle = useMemo(() => {
    return {
      position: contentBoxPosition,
      width: contentBoxWidth,
      flex: contentBoxFlex,
    };
  }, [contentBoxPosition, contentBoxWidth, contentBoxFlex]);

  return (
    <div className="content-box" style={contentBoxStyle}>
      <PlaceholderPicture
        placeholderPicturePlaceho="/placeholder--picture6@2x.png"
        placeholderPicturePosition="unset"
        placeholderPictureWidth="unset"
        placeholderPictureHeight="220px"
        placeholderPictureAlignSelf="stretch"
        placeholderPictureFlex="unset"
        placeholderPictureMaxWidth="100%"
        placeholderPictureOverflow="hidden"
        placeholderPictureMaxHeight="unset"
        placeholderPictureFlexShrink="0"
      />
      {iconTop && (
        <div className="icon-container">
          <img
            className="icon-jam-icons-outline-l9"
            alt=""
            src={iconJamIconsOutlineLogos}
          />
        </div>
      )}
      <div className="content">
        <div className="title-category">
          {category && <div className="category2">{category}</div>}
          {title && <b className="title">{title}</b>}
        </div>
        {text && <div className="paragraph2">{text}</div>}
        <LayoutHorizontalSizeL
          name1="Jane Doe"
          role="Senior Designer"
          layoutHorizontalSizeLWidth="unset"
          layoutHorizontalSizeLPosition="unset"
          layoutHorizontalSizeLAlignSelf="stretch"
          layoutHorizontalSizeLPadding="var(--padding-base) 0px 0px"
          layoutHorizontalSizeLBoxSizing="border-box"
        />
      </div>
      {buttons && (
        <div className="buttons-group">
          <StyleFilledSizeMBrand
            iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus9.svg"
            text="Button Text"
            iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright9.svg"
            text
            sepRight={false}
            iconLeft={false}
            sepLeft={false}
            iconRight={false}
            styleFilledSizeMBrandPosition="unset"
            styleFilledSizeMBrandFlex="1"
          />
          <StyleOutlineSizeMBrand
            iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus12.svg"
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
            styleOutlineSizeMBrandFlex="1"
            styleOutlineSizeMBrandCursor="unset"
            textContainerBoxSizing="border-box"
            buttonTextFontSize="16px"
            buttonTextColor="#0f62fe"
            buttonTextDisplay="inline-block"
          />
        </div>
      )}
    </div>
  );
};

export default ContentBox;
