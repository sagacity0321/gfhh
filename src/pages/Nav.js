import SecondaryCricleButton from "../components/SecondaryCricleButton";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav1">
      <div className="head-contents2">
        <div className="menu2">
          <div className="logo-style-guide-top2">
            <img className="vector-icon8" alt="" src="/vector.svg" />
            <b className="recogame2">RecoGame</b>
          </div>
          <div className="sections2">
            <div className="div17">홈</div>
            <div className="div18">
              <div className="div17">장르</div>
              <img className="vector-icon9" alt="" src="/vector12.svg" />
            </div>
            <div className="div18">
              <div className="div17">인기 게임</div>
              <img className="vector-icon9" alt="" src="/vector22.svg" />
            </div>
            <div className="div18">
              <div className="div17">마이페이지</div>
              <img className="vector-icon9" alt="" src="/vector32.svg" />
            </div>
          </div>
        </div>
        <div className="additional2">
          <SecondaryCricleButton />
          <div className="added2">
            <div className="div17">로그인</div>
            <div className="div17">Language</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
