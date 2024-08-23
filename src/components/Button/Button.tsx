import React from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';

export interface ButtonI {
  text: string;
  children?: any;
}

const Button = ({ text, children }: ButtonI) => {
  const link = process.env.CV_LINK;
  return (
    <div className={styles.btnContainer}>
      <Link
        href={
          link
            ? link
            : 'https://drive.google.com/drive/folders/1Xu30RCwWuBijQwuEcOLSBQZCT8OHWE0q?usp=sharing'
        }
        target="_blank"
        className={styles.runningBtn}
      >
        <span className={styles.btnText}>{text}</span>
        <span className={styles.btnIcon}>{children}</span>
      </Link>
    </div>
  );
};

export default Button;
