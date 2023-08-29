import "./ContainerCardFormFilter.css";
const ContainerCardFormFilter = ({
  itemCount,
  imageDimensions,
  carImageDimensions,
}) => {
  return (
    <div className="row2">
      <div className="cell7">
        <b className="gamelank2">{itemCount}</b>
      </div>
      <div className="cell8">
        <img className="gameimg-icon1" alt="" src={imageDimensions} />
      </div>
      <div className="cell9">
        <b className="gamelank2">Baldur’s Gate 3</b>
        <div className="logos3">
          <div className="win3">
            <div className="win-child9" />
            <div className="win-child10" />
            <div className="win-child11" />
            <div className="win-child12" />
          </div>
          <div className="apple3" />
        </div>
      </div>
      <div className="cell10">
        <div className="gamelank2">4 Aug. 2023</div>
      </div>
      <div className="cell11">
        <img className="thumbup-icon1" alt="" src={carImageDimensions} />
      </div>
      <div className="cell12">
        <div className="discount-container">
          <b className="discount1">-0%</b>
        </div>
      </div>
      <div className="cell13">
        <div className="special-price3">
          <div className="price6">
            <b className="price7">720,000</b>
            <b className="price8">720,000</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCardFormFilter;
