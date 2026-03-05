import React from "react";
import styles from "./Text.module.css";

type TextProps = {
  as?: "p" | "span" | "h1" | "h2" | "h3";
  variant?: "title" | "subtitle" | "body" | "muted";
  className?: string;
  children: React.ReactNode;
};

export function Text({
  as: Tag = "p",
  variant = "body",
  className,
  children,
}: TextProps) {
  const cls = [styles.base, styles[variant], className].filter(Boolean).join(" ");
  return <Tag className={cls}>{children}</Tag>;
}
