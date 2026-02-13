"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, Children, isValidElement, cloneElement } from "react";

export default function StaggeredText({ 
  children, 
  el: Wrapper = "p", 
  className, 
  once = true,
  duration = 0.5, // default duration
  staggerDelay = 0.05 // default stagger delay between characters
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const shouldReduceMotion = useReducedMotion();

  const animationVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { 
        hidden: { opacity: 0 }, 
        visible: { 
          opacity: 1, 
          transition: { 
            staggerChildren: staggerDelay
          } 
        } 
      };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: duration }
    }
  };

  // Split by CHARACTERS instead of words
  const renderChildren = (child) => {
    if (typeof child === "string") {
      return child.split("").map((char, i) => (
        <motion.span 
          key={i} 
          variants={childVariants} 
          className="inline-block"
          style={{ whiteSpace: 'pre' }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ));
    } else if (isValidElement(child)) {
      return cloneElement(child, {}, Children.map(child.props.children, renderChildren));
    } else {
      return child;
    }
  };

  return (
    <Wrapper className={className}>
      <span className="sr-only">{children}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={animationVariants}
        aria-hidden
        className="inline-block"
      >
        {Children.map(children, renderChildren)}
      </motion.span>
    </Wrapper>
  );
}