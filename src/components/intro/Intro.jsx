import "./intro.scss";
import { ExpandMore } from "@material-ui/icons";
import Typewriter from "typewriter-effect";
// import { useEffect } from "react";

// use copy from Portia for the heading, etc.

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
            Software Engineer &{" "}
            <Typewriter
              options={{
                strings: [
                  "former lawyer",
                  "cat mom",
                  "skimboarder",
                  "weekend baker",
                  "arts & crafts enthusiast",
                  "healthcare activist",
                  "'fun aunt' - Charlie, age 5",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 300,
              }}
            />
          </h3>
          <h4>
            <a
              href="documents/Portfolio Rough Draft Resume.docx.pdf"
              target="_blank"
            >
              View My Resume
            </a>
          </h4>
        </div>
        <a href="#skills">
          <ExpandMore id="arrowDown" />
        </a>
      </div>
    </div>
  );
}
