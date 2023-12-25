import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ParallaxEffects = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const transformScroll = (inputRange, outputRange) =>
    useTransform(scrollYProgress, inputRange, outputRange);

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return <div>ParallaxEffects</div>;
};

export default ParallaxEffects;
