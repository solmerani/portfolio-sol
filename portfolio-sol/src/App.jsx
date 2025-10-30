import Home from "./pages/Home";
import Menu from "./components/Menu";
import Projects from "./pages/Projects";
import FeaturedProject from "./pages/FeaturedProject";
import About from "./pages/About";
function App() {
  return (
    <>
      <Menu />
      <Home />
      <Projects />
      <FeaturedProject />
      <About />
    </>
  );
}

export default App;
