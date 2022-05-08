import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h2>Contact</h2>
        <form action="">
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="right">
        <img src="" alt="" />
      </div>
    </div>
  );
}
