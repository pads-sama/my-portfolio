import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import ParallaxAbout from "./components/Parallax/ParallaxAbout/ParallaxAbout";
import ParallaxProjects from "./components/Parallax/ParallaxProjects/ParallaxProjects";
import Projects from "./components/Projects/Projects";
import Projects1 from "./components/Projects/Projects1";
import Projects2 from "./components/Projects/Projects2";

function App() {
  return (
    <>
      <section id="Home">
        <NavBar />
        <Hero />
      </section>
      {/* <section id="About">
        <ParallaxAbout />
      </section> */}
      <section>
        <About />
      </section>
      {/* <section id="Projects">
        <ParallaxProjects />
      </section> */}
      <section>
        <Projects />
      </section>
      <section>
        <Projects1 />
      </section>
      <section>
        <Projects2 />
      </section>
      <section id="Contact">
        <Contacts />
      </section>
    </>
  );
}

export default App;
