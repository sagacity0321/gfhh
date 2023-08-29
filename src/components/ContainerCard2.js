import CardContainer from "./CardContainer";
import "./ContainerCard2.css";
const ContainerCard2 = () => {
  return (
    <div className="row9">
      <div className="cell48">
        <b className="gamelank16">9</b>
      </div>
      <div className="cell49">
        <img className="gameimg-icon8" alt="" src="/gameimg8@2x.png" />
      </div>
      <CardContainer propHeight="88.09px" propAlignSelf="unset" />
      <div className="cell50">
        <div className="gamelank16">4 Aug. 2023</div>
      </div>
      <div className="cell51">
        <div className="thumbup">
          <img className="thumbup-child" alt="" src="/vector-402.svg" />
          <img
            className="thumb-updefault-icon"
            alt=""
            src="/thumb-updefault.svg"
          />
        </div>
      </div>
      <div className="cell52" />
      <div className="cell53">
        <b className="price18">66,000</b>
      </div>
    </div>
  );
};

export default ContainerCard2;
