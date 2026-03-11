import Toolbar from "@mui/material/Toolbar";
import DrawerAppBar from "./components/DrawerAppBar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <DrawerAppBar />
      <Toolbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
