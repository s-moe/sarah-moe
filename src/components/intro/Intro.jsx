import "./intro.scss";
import { ExpandMore } from "@material-ui/icons";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profilePicture.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Sarah Moe</h1>
          <h3>
            Freelance <span>Designer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <ExpandMore id="arrowDown" />
        </a>
      </div>
    </div>
  );
}
