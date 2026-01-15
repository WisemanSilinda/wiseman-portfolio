import "../styles/contact.css";
import { useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Contact() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section
      id="contact"
      className="contact pop-in"
      ref={sectionRef}
    >
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>

        <p className="contact-intro">
          I’m open to graduate and junior software developer opportunities.
          Feel free to reach out for collaborations or interviews.
        </p>

        <div className="contact-details">
          <article className="contact-item">
            <span>Email</span>
            <a href="mailto:silindawiseman01@gmail.com">
              silindawiseman01@gmail.com
            </a>
          </article>

          <article className="contact-item">
            <span>Location</span>
            <p>Johannesburg, South Africa</p>
          </article>

          <article className="contact-item">
            <span>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/wiseman-silinda-b96307208"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/wiseman-silinda
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;
