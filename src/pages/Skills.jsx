import "../styles/skills.css"; 
import { useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Skills() { 
  const skillsRef = useRef(null);
  useScrollAnimation(skillsRef);

  return (
    <section 
      id="skills" 
      className="skills pop-in" // <-- added pop-in
      ref={skillsRef}           // <-- attached ref
    >
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
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
        </div>

        <div className="skill-card">
          <h3>Backend Development</h3>
          <ul>
            <li>ASP.NET MVC</li>
            <li>.NET Core / .NET 6+</li>
            <li>RESTful APIs</li>
            <li>Entity Framework Core</li>
            <li>Authentication & Authorization</li>
            <li>CRUD Operations</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Frontend Development</h3>
          <ul>
            <li>React.js</li>
            <li>HTML5 & CSS3</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>Bootstrap / CSS Flexbox & Grid</li>
            <li>Basic UI/UX Principles</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>UI / UX Design</h3>
          <ul>
            <li>User-Centered Design Principles</li>
            <li>Wireframing & Prototyping</li>
            <li>Responsive & Mobile-First Design</li>
            <li>Accessibility Basics (WCAG)</li>
            <li>Consistency & Design Systems</li>
            <li>Usability Testing</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Databases</h3>
          <ul>
            <li>SQL Server</li>
            <li>MySQL</li>
            <li>Database Design & Normalization</li>
            <li>Stored Procedures</li>
            <li>Basic Performance Optimization</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Tools & Practices</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Agile / Scrum Methodology</li>
            <li>Software Testing (Unit & Manual)</li>
            <li>Debugging & Troubleshooting</li>
            <li>Clean Code Principles</li>
            <li>Documentation</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Project Management</h3>
          <ul>
            <li>Requirements Analysis</li>
            <li>Agile / Scrum Practices</li>
            <li>Sprint Planning & Task Breakdown</li>
            <li>Stakeholder Communication</li>
            <li>Time & Priority Management</li>
            <li>Risk Identification & Mitigation</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>DevOps & Deployment</h3>
          <ul>
            <li>Basic CI/CD Concepts</li>
            <li>IIS Deployment</li>
            <li>Environment Configuration</li>
            <li>Version Control Workflows</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
