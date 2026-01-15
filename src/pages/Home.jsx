import "../styles/home.css";
import profileImg from "../assets/profile.png"; 

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="home-text">
          <span className="home-intro">Hello, I’m</span>

          <h1>Wiseman Silinda</h1>

          <h3>Junior Full Stack Software Developer</h3>

          <p>
            I design and build reliable, user-focused software solutions using
            <strong> .NET</strong>, <strong>SQL Server</strong>, and modern
            web technologies. Passionate about clean code, performance, and
            real-world problem solving.
          </p>

          <div className="home-actions">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="home-image">
          <img src={profileImg} alt="Wiseman Silinda" />
        </div>
      </div>
    </section>
  );
}

export default Home;
