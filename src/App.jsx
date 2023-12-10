import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <section id="Home">
        <NavBar />
        <Hero />
      </section>
      <section id="About">parallax</section>
      <section>about me</section>
      <section id="Skills">parallax</section>
      <section>skills</section>
      <section id="Projects">parallax</section>
      <section>Project 1</section>
      <section>Project 2</section>
      <section>Project 3</section>
      <section id="Contact">Contact me</section>
    </>
  );
}

export default App;
