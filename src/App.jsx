import Blog from "./components/blog/Blog";
import NavBar from "./components/navBar/NavBar";
import Contact from "./pages/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Skills />
        <Portfolio />

        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default App;
