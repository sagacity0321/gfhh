import "./HeadersV12.css";
const HeadersV12 = () => {
  return (
    <div className="headers-v12">
      <div className="head-contents1">
        <div className="menu1">
          <div className="logo-style-guide-top1">
            <img className="vector-icon4" alt="" src="/vector41.svg" />
            <b className="recogame1">RecoGame</b>
          </div>
          <div className="sections1">
            <div className="div9">홈</div>
            <div className="div10">
              <div className="div9">장르</div>
              <img className="vector-icon5" alt="" src="/vector11.svg" />
            </div>
            <div className="div10">
              <div className="div9">인기 게임</div>
              <img className="vector-icon5" alt="" src="/vector21.svg" />
            </div>
            <div className="div10">
              <div className="div9">마이페이지</div>
              <img className="vector-icon5" alt="" src="/vector31.svg" />
            </div>
          </div>
        </div>
        <div className="additional1">
          <img
            className="secondary-cricle-button1"
            alt=""
            src={sizeDefaultTypeSecondaryS}
            style={secondaryCricleButtonStyle}
          />
          <div className="added1">
            <div className="div9">로그인</div>
            <div className="div9">Language</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadersV12;
