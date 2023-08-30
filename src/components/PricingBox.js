import { useMemo } from "react";
import StyleOutlineSizeMBrand from "./StyleOutlineSizeMBrand";
import WithIconSizeM from "./WithIconSizeM";
import SizeXXSDotFalseRemoveBu from "./SizeXXSDotFalseRemoveBu";
import "./PricingBox.css";
const PricingBox = ({
  planName = "Plan Name",
  price = "$25",
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
  iconJamIconsOutlineLogos13,
  button = true,
  priceDescription = "$25 USD per month, paid annually",
  badge = true,
  subtitle = "Subtitle",
  discount = "$35",
  showListItemWith,
  listItemWithVisible,
  listItemWithVisible1,
  listItemWithVisible2,
  listItemWithVisible3,
  listItemWithVisible4,
  listItemWithVisible5,
  pricingBoxAlignSelf,
  pricingBoxFlex,
  badgeLeft,
}) => {
  const pricingBoxStyle = useMemo(() => {
    return {
      alignSelf: pricingBoxAlignSelf,
      flex: pricingBoxFlex,
    };
  }, [pricingBoxAlignSelf, pricingBoxFlex]);

  const sizeXXSDotFalseRemoveBuStyle = useMemo(() => {
    return {
      left: badgeLeft,
    };
  }, [badgeLeft]);

  return (
    <div className="pricing-box" style={pricingBoxStyle}>
      <div className="top1">
        <b className="plan-name">{planName}</b>
        {subtitle && <div className="subtitle">{subtitle}</div>}
      </div>
      <div className="price">
        {discount && <b className="b">{discount}</b>}
        <b className="b1">{price}</b>
        {priceDescription && (
          <div className="usd-per-month">{priceDescription}</div>
        )}
      </div>
      <StyleOutlineSizeMBrand
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus21.svg"
        text="Get Started"
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright21.svg"
        text
        iconLeft={false}
        iconRight={false}
        styleOutlineSizeMBrandPosition="unset"
        styleOutlineSizeMBrandHeight="56px"
        styleOutlineSizeMBrandPadding="0px 16px"
        styleOutlineSizeMBrandBackgroundColor="#0f62fe"
        styleOutlineSizeMBrandZIndex="2"
        styleOutlineSizeMBrandWidth="unset"
        styleOutlineSizeMBrandFlex="unset"
        styleOutlineSizeMBrandCursor="unset"
        textContainerBoxSizing="border-box"
        buttonTextFontSize="20px"
        buttonTextColor="#fff"
        buttonTextDisplay="inline-block"
      />
      <div className="features">
        <WithIconSizeM
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--check11.svg"
          text="Feature Eleven"
          icon
          withIconSizeMPosition="unset"
        />
        <WithIconSizeM
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--check11.svg"
          text="Feature Twelve"
          icon
          withIconSizeMPosition="unset"
        />
        <WithIconSizeM
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--check11.svg"
          text="Feature Thirteen"
          icon
          withIconSizeMPosition="unset"
        />
        <WithIconSizeM
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--check11.svg"
          text="Feature Fourteen"
          icon
          withIconSizeMPosition="unset"
        />
        <WithIconSizeM
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--check11.svg"
          text="Feature Fifteen"
          icon
          withIconSizeMPosition="unset"
        />
        <WithIconSizeM
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--check11.svg"
          text="Feature Sixteen"
          icon
          withIconSizeMPosition="unset"
        />
        <WithIconSizeM
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--check11.svg"
          text="Feature Seventeen"
          icon
          withIconSizeMPosition="unset"
        />
        <WithIconSizeM
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--check12.svg"
          text="Feature Eighteen"
          icon
          withIconSizeMPosition="unset"
        />
        <WithIconSizeM
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--check12.svg"
          text="Feature Nineteen"
          icon
          withIconSizeMPosition="unset"
        />
        <WithIconSizeM
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--check12.svg"
          text="Feature Twenty"
          icon
          withIconSizeMPosition="unset"
        />
        <WithIconSizeM
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--check12.svg"
          text="Feature Thirty"
          icon
          withIconSizeMPosition="unset"
        />
        <WithIconSizeM
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--check12.svg"
          text="Feature Forty"
          icon
          withIconSizeMPosition="unset"
        />
      </div>
      <SizeXXSDotFalseRemoveBu
        text="Most Popular"
        sizeXXSDotFalseRemoveBuPosition="absolute"
        sizeXXSDotFalseRemoveBuBackgroundColor="#f2f4f8"
        sizeXXSDotFalseRemoveBuPadding="var(--padding-11xs) var(--padding-xs)"
        sizeXXSDotFalseRemoveBuMargin="0 !important"
        sizeXXSDotFalseRemoveBuTop="-12px"
        sizeXXSDotFalseRemoveBuLeft="calc(50% - 54px)"
        sizeXXSDotFalseRemoveBuZIndex="4"
        textColor="#21272a"
      />
    </div>
  );
};

export default PricingBox;
