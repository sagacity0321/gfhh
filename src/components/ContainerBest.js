import BattleGroundsContainer from "./BattleGroundsContainer";
import FormContainer2 from "./FormContainer2";
import SecondaryCircleFormButton from "./SecondaryCircleFormButton";
import "./ContainerBest.css";
const ContainerBest = () => {
  return (
    <div className="div29">
      <div className="div30">
        <h1 className="heading6">신작 Best</h1>
        <BattleGroundsContainer />
        <FormContainer2 imageDimensions="/img-frame1@2x.png" />
        <FormContainer2 imageDimensions="/img-frame2@2x.png" />
        <FormContainer2 imageDimensions="/img-frame3@2x.png" />
      </div>
      <div className="div31">
        <SecondaryCircleFormButton />
      </div>
    </div>
  );
};

export default ContainerBest;
