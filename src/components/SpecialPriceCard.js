import "./SpecialPriceCard.css";
const SpecialPriceCard = ({ dimensionCode }) => {
  return (
    <div className="game-img-container-container">
      <div className="game-img-container1">
        <div className="image-placeholder-container">
          <img className="image-placeholder-icon1" alt="" src={dimensionCode} />
        </div>
        <div className="gameinfo1">
          <b className="gamename">Sea of Stars</b>
          <div className="div13">
            <div className="logos1">
              <div className="win1">
                <div className="win-child1" />
                <div className="win-child2" />
                <div className="win-child3" />
                <div className="win-child4" />
              </div>
              <div className="apple1" />
            </div>
            <div className="special-price1">
              <div className="discount-wrapper">
                <b className="gamename">-0%</b>
              </div>
              <div className="price2">
                <b className="price3">720,000</b>
                <b className="price4">720,000</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialPriceCard;
