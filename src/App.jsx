import Toolbar from "@mui/material/Toolbar";
import DrawerAppBar from "./components/DrawerAppBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <DrawerAppBar />
      <Toolbar />
      <Hero />
      <About />
      <Skills />
    </>
  );
}

export default App;
