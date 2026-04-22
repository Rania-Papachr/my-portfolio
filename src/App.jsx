import { useRef } from "react";

import Toolbar from "@mui/material/Toolbar";
import DrawerAppBar from "./components/DrawerAppBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/ProjectsSection/Projects";
import Contact from "./components/ContactSection/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const projectsRef = useRef(null);

  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <DrawerAppBar />
      <Toolbar />
      <Hero onScrollToProjects={handleScrollToProjects} />
      <About />
      <Skills />
      <section ref={projectsRef} id="projects">
        <Projects />
      </section>
      <Contact />

      <ScrollToTop />
    </>
  );
}

export default App;
