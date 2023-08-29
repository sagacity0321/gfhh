import CardContainer from "./CardContainer";
import "./ContainerCard1.css";
const ContainerCard1 = () => {
  return (
    <div className="row4">
      <div className="cell19">
        <b className="gamelank6">4</b>
      </div>
      <div className="cell20">
        <img className="gameimg-icon3" alt="" src="/gameimg3@2x.png" />
      </div>
      <CardContainer propHeight="unset" propAlignSelf="stretch" />
      <div className="cell21">
        <div className="gamelank6">4 Aug. 2023</div>
      </div>
      <div className="cell22" />
      <div className="cell23">
        <div className="frame-div">
          <b className="discount3">-0%</b>
        </div>
      </div>
      <div className="cell24">
        <div className="special-price5">
          <div className="price12">
            <b className="price13">720,000</b>
            <b className="price14">720,000</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCard1;
