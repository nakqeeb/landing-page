import React, { FC } from "react";
import "./CustomButton.css";
const CustomButton: FC<{
  className?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  name?: string;
  style?: React.CSSProperties;
  onClick?: any;
  children?: React.ReactNode;
  ischildrenLeft?: boolean,
}> = ({ className, type, disabled, name, style, onClick, children, ischildrenLeft=true }) => {
  return (
    <button
      onClick={onClick}
      className={`custom-button ${className}`}
      style={style}
      type={type}
      disabled={disabled}
    >
      {ischildrenLeft && children}
      {name}
      {!ischildrenLeft && children}
    </button>
  );
};

export default CustomButton;
