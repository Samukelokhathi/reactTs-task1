// import btnCss from "./Button.css";

interface BtnProps {
  text: string;
  style?: React.CSSProperties;
}

const Button: React.FC<BtnProps> = ({ text, style }) => {
  return <button style={style}>{text}</button>;
};

export default Button;
