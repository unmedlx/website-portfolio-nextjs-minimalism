import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
//type interface
import { ReactNode } from "react";

interface ChildrenI {
  children: ReactNode;
}

const Layout = ({ children }: ChildrenI) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
