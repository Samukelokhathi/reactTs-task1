// import btnCss from "./Button.css";

interface BtnProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<BtnProps> = ({ text, style, className }) => {
  return (
    <button style={style} className={className}>
      {text}
    </button>
  );
};

export default Button;
