import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container container-width">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              A passionate Java Full Stack Developer delivering responsive web experiences with Spring Boot, React.js, REST APIs, and relational databases.
            </p>
            <p className="about-description">
              I build secure, scalable applications with clean code, modern UI design, and production-ready workflows.
              During my internship, I gained hands-on experience designing RESTful APIs, configuring authentication protocols, 
              and optimizing database models in MySQL. I enjoy solving real-world problems and creating fluid user interfaces.
            </p>

            {/* Premium Statistics Grid */}
            <div className="about-stats">
              <div className="stat-item glass-panel">
                <div className="stat-number">8M+</div>
                <div className="stat-label">Internship Exp</div>
              </div>
              <div className="stat-item glass-panel">
                <div className="stat-number">4+</div>
                <div className="stat-label">Live Projects</div>
              </div>
              <div className="stat-item glass-panel">
                <div className="stat-number">80%</div>
                <div className="stat-label">BCA GPA</div>
              </div>
            </div>

            <div className="about-buttons">
              <a href="#internship" className="cta-button">My Experience</a>
              <a href="#skills" className="cta-outline">View Skills</a>
            </div>
          </div>

          <div className="about-image">
            <div className="hero-image-wrapper">
              {/* Profile Image representation */}
              <img src="/images/BP.jpeg" alt="Bhanu Pratap Yadav" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
