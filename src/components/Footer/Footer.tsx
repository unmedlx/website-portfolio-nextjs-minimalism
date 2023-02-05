import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.copyright}>
        Copyright @ 2022 Luthfi Ayyash Portfolio. All Right Reserved{" "}
      </div>
    </div>
  );
};

export default Footer;
