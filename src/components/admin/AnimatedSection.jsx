import { motion } from "framer-motion";

const AnimatedSection = ({ children, className, ...props }) => {
  return (
    <motion.section
      className={className}
      initial={{scale: 0.95, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      exit={{scale: 1, opacity: 1}}
      transition={{
        type: "tween",
        duration: 0.3,
        ease: "easeOut"
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;