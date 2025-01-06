import React from "react";
import styles from "./Tile.module.scss";

type TileProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const Tile: React.FC<TileProps> = ({
  children,
  className,
  ...props
}) => (
  <div className={`${styles.tile} ${className || ""}`} {...props}>
    {children}
  </div>
);
