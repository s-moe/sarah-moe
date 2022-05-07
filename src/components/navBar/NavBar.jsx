import "./navBar.scss";
import { LinkedIn, GitHub } from "@material-ui/icons";

export default function NavBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Sarah Moe
          </a>
          <div className="itemContainer">
            <a
              href="https://www.linkedin.com/in/samoe/"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <LinkedIn />
            </a>
          </div>
          <div className="itemContainer">
            <a
              href="https://github.com/s-moe"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <GitHub />
            </a>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
