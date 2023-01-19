import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
// Theme Changing
import { useTheme } from "next-themes";

export const NavbarTheme = () => {
  let { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className={styles.themeBtn} onClick={toggleTheme}>
      <FontAwesomeIcon className={styles.icon} icon={faToggleOn} />
    </div>
  );
};
