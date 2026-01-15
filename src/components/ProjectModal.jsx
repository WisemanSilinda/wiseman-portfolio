import "../styles/projects.css";

function ProjectModal({ project, close }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="close-btn" onClick={close}>
          ✕
        </button>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <h4>Technologies Used</h4>
        <ul>
          {project.tech.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>

        <div className="modal-actions">
          <a href="#" target="_blank">GitHub</a>
          <a href="#" target="_blank">Live Demo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
