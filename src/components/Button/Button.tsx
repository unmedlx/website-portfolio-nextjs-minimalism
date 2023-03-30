import React from "react";
import styles from "./Button.module.scss";

export interface ButtonI {
  text: string;
  children?: any;
}

const Button = ({ text, children }: ButtonI) => {
  const link =
    "https://drive.google.com/file/d/1CUz4Gw660YL3EY7DYeUahRXcE-otc9lC/view?usp=share_link";
  return (
    <div className={styles.btnContainer}>
      <a href={link} target="_blank" className={styles.runningBtn}>
        <span className={styles.btnText}>{text}</span>
        <span className={styles.btnIcon}>{children}</span>
      </a>
    </div>
  );
};

export default Button;
