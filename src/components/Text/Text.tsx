import React, { type ReactNode } from "react";

type Props = {
  variant?: String;
  children: ReactNode;
  style?: React.CSSProperties;
};

export const Text: React.FC<Props> = ({ variant, children, style }) => {
  if (variant === "h1") return <h1 style={style}></h1>;
  if (variant === "h2") return <h2 style={style}></h2>;
  if (variant === "p") return <p style={style}></p>;
  if (variant === "span") return <span style={style}></span>;

  return <div style={style}>{children}</div>;
};
