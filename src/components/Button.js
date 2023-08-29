import "./Button.css";
const Button = ({
  primaryActionText = "Primary Action",
  text = true,
  iconLeft = false,
  iconRight = true,
}) => {
  return (
    <button className="button">
      {iconLeft && (
        <img
          className="icon-jam-icons-outline-l59"
          alt=""
          src="/icon--jamicons--outline--logos--plus.svg"
        />
      )}
      {text && (
        <div className="text-container4">
          <div className="button-text4">{primaryActionText}</div>
        </div>
      )}
      {iconRight && (
        <button className="icon-jam-icons-outline-l60">
          <img className="vector-icon11" alt="" src="/vector1.svg" />
        </button>
      )}
    </button>
  );
};

export default Button;
