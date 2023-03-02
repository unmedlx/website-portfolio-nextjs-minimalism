import React from "react";
import { ButtonI } from "./Button";
import styles from "./Button.module.scss";

const ButtonSubmit = ({ text, children }: ButtonI) => {
  return (
    <button type="submit" className={styles.btnContainer}>
      <div className={styles.runningBtn}>
        <span className={styles.btnText}>{children}</span>
      </div>
    </button>
  );
};

export default ButtonSubmit;
