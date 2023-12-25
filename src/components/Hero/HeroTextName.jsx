import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },

  hideText1: {
    x: 200,
  },
  showText1: {
    x: 0,
  },
};

const HeroTextName = ({
  text1,
  text2,
  el: Wrapper = "p",
  className,
  textY,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true });

  return (
    <Wrapper className={className}>
      <motion.span
        initial={{
          x: -1000,
        }}
        animate={{
          x: 0,
          transition: { duration: 0.5, staggerChildren: 0.1 },
        }}
      >
        {text1}
      </motion.span>
      &nbsp;
      <motion.span
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        style={{ y: textY }}
      >
        {text2.split(" ").map((word) => (
          <span>
            {word.split("").map((char) => (
              <motion.span
                className={
                  ` text-secondary font-semibold inline-block` + className
                }
                variants={textVariants}
              >
                {char}
              </motion.span>
            ))}
            <span>&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default HeroTextName;
