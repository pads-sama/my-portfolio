import Hero from "./components/Hero";
import About from "./components/about";
import Layout from "./layouts/layout";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
