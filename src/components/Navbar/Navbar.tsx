import React from "react";
import styles from "./Navbar.module.scss";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faEnvelope,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.themeBtn}>
        <FontAwesomeIcon icon={faToggleOn} />
      </div>

      <div className={styles.icons}>
        <ul>
          <li className={styles.icon}>
            <FontAwesomeIcon icon={faHouse} />
          </li>
          <li className={styles.icon}>
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li className={styles.icon}>
            <FontAwesomeIcon icon={faBriefcase} />
          </li>
          <li className={styles.icon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
