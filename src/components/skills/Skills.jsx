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
            <Check />
            JavaScript
          </li>
          <li>
            <Check />
            React.js
          </li>
          <li>
            <Check />
            Vue.js
          </li>
          <li>
            <Check />
            Nuxt.js
          </li>
          <li>
            <Check />
            HTML
          </li>
          <li>
            <Check />
            CSS
          </li>
          <li>
            <Check />
            SCSS
          </li>
          <li>
            <Check />
            JSX
          </li>
          <li>
            <Check />
            Python
          </li>
          <li>
            <Check />
            Bootstrap
          </li>
        </li>
        <li>
          <h3>Back End</h3>
          <li>
            <Check />
            Express.js
          </li>
          <li>
            <Check />
            MongoDB
          </li>
          <li>
            <Check />
            Node.js
          </li>
          <li>
            <Check />
            Django
          </li>
          <li>
            <Check />
            Next.js
          </li>
        </li>
        <li>
          <h3>Testing</h3>
          <li>
            <Check />
            Cypress
          </li>
          <li>
            <Check />
            BackstopJS
          </li>
        </li>
      </ul>
    </div>
  );
}
