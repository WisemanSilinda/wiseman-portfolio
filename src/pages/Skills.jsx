import "../styles/skills.css";
import { useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Skills() {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section
      id="skills"
      className="skills pop-in"
      ref={sectionRef}
    >
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        <article className="skill-card">
          <h3>Programming Languages</h3>
          <ul>
            <li>C#</li>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript (ES6+)</li>
            <li>C++</li>
            <li>Delphi</li>
            <li>TypeScript (Basic)</li>
          </ul>
        </article>

        <article className="skill-card">
          <h3>Backend Development</h3>
          <ul>
            <li>ASP.NET MVC</li>
            <li>.NET Core / .NET 6+</li>
            <li>RESTful APIs</li>
            <li>Entity Framework Core</li>
            <li>Authentication & Authorization</li>
            <li>CRUD Operations</li>
          </ul>
        </article>

        <article className="skill-card">
          <h3>Frontend Development</h3>
          <ul>
            <li>React.js</li>
            <li>HTML5 & CSS3</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>Flexbox & CSS Grid</li>
            <li>Basic UI/UX Principles</li>
          </ul>
        </article>

        <article className="skill-card">
          <h3>UI / UX Design</h3>
          <ul>
            <li>User-Centered Design</li>
            <li>Wireframing & Prototyping</li>
            <li>Mobile-First Design</li>
            <li>Accessibility Basics (WCAG)</li>
            <li>Design Consistency</li>
            <li>Usability Testing</li>
          </ul>
        </article>

        <article className="skill-card">
          <h3>Databases</h3>
          <ul>
            <li>SQL Server</li>
            <li>MySQL</li>
            <li>Database Design</li>
            <li>Stored Procedures</li>
            <li>Performance Optimization</li>
          </ul>
        </article>

        <article className="skill-card">
          <h3>Tools & Practices</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Agile / Scrum</li>
            <li>Software Testing</li>
            <li>Debugging</li>
            <li>Clean Code</li>
            <li>Documentation</li>
          </ul>
        </article>

        <article className="skill-card">
          <h3>Project Management</h3>
          <ul>
            <li>Requirements Analysis</li>
            <li>Sprint Planning</li>
            <li>Task Breakdown</li>
            <li>Stakeholder Communication</li>
            <li>Time Management</li>
            <li>Risk Mitigation</li>
          </ul>
        </article>

        <article className="skill-card">
          <h3>DevOps & Deployment</h3>
          <ul>
            <li>CI/CD Basics</li>
            <li>IIS Deployment</li>
            <li>Environment Configuration</li>
            <li>Version Control Workflows</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Skills;
