import Toolbar from "@mui/material/Toolbar";
import DrawerAppBar from "./components/DrawerAppBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <DrawerAppBar />
      <Toolbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
