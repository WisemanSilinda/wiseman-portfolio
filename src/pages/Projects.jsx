import { useState, useRef } from "react";
import "../styles/projects.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

/* ======================================================
   PROJECT ASSETS
====================================================== */
import hospitalImg from "../assets/projects/hospital.jpeg";
import fridgeImg from "../assets/projects/fridge.jpeg";
import pharmacyImg from "../assets/projects/pharmacy.jpeg";
import appointmentImg from "../assets/projects/appointment.jpeg";
import callCenterImg from "../assets/projects/callcenter.jpeg";

/* ======================================================
   PROJECT DATA
====================================================== */
const PROJECTS = [
  {
    id: 1,
    title: "Hospital Management System",
    summary: "System for managing patient records, billing, and reporting.",
    tech: ["ASP.NET MVC", "C#", "SQL Server"],
    image: hospitalImg,
    github: "#",
    liveDemo: "#",
  },
  {
    id: 2,
    title: "Fridge Allocation System",
    summary: "Business automation system for fridge inventory and allocation.",
    tech: ["ASP.NET MVC", "Dapper", "SQL Server"],
    image: fridgeImg,
    github: "https://github.com/WisemanSilinda/InnovationTechnology",
    liveDemo: "#",
  },
  {
    id: 3,
    title: "Pharmacy Management System",
    summary: "Pharmacy system for stock control, invoicing, and reporting.",
    tech: [".NET", "SQL Server"],
    image: pharmacyImg,
    github: "https://github.com/yourusername/pharmacy-management",
    liveDemo: "https://soit-iis.mandela.ac.za/GRP-04-07/",
  },
  {
    id: 4,
    title: "Appointment Booking System",
    summary: "Online scheduling system for booking and managing appointments.",
    tech: ["React", "REST API"],
    image: appointmentImg,
    github: "https://github.com/Tshope/ONT2025_BESTTECH",
  },
  {
    id: 5,
    title: "Call Centre System",
    summary: "System for managing calls, agents, and customer interactions.",
    tech: ["ASP.NET", "SQL Server"],
    image: callCenterImg,
    github: "https://github.com/Tshope/ONTPROJECT2025",
    liveDemo: "#",
  },
];

/* ======================================================
   CONSTANTS
====================================================== */
const SLIDE_WIDTH = 320 + 42; // matches CSS card width + gap

/* ======================================================
   PROJECTS COMPONENT
====================================================== */
function Projects() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(null);

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === PROJECTS.length - 1 ? 0 : prev + 1
    );
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? PROJECTS.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="projects"
      className="projects pop-in"
      ref={sectionRef}
    >
      <h2 className="section-title">Projects</h2>

      <div className="carousel">
        <button
          className="arrow left"
          onClick={goPrev}
          aria-label="Previous project"
        >
          ❮
        </button>

        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * SLIDE_WIDTH}px)`,
          }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>

        <button
          className="arrow right"
          onClick={goNext}
          aria-label="Next project"
        >
          ❯
        </button>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          close={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}

/* ======================================================
   PROJECT CARD
====================================================== */
function ProjectCard({ project, onOpen }) {
  const { title, summary, tech, image } = project;

  return (
    <article
      className="project-card"
      style={{ backgroundImage: `url(${image})` }}
      role="group"
      aria-label={title}
    >
      <div className="overlay">
        <h3>{title}</h3>
        <p>{summary}</p>

        <div className="tech">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <button
          className="details-btn"
          onClick={onOpen}
          aria-label={`View details of ${title}`}
        >
          View Details
        </button>
      </div>
    </article>
  );
}

/* ======================================================
   PROJECT MODAL
====================================================== */
function ProjectModal({ project, close }) {
  const { title, summary, tech, github, liveDemo } = project;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="close-btn" onClick={close}>
          ✕
        </button>

        <h3>{title}</h3>
        <p>{summary}</p>

        <h4>Technologies Used</h4>
        <ul>
          {tech.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>

        <div className="modal-actions">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
