import { useMemo } from "react";
import VerticalFalseMenuTypeHori from "./VerticalFalseMenuTypeHori";
import "./TypeInlineOnlineStoreFals.css";
const TypeInlineOnlineStoreFals = ({
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
  showMenuItem,
  menuItemVisible,
  menuItemVisible1,
  showIconJamIconsOutlineL,
  typeInlineOnlineStoreFalsPosition,
  typeInlineOnlineStoreFalsJustifyContent,
  typeInlineOnlineStoreFalsFlex,
  menuItemColor,
  menuItemColor1,
  menuItemColor2,
  menuItemColor3,
  menuItemColor4,
  menuItemColor5,
}) => {
  const typeInlineOnlineStoreFalsStyle = useMemo(() => {
    return {
      position: typeInlineOnlineStoreFalsPosition,
      justifyContent: typeInlineOnlineStoreFalsJustifyContent,
      flex: typeInlineOnlineStoreFalsFlex,
    };
  }, [
    typeInlineOnlineStoreFalsPosition,
    typeInlineOnlineStoreFalsJustifyContent,
    typeInlineOnlineStoreFalsFlex,
  ]);

  const menuItemStyle = useMemo(() => {
    return {
      color: menuItemColor,
    };
  }, [menuItemColor]);

  const menuItemStyle1 = useMemo(() => {
    return {
      color: menuItemColor1,
    };
  }, [menuItemColor1]);

  const menuItemStyle2 = useMemo(() => {
    return {
      color: menuItemColor2,
    };
  }, [menuItemColor2]);

  const menuItemStyle3 = useMemo(() => {
    return {
      color: menuItemColor3,
    };
  }, [menuItemColor3]);

  const menuItemStyle4 = useMemo(() => {
    return {
      color: menuItemColor4,
    };
  }, [menuItemColor4]);

  const menuItemStyle5 = useMemo(() => {
    return {
      color: menuItemColor5,
    };
  }, [menuItemColor5]);

  return (
    <div
      className="typeinline-online-storefals"
      style={typeInlineOnlineStoreFalsStyle}
    >
      <VerticalFalseMenuTypeHori
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--home.svg"
        text="Eleven"
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--chevrondown10.svg"
        text
        iconLeft={false}
        iconRight={false}
        badge={false}
        verticalFalseMenuTypeHoriPosition="unset"
        verticalFalseMenuTypeHoriPadding="var(--padding-xs) var(--padding-5xs)"
        menuItemColor="#21272a"
        menuItemLineHeight="100%"
        menuItemFontWeight="500"
      />
      <VerticalFalseMenuTypeHori
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--home.svg"
        text="Twelve"
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--chevrondown10.svg"
        text
        iconLeft={false}
        iconRight={false}
        badge={false}
        verticalFalseMenuTypeHoriPosition="unset"
        verticalFalseMenuTypeHoriPadding="var(--padding-xs) var(--padding-5xs)"
        menuItemColor="#21272a"
        menuItemLineHeight="100%"
        menuItemFontWeight="500"
      />
      <VerticalFalseMenuTypeHori
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--home.svg"
        text="Thirteen"
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--chevrondown10.svg"
        text
        iconLeft={false}
        iconRight={false}
        badge={false}
        verticalFalseMenuTypeHoriPosition="unset"
        verticalFalseMenuTypeHoriPadding="var(--padding-xs) var(--padding-5xs)"
        menuItemColor="#21272a"
        menuItemLineHeight="100%"
        menuItemFontWeight="500"
      />
      <VerticalFalseMenuTypeHori
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--home.svg"
        text="Fourteen"
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--chevrondown10.svg"
        text
        iconLeft={false}
        iconRight={false}
        badge={false}
        verticalFalseMenuTypeHoriPosition="unset"
        verticalFalseMenuTypeHoriPadding="var(--padding-xs) var(--padding-5xs)"
        menuItemColor="#21272a"
        menuItemLineHeight="100%"
        menuItemFontWeight="500"
      />
      <VerticalFalseMenuTypeHori
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--home.svg"
        text="Fifteen"
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--chevrondown10.svg"
        text
        iconLeft={false}
        iconRight={false}
        badge={false}
        verticalFalseMenuTypeHoriPosition="unset"
        verticalFalseMenuTypeHoriPadding="var(--padding-xs) var(--padding-5xs)"
        menuItemColor="#21272a"
        menuItemLineHeight="100%"
        menuItemFontWeight="500"
      />
      <VerticalFalseMenuTypeHori
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--home.svg"
        text="Sixteen"
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--chevrondown10.svg"
        text
        iconLeft={false}
        iconRight
        badge={false}
        verticalFalseMenuTypeHoriPosition="unset"
        verticalFalseMenuTypeHoriPadding="var(--padding-xs) var(--padding-5xs)"
        menuItemColor="#21272a"
        menuItemLineHeight="100%"
        menuItemFontWeight="500"
      />
    </div>
  );
};

export default TypeInlineOnlineStoreFals;
