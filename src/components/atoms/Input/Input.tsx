import React from "react";
import styles from "./Input.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, id, className, ...props }: InputProps) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;

  return (
    <div className={styles.wrapper}>
      {label ? (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      ) : null}

      <input
        id={inputId}
        className={[styles.input, className].filter(Boolean).join(" ")}
        {...props}
      />
    </div>
  );
}
