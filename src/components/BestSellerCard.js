import BestSellerCardContainer from "./BestSellerCardContainer";
import "./BestSellerCard.css";
const BestSellerCard = () => {
  return (
    <div className="div8">
      <div className="title2">
        <h1 className="heading5">Best Seller</h1>
        <img className="pager-icon" alt="" src="/pager.svg" />
      </div>
      <div className="game-img-container-parent">
        <BestSellerCardContainer />
        <BestSellerCardContainer propFontWeight="unset" />
        <BestSellerCardContainer propFontWeight="unset" />
      </div>
    </div>
  );
};

export default BestSellerCard;
