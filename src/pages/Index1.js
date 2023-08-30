import FormContainer1 from "../components/FormContainer1";
import SpecialPriceCard1 from "../components/SpecialPriceCard1";
import Container1 from "../components/Container1";
import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import ContainerCard from "../components/ContainerCard";
import ContainerCard1 from "../components/ContainerCard1";
import FormContainer3 from "../components/FormContainer3";
import FormContainer4 from "../components/FormContainer4";
import FormContainer5 from "../components/FormContainer5";
import FormContainer6 from "../components/FormContainer6";
import ContainerCard2 from "../components/ContainerCard2";
import BestSellerCard from "../components/BestSellerCard";
import ContainerBest from "../components/ContainerBest";
import Footer from "../components/Footer";
import "./Index1.css";
const Index1 = () => {
  return (
    <div className="index1">
      <div className="nav">
        <div className="head-contents">
          <div className="menu">
            <div className="logo-style-guide-top">
              <img className="vector-icon" alt="" src="/vector.svg" />
              <b className="recogame">RecoGame</b>
            </div>
            <div className="sections">
              <div className="div">홈</div>
              <div className="div1">
                <div className="div">장르</div>
                <img className="vector-icon1" alt="" src="/vector1.svg" />
              </div>
              <div className="div1">
                <div className="div">인기 게임</div>
                <img className="vector-icon1" alt="" src="/vector2.svg" />
              </div>
              <div className="div1">
                <div className="div">마이페이지</div>
                <img className="vector-icon1" alt="" src="/vector3.svg" />
              </div>
            </div>
          </div>
          <div className="additional">
            <img
              className="secondary-cricle-button"
              alt=""
              src="/secondary-cricle-button.svg"
            />
            <div className="added">
              <div className="div">로그인</div>
              <div className="div">Language</div>
            </div>
          </div>
        </div>
      </div>
      <FormContainer1 />
      <SpecialPriceCard1 />
      <div className="div8">
        <b className="heading"> Top 10</b>
        <div className="lanks">
          <Container1 />
          <ContainerCardFormFilter
            itemCount="2"
            imageDimensions="/gameimg1@2x.png"
            carImageDimensions="/thumbup1.svg"
          />
          <ContainerCard />
          <ContainerCard1 />
          <FormContainer3 />
          <FormContainer4 />
          <FormContainer5 />
          <FormContainer6 />
          <ContainerCard2 />
          <ContainerCardFormFilter
            itemCount="10"
            imageDimensions="/gameimg9@2x.png"
            carImageDimensions="/well.svg"
          />
        </div>
      </div>
      <BestSellerCard />
      <ContainerBest />
      <Footer />
    </div>
  );
};

export default Index1;
