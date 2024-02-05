import { Shape1, Shape2 } from "../assets";

export default function Hero() {
  return (
    <section id="home" className="h-[95dvh] bg-transparent relative">
      <div className="absolute right-0 top-0 -z-10">
        <img
          src={Shape1}
          alt="background icon"
          className="h-full w-full opacity-80"
        />
      </div>
      <div className="absolute bottom-0">
        <img
          src={Shape2}
          alt="background svg"
          className="h-full w-full opacity-80"
        />
      </div>
    </section>
  );
}
