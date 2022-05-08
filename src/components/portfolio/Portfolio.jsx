import "./portfolio.scss";
// import { Link } from "react-router-dom";

export default function Portfolio() {
  const data = [
    {
      id: 1,
      solidButton: "Live Site",
      outlineButton: "Github",
      img: "./assets/microsoftEditor.png",

      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
      liveSiteLink: "https://google.com",
      githubLink: "https://github.com/thinkpixellab/edgewelcome",
    },
    {
      id: 2,
      solidButton: "Live Site",
      outlineButton: "Github",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      liveSiteLink: "https://microsoftedgewelcome.microsoft.com/en-us/mb07",
      githubLink: "https://github.com/thinkpixellab/edgewelcome",
    },
    {
      id: 3,
      solidButton: "Live Site",
      outlineButton: "Github",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
      // featured: true,
      liveSiteLink: "https://google.com",
      githubLink: "https://github.com/thinkpixellab/edgewelcome",
    },
    // {
    //   id: 4,
    //   solidButton: "Live Site",
    //   outlineButton: "Github",
    //   img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    //   liveSiteLink: "https://google.com",
    //   githubLink: "https://github.com/thinkpixellab/edgewelcome",
    // },
    // {
    //   id: 5,
    //   solidButton: "Live Site",
    //   outlineButton: "Github",
    //   img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    //   liveSiteLink: "https://google.com",
    //   githubLink: "https://github.com/thinkpixellab/edgewelcome",
    // },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="user" src={d.img} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <button className="solidButton">
                <a href={d.liveSiteLink} target="_blank" rel="noreferrer">
                  {d.solidButton}
                </a>
              </button>
              <button className="outlineButton">
                {" "}
                <a href={d.githubLink} target="_blank" rel="noreferrer">
                  {d.outlineButton}
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
