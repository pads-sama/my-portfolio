import React from "react";
import { socials } from "../../constants";
import { motion } from "framer-motion";

// const roll = {
//   initial: {
//     x: -1000,
//   },
//   animate: {
//     x: 0,
//     transition: { delay: 1, stagger: 0.2 },
//     rotate: 180,
//   },
// };

const HeroSocials = () => {
  return (
    <div className="absolute bottom-0 right-0">
      <motion.span
        // initial="initial"
        // animate="animate"
        className="flex w-48 xl:w-52"
      >
        {socials.map((social, index) => (
          <motion.a
            // variants={roll}
            href="#"
            key={index}
            className=" w-full h-12 | sm:h-14 | md:h-16 | xl:h-16 "
          >
            <img src={social.image} alt={social.alt} className="w-8 h-8 " />
          </motion.a>
        ))}
      </motion.span>
    </div>
  );
};

export default HeroSocials;
