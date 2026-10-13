import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Writing from "./components/Writing.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <a href="#work" className="skiplink">
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Writing />
        <Contact />
      </main>
    </div>
  );
}
