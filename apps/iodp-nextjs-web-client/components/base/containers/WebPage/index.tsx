import React from "react";
import styles from "./WebPage.module.scss";

type WebPageProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string;
  children: React.ReactNode;
};

export const WebPage = ({
  title,
  children,
  className,
  ...props
}: WebPageProps) => {
  return (
    <div className={`${styles.webPage} ${className || ""}`} {...props}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
};
