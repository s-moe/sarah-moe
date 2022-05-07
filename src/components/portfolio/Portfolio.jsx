import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <div className="container">
        <div className="item">
          <img src="./assets/microsoftEditor.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="./assets/microsoftEditor.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="./assets/microsoftEditor.png" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="./assets/microsoftEditor.png" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
