import SecondaryCricleButton from "../components/SecondaryCricleButton";
import "./Nav.css";
const Nav = () => {
  return (
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
          <SecondaryCricleButton />
          <div className="added">
            <div className="div">로그인</div>
            <div className="div">Language</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
