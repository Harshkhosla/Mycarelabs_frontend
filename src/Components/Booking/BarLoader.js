import { motion } from "framer-motion";

const Example = () => {
  return (
    // <div className="grid place-content-center bg-violet-600 px-4 py-24">
      <BarLoader />
    // </div>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-12 w-2 bg-blue-700" />
      <motion.div variants={variants} className="h-12 w-2 bg-blue-700" />
      <motion.div variants={variants} className="h-12 w-2 bg-blue-700" />
      <motion.div variants={variants} className="h-12 w-2 bg-blue-700" />
      <motion.div variants={variants} className="h-12 w-2 bg-blue-700" />
    </motion.div>
  );
};

export default Example;