import "./CardFormFilterContainer.css";
const CardFormFilterContainer = ({
  imageDescription,
  descriptionText,
  thumbnailId,
  carDescription,
}) => {
  return (
    <div className="frame-parent1">
      <div className="icon-jam-icons-outline-l-parent4">
        <img
          className="icon-jam-icons-outline-l94"
          alt=""
          src={imageDescription}
        />
        <div className="paragraph9">{descriptionText}</div>
      </div>
      <div className="icon-jam-icons-outline-l-parent4">
        <img className="icon-jam-icons-outline-l94" alt="" src={thumbnailId} />
        <div className="paragraph9">{carDescription}</div>
      </div>
    </div>
  );
};

export default CardFormFilterContainer;
