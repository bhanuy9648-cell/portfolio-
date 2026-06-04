import React from 'react';

const Skills = () => {
  const skills = [
    { 
      category: 'Frontend Development', 
      items: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6)', 'Responsive Web Design'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    { 
      category: 'Backend & Databases', 
      items: ['Java Enterprise', 'Spring Boot', 'Hibernate ORM', 'Node.js', 'Express.js', 'MySQL', 'MongoDB'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      )
    },
    { 
      category: 'Full Stack Integration', 
      items: ['REST APIs', 'JWT Authentication', 'CRUD Systems', 'MVC Architecture'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      )
    },
    { 
      category: 'Tools & Ecosystem', 
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'NPM'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container container-width">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card glass-panel">
              <div className="skill-header">
                <div className="skill-icon-box">
                  {skillGroup.icon}
                </div>
                <h3>{skillGroup.category}</h3>
              </div>
              <div className="skill-chips">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
