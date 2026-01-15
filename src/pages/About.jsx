import "../styles/about.css"; 
import { useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function About() { 
  const aboutRef = useRef(null);
  useScrollAnimation(aboutRef);

  return (
    <section id="about" className="about pop-in" ref={aboutRef}>
      <h2 className="section-title">About Me</h2>
      <p>
        I am a passionate Junior Full Stack Software Developer with a Diploma and Advanced Diploma in Information Technology (Software Development) from Nelson Mandela University.
      </p>
      <p>
        I have hands-on experience across the full Software Development Lifecycle, including requirements analysis, system design, coding, testing, deployment, and ongoing support. I enjoy building scalable and maintainable systems that solve real-world problems.
      </p>
      <p>
        I thrive in collaborative Agile environments, where I can contribute to innovative projects, continuously learn, and turn ideas into functional solutions.
      </p>
      <p>
        When I'm not coding, I enjoy exploring new technologies, improving my skills, and contributing to open-source projects.
      </p>
    </section>
  );
}

export default About;
