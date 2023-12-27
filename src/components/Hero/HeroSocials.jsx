import React from "react";
import { socials } from "../../constants";
import { motion } from "framer-motion";

const HeroSocials = () => {
  return (
    <div className=" flex flex-col items-end  w-full bottom-0 right-0">
      <motion.span className="flex w-full gap-5 justify-center">
        {socials.map((social, index) => (
          <motion.a
            href="#"
            key={index}
            className=" h-10 | sm:h-10 | md:h-10 | xl:h-10 "
          >
            <img src={social.image} alt={social.alt} className="w-6 h-6 " />
          </motion.a>
        ))}
      </motion.span>
    </div>
  );
};

export default HeroSocials;
