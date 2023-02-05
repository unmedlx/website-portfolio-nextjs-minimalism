import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./Layout.module.scss";
//type interface
import { ReactNode } from "react";

interface ChildrenI {
  children: ReactNode;
}

const Layout = ({ children }: ChildrenI) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
