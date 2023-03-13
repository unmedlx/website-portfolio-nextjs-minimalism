import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../layout/Layout";
//Font
import { Poppins } from "@next/font/google";
//Icons
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
//Theme
import { ThemeProvider } from "next-themes";
// Page Transition
import { AnimatePresence, motion } from "framer-motion";
import PageTransition from "../layout/PageTransition";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={poppins.className}>
        <Layout>
          <PageTransition>
            <Component {...pageProps} />
          </PageTransition>
        </Layout>
      </main>
    </ThemeProvider>
  );
}
