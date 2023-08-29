import "./ContainerForm.css";
const ContainerForm = ({ iconText, imageText, imageCode }) => {
  return (
    <div className="frame-container" style={frameDivStyle}>
      <div className="icon-jam-icons-outline-l-container">
        <img
          className="icon-jam-icons-outline-l90"
          alt=""
          src={iconJamIconsOutlineLogos}
        />
        <div className="paragraph5">{paragraph2}</div>
      </div>
      <div className="icon-jam-icons-outline-l-container">
        <img className="icon-jam-icons-outline-l90" alt="" src={iconText} />
        <div className="paragraph5">{paragraph3}</div>
      </div>
      <div className="icon-jam-icons-outline-l-container">
        <img className="icon-jam-icons-outline-l90" alt="" src={imageText} />
        <div className="paragraph5">{paragraph4}</div>
      </div>
      <div
        className="icon-jam-icons-outline-l-container"
        style={frameDiv1Style}
      >
        {showIconJamIconsOutlineL && (
          <img
            className="icon-jam-icons-outline-l90"
            alt=""
            src={imageCode}
            style={iconJamIconsOutlineLStyle}
          />
        )}
        <div className="paragraph5" style={paragraph1Style}>
          {paragraph5}
        </div>
      </div>
    </div>
  );
};

export default ContainerForm;
