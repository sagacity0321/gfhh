import { useMemo } from "react";
import StateDefaultTextareaFalse from "./StateDefaultTextareaFalse";
import StyleFilledSizeMBrand from "./StyleFilledSizeMBrand";
import "./Form1FieldButton.css";
const Form1FieldButton = ({
  iconJamIconsOutlineLogos,
  iconJamIconsOutlineLogos1,
  iconJamIconsOutlineLogos2,
  form1FieldButtonPosition,
}) => {
  const form1FieldButtonStyle = useMemo(() => {
    return {
      position: form1FieldButtonPosition,
    };
  }, [form1FieldButtonPosition]);

  return (
    <div className="form-1-field-button" style={form1FieldButtonStyle}>
      <StateDefaultTextareaFalse
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--envelope.svg"
        text="Enter your email to get the latest news..."
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--chevrondown8.svg"
        iconRight={false}
        text
        iconLeft
        stateDefaultTextareaFalseWidth="unset"
        stateDefaultTextareaFalsePosition="unset"
        textFlex="unset"
      />
      <StyleFilledSizeMBrand
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus25.svg"
        text="Subscribe"
        iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright10.svg"
        text
        sepRight={false}
        iconLeft={false}
        sepLeft={false}
        iconRight={false}
        styleFilledSizeMBrandPosition="unset"
        styleFilledSizeMBrandFlex="unset"
      />
    </div>
  );
};

export default Form1FieldButton;
