import Home from "./pages/Home";
import Menu from "./components/Menu";
import Projects from "./pages/Projects";
import FeaturedProject from "./pages/FeaturedProject";
import About from "./pages/About";
import TechnicalSkills from "./pages/TechnicalSkills";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Menu />
      <Home />
      <Projects />
      <FeaturedProject />
      <About />
      <TechnicalSkills />
      <Contact />

    </>
  );
}

export default App;
