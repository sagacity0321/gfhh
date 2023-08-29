import CardContainer from "./CardContainer";
import "./ContainerCard.css";
const ContainerCard = () => {
  return (
    <div className="row3">
      <div className="cell14">
        <b className="gamelank4">3</b>
      </div>
      <div className="cell15">
        <img className="gameimg-icon2" alt="" src="/gameimg2@2x.png" />
      </div>
      <CardContainer propHeight="88.09px" propAlignSelf="unset" />
      <div className="cell16">
        <div className="gamelank4">4 Aug. 2023</div>
      </div>
      <img className="cell-icon" alt="" src="/cell@2x.png" />
      <div className="cell17">
        <div className="discount-frame">
          <b className="discount2">-0%</b>
        </div>
      </div>
      <div className="cell18">
        <div className="special-price4">
          <div className="price9">
            <b className="price10">720,000</b>
            <b className="price11">720,000</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
