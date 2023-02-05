import React from "react";
import styles from "./Button.module.scss";

interface ButtonI {
  text: string;
  children: any;
}

const Button = ({ text, children }: ButtonI) => {
  return (
    <div className={styles.btnContainer}>
      <a href="" className={styles.runningBtn}>
        <span className={styles.btnText}>{text}</span>
        <span className={styles.btnIcon}>{children}</span>
      </a>
    </div>
  );
};

export default Button;
