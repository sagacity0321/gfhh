import CardContainer from "./CardContainer";
import "./FormContainer3.css";
const FormContainer3 = () => {
  return (
    <div className="row5">
      <div className="cell25">
        <b className="gamelank8">5</b>
      </div>
      <div className="cell26">
        <img className="gameimg-icon4" alt="" src="/gameimg4@2x.png" />
      </div>
      <CardContainer propHeight="unset" propAlignSelf="stretch" />
      <div className="cell27">
        <div className="gamelank8">4 Aug. 2023</div>
      </div>
      <div className="cell28">
        <img className="thumbup-icon2" alt="" src="/thumbup2.svg" />
      </div>
      <div className="cell29" />
      <div className="cell30">
        <b className="price15">66,000</b>
      </div>
    </div>
  );
};

export default FormContainer3;
