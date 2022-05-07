import "./navBar.scss";
import { PhoneIphone, MailOutline } from "@material-ui/icons";

export default function NavBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Sarah Moe
          </a>
          <div className="itemContainer">
            <PhoneIphone className="icon" />
            <span>+1 (425) 923 - 9939</span>
          </div>

          <div className="itemContainer">
            <MailOutline className="icon" />
            <span>sarahannmoe@gmail.com</span>
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
