import React from "react";
import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, ...props }, ref) => {
    const cls = [styles.base, styles[variant], className].filter(Boolean).join(" ");
    return <button ref={ref} className={cls} {...props} />;
  }
);

Button.displayName = "Button";
