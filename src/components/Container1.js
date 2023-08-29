import CardContainer from "./CardContainer";
import "./Container1.css";
const Container1 = () => {
  return (
    <div className="row1">
      <div className="cell1">
        <b className="gamelank">1</b>
      </div>
      <div className="cell2">
        <img className="gameimg-icon" alt="" src="/gameimg@2x.png" />
      </div>
      <CardContainer />
      <div className="cell3">
        <div className="gamelank">4 Aug. 2023</div>
      </div>
      <div className="cell4">
        <img className="thumbup-icon" alt="" src="/thumbup.svg" />
      </div>
      <div className="cell5" />
      <div className="cell6">
        <div className="special-price2">
          <b className="price5">66,000</b>
        </div>
      </div>
    </div>
  );
};

export default Container1;
