import Toolbar from "@mui/material/Toolbar";
import DrawerAppBar from "./components/DrawerAppBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/ProjectsSection/Projects";
import Contact from "./components/ContactSection/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <DrawerAppBar />
      <Toolbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <ScrollToTop />
    </>
  );
}

export default App;
