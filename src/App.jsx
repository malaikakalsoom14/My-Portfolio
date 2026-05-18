import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import WorkHistory from "./Components/WorkHistory";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import "./media.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WorkHistory />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App;