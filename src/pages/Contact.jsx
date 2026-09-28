import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h1 className="contact-title">Contact Me</h1>

      <p className="contact-text">
        Feel free to reach out for opportunities, collaborations, or questions.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
