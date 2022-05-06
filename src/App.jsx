import Blog from "./components/blog/Blog";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Skills />
        <Works />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default App;
