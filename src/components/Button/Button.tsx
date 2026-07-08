import React from "react";
import btnCss from "./Button.module.css";

interface BtnProps {
  text: string;
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<BtnProps> = ({ text, style, className }) => {
  return (
    <button className={`${btnCss.globalBtn} ${className || ""}`} style={style}>
      {text}
    </button>
  );
};

export default Button;
