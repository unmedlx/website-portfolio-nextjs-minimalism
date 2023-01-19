import styles from "./Navbar.module.scss";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
//for active link
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

export const NavbarIcons = () => {
  const router: NextRouter = useRouter();

  return (
    <div className={styles.icons}>
      <Link href="/" className={router.pathname === "/" ? styles.active : ""}>
        <FontAwesomeIcon icon={faHouse} />
      </Link>
      <Link
        href="/aboutPage"
        className={router.pathname === "/aboutPage" ? styles.active : ""}
      >
        <FontAwesomeIcon icon={faUser} />
      </Link>
      <Link
        href="/projectPage"
        className={router.pathname === "/projectPage" ? styles.active : ""}
      >
        <FontAwesomeIcon icon={faBriefcase} />
      </Link>
      <Link
        href="/contactPage"
        className={router.pathname === "/contactPage" ? styles.active : ""}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </Link>
    </div>
  );
};
