import styles from "./Navbar.module.scss";
//icons
import { NavbarIcons } from "./NavbarIcons";
import { NavbarTheme } from "./NavbarTheme";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <NavbarTheme />

      <NavbarIcons />
    </div>
  );
};

export default Navbar;
