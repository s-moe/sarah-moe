import "./skills.scss";
import { Check } from "@material-ui/icons";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>

      <ul>
        <li>
          <h3>Front End</h3>
          <li>
            <Check className="check" />
            JavaScript
          </li>
          <li>
            <Check className="check" />
            React.js
          </li>
          <li>
            <Check className="check" />
            Vue.js
          </li>
          <li>
            <Check className="check" />
            Nuxt.js
          </li>
          <li>
            <Check className="check" />
            HTML
          </li>
          <li>
            <Check className="check" />
            CSS
          </li>
          <li>
            <Check className="check" />
            SCSS
          </li>
          <li>
            <Check className="check" />
            JSX
          </li>
          <li>
            <Check className="check" />
            Python
          </li>
          <li>
            <Check className="check" />
            Bootstrap
          </li>
        </li>
        <li>
          <h3>Back End</h3>
          <li>
            <Check className="check" />
            Express.js
          </li>
          <li>
            <Check className="check" />
            MongoDB
          </li>
          <li>
            <Check className="check" />
            Node.js
          </li>
          <li>
            <Check className="check" />
            Django
          </li>
          <li>
            <Check className="check" />
            Next.js
          </li>
        </li>
        <li>
          <h3>Testing</h3>
          <li>
            <Check className="check" />
            Cypress
          </li>
          <li>
            <Check className="check" />
            BackstopJS
          </li>
        </li>
      </ul>
    </div>
  );
}
