import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Navbar from "./components/sections/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}