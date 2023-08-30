import OpenFalse from "./OpenFalse";
import "./FormContainer.css";
const FormContainer = ({
  iconJamIconsOutlineLogos,
  iconJamIconsOutlineLogos1,
  iconJamIconsOutlineLogos2,
  iconJamIconsOutlineLogos3,
  iconJamIconsOutlineLogos4,
}) => {
  return (
    <div className="images3">
      <OpenFalse
        title="Who should use the app?"
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus8.svg"
        text="Answer"
        openFalseWidth="unset"
        openFalsePosition="unset"
        openFalseAlignSelf="stretch"
      />
      <OpenFalse
        title="What is included with my subscription?"
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus8.svg"
        text="Answer"
        openFalseWidth="unset"
        openFalsePosition="unset"
        openFalseAlignSelf="stretch"
      />
      <OpenFalse
        title="How do I get paid?"
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus8.svg"
        text="Answer"
        openFalseWidth="unset"
        openFalsePosition="unset"
        openFalseAlignSelf="stretch"
      />
      <OpenFalse
        title="Is my personal information safe?"
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus8.svg"
        text="Answer"
        openFalseWidth="unset"
        openFalsePosition="unset"
        openFalseAlignSelf="stretch"
      />
      <OpenFalse
        title="How can we get in touch?"
        iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus8.svg"
        text="Answer"
        openFalseWidth="unset"
        openFalsePosition="unset"
        openFalseAlignSelf="stretch"
      />
    </div>
  );
};

export default FormContainer;
