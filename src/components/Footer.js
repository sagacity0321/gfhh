import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer1">
        <div className="info-parent">
          <div className="info">
            <b className="date1">고객 센터</b>
            <b className="date1">이용 약관</b>
            <b className="date1">개인정보</b>
            <b className="date1">법적 고지</b>
            <b className="date1">쿠키 설정</b>
            <b className="date1">회사 정보</b>
            <b className="date1">문의하기</b>
          </div>
          <div className="frame-group">
            <div className="gamelank-parent">
              <div className="gamelank18">
                경기도 성남시 분당구 판교역로 152 알파돔타워 14층 주식회사
                카카오게임즈
              </div>
              <div className="gamelank-group">
                <div className="gamelank19">1566-8834</div>
                <div className="gamelank19">|</div>
                <div className="gamelank19">대표: 조계현</div>
              </div>
              <div className="gamelank19">
                Copyright © Kakao Games Corp. All rights reserved.
              </div>
            </div>
            <div className="logo-style-guide-top2">
              <img className="vector-icon18" alt="" src="/vector41.svg" />
              <b className="gamelank18">RecoGame</b>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
