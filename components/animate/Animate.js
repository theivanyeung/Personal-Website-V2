import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Animate = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
        style={{ position: "relative" }}
      >
        {children}
      </motion.article>
    </AnimatePresence>
  );
};

export default Animate;
