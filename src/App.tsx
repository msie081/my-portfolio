import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
}