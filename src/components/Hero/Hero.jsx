import { Mockup } from "../../assets";
import Buttons from "../Buttons/Buttons";
import { motion } from "framer-motion";
import "./Hero.css";
import { ParticlesBg } from "../Particles/ParticlesBg";
// import { ParticlesBg } from "../Particles/ParticlesBg";

const Hero = () => {
  return (
    // w-full flex mt-10 justify-center
    <div className="hero relative">
      <motion.section
        className="space-y-5 text-center section z-10 py-20 px-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, y: 10 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <span className="text-sm text-accent-clr tracking-wider transition-all duration-700 | sm:text-md | md:text-lg | xl:text-xl">
          Hi, I am Juan Carlos
        </span>
        <div>
          <span className="text-3xl font-extrabold tracking-wide transition-all duration-700 | sm:text-5xl | md:text-6xl | xl:text-7xl">
            Frontend{" "}
          </span>
          <span className="text-3xl font-extrabold text-secondary tracking-wide transition-all duration-700 | sm:text-5xl | md:text-6xl | xl:text-7xl">
            Developer
          </span>
        </div>
        <p className="tracking-wider text-xs transition-all duration-700 | sm:text-sm | md:text-sm | xl:text-sm">
          Dedicated to <span className="text-secondary">crafting </span>
          beautiful and functional websites.
        </p>
        <div className="flex justify-center">
          <Buttons label="Message Me" />
        </div>
      </motion.section>
      <motion.section
        className="section relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 3 }}
      >
        <img
          src={Mockup}
          alt="mockup image"
          className=" absolute left-[50%] top-[40%] transition-all duration-1000 mockup | sm:top-[20%] | md:top-[10%]  | xl:w-[60%] xl:top-0"
        />
      </motion.section>
      <section className="section">
        <ParticlesBg />
      </section>
      <section className="section">test3</section>
      {/* <marquee
        direction="left"
        height="370px"
        className="absolute bottom-0 font-black text-[300px] font-roboto  m-0 p-0 hidden | sm:hidden | md:hidden | xl:block"
      >
        <p className="text-[300px] font-roboto -z-20 m-0 p-0 gradient opacity-70 w-full">
          PadsDev.
        </p>
      </marquee> */}
    </div>
  );
};

export default Hero;
