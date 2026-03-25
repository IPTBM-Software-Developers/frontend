import { motion } from "framer-motion";

const AnimatedSection = ({ children, className, ...props }) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{
        duration: 0.4,
        ease: "easeOut"
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;