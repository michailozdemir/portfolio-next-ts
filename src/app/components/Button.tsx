import React from "react";
import classNames from "../helpers/classNames";

type ButtonProps = {
  title?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, icon, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        "border border-border-light rounded-lg leading-none bg-bg-light dark:bg-bg-dark hover:border-primary dark:hover:border-primary dark:border-border-dark duration-150",
        icon && !title ? "p-2" : "py-3 px-4"
      )}
      onClick={onClick}
    >
      {icon && icon}
      {title}
    </button>
  );
};

export default Button;
