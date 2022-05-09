import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a
            href="documents/Portfolio Rough Draft Resume.docx.pdf"
            target="_blank"
          >
            Resume
          </a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a href="#blog">Blog</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
}
