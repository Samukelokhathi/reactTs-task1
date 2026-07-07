import btnCss from "./Button.css";

type BtnProps = {
  text: String;
  style?: React.CSSProperties;
};

const Button: React.FC<BtnProps> = ({ text, style }) => {
  return (
    <div>
      <button style={style}>{text}</button>
    </div>
  );
};

export default Button;
