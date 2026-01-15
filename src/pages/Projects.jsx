import { useState, useRef } from "react";
import "../styles/projects.css";
import ProjectModal from "../components/ProjectModal"; 
import { useScrollAnimation } from "../hooks/useScrollAnimation";

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
  },
  {
    id: 2,
    title: "Fridge Allocation System",
    summary: "Business automation system for fridge inventory and allocation.",
    tech: ["ASP.NET MVC", "Dapper", "SQL Server"],
    image: fridgeImg,
  },
  {
    id: 3,
    title: "Pharmacy Management System",
    summary: "Pharmacy system for stock control, invoicing, and reporting.",
    tech: [".NET", "SQL Server"],
    image: pharmacyImg,
  },
  {
    id: 4,
    title: "Appointment Booking System",
    summary: "Online scheduling system for booking and managing appointments.",
    tech: ["React", "REST API"],
    image: appointmentImg,
  },
  {
    id: 5,
    title: "Call Centre System",
    summary: "System for managing calls, agents, and customer interactions.",
    tech: ["ASP.NET", "SQL Server"],
    image: callCenterImg,
  },
];

/* ======================================================
   COMPONENT
====================================================== */

function Projects() {
  const projectsRef = useRef(null);
  useScrollAnimation(projectsRef); // <-- fixed ref
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(null);

  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);

  const goPrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? PROJECTS.length - 1 : prev - 1
    );

  return (
    <section
      id="projects"
      className="projects pop-in" // <-- added pop-in class
      ref={projectsRef}          // <-- connected ref
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
            transform: `translateX(-${currentIndex * 360}px)`,
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
    <div
      className="project-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay">
        <h3>{title}</h3>
        <p>{summary}</p>

        <div className="tech">
          {tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <button className="details-btn" onClick={onOpen}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default Projects;
