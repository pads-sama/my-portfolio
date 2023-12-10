const AnimationList = (delayChildren = 0, staggerChildren = 0) => {
  return {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  };
};

export default AnimationList;
