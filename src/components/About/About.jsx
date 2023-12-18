import React from "react";
import "./About.css";
import { Pads } from "../../assets";
import AboutSkills from "./AboutSkills";
import AboutInfo from "./AboutInfo";

const About = () => {
  return (
    <div className="h-full text-sm bg-gradient-to-b from-primary to-gradient flex flex-col items-center justify-center text-secondary tracking-wide  | xl:text-sm">
      <div className="w-[1200px] grid grid-cols-2 grid-rows-1 rounded-md ">
        <div className="w-[300px] h-[300px] overflow-hidden">
          <img src={Pads} alt="" className="h-auto w-auto" />
        </div>
        <div>
          <span>About me</span>
          <p>
            Greetings! I'm Juan Carlos, a frontend developer with a passion for
            crafting immersive digital experiences. My journey in the world of
            web development is driven by a relentless pursuit of pixel
            perfection and a love for transforming ideas into visually stunning
            realities.
          </p>
          <div>What sets me apart?</div>
          <p>
            It's not just about writing code; it's about solving problems and
            creating seamless user experiences. I believe in the power of
            collaboration and am always excited to work with others who share
            the same passion for innovation.
          </p>
        </div>
      </div>
      <div className="w-[1200px] ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos
        architecto quod. Reiciendis assumenda cumque fuga, perspiciatis ea
        consectetur quasi iste rerum dicta nulla placeat deserunt vitae,
        delectus ducimus inventore officiis soluta ab. Inventore deleniti
        dolorum blanditiis, suscipit ullam dolores alias exercitationem
        quibusdam ducimus, illo explicabo labore quod. Cum, dignissimos
        recusandae quasi culpa inventore ut modi blanditiis nostrum adipisci
        commodi excepturi! Minima quidem dolorum doloremque necessitatibus,
        excepturi debitis accusamus unde porro nostrum mollitia. Accusantium
        repellat minima veritatis iusto optio quas harum sed reiciendis
        dignissimos! Dicta molestias, eveniet nobis aperiam error earum? Ipsam
        deleniti accusamus quos, dicta vitae ducimus modi veniam.
      </div>
    </div>
  );
};

export default About;
