import { AnimatePresence, motion, m } from "framer-motion";
import { useRouter } from "next/router";
import { ChildrenI } from "./Layout";

const PageTransition = ({ children }: ChildrenI) => {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{
          duration: 0.4,
          ease: "linear",
        }}
        // variants={{
        //   initialState: {
        //     // opacity: 0,
        //     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        //   },
        //   animateState: {
        //     // opacity: 1,
        //     clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        //   },
        //   exitState: {
        //     // opacity: 0,
        //     clipPath: "polygon(0 0, 100% 0, 96% 0, 0 0)",
        //   },
        // }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
