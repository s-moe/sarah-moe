import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <div className="container">
        <div className="item">
          <img src="./assets/microsoftEditor.png" alt="" />
          <h3>Description & Skills used</h3>
          {/* <div className="imgButton">
            <button className="github">Github</button>
          </div>
          <div className="imgButton">
            <button className="liveSite">Live Site</button>
          </div> */}
        </div>
        <div className="item">
          <img src="./assets/microsoftEditor.png" alt="" />
          <h3>Description & Skills used</h3>
        </div>
        <div className="item">
          <img src="./assets/microsoftEditor.png" alt="" />
          <h3>Description & Skills used</h3>
        </div>
        <div className="item">
          <img src="./assets/microsoftEditor.png" alt="" />
          <h3>Description & Skills used</h3>
        </div>
      </div>
    </div>
  );
}
