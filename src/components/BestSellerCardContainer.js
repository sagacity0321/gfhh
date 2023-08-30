import { useMemo } from "react";
import "./BestSellerCardContainer.css";
const BestSellerCardContainer = ({ propFontWeight }) => {
  const priceStyle = useMemo(() => {
    return {
      fontWeight: propFontWeight,
    };
  }, [propFontWeight]);

  return (
    <div className="game-img-container2">
      <div className="image-placeholder-parent">
        <img
          className="image-placeholder-icon2"
          alt=""
          src="/image-placeholder3@2x.png"
        />
        <div className="frame-item" />
      </div>
      <div className="gameinfo2">
        <b className="gamename3">Sea of Stars</b>
        <div className="div31">
          <div className="logos4">
            <div className="win4">
              <div className="win-child13" />
              <div className="win-child14" />
              <div className="win-child15" />
              <div className="win-child16" />
            </div>
            <div className="apple4" />
          </div>
          <b className="price19" style={priceStyle}>
            720,000
          </b>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCardContainer;
