import React from 'react';

const Education = () => {
  const educations = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'Veer Bahadur Singh Purvanchal University',
      duration: '2023 – Present',
      score: 'GPA: 80%'
    },
    {
      degree: 'Intermediate (12th)',
      school: 'Dr. R.P.Y. Inter College',
      duration: '2022',
      score: 'Percentage: 53.6%'
    },
    {
      degree: 'High School (10th)',
      school: 'Dr. R.P.Y. Inter College',
      duration: '2020',
      score: 'Percentage: 70.6%'
    }
  ];

  return (
    <section id="education" className="timeline-section">
      <div className="container-width">
        <h2>My Education</h2>
        <div className="timeline-wrapper">
          {educations.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>

              <div className="timeline-panel glass-panel">
                <div className="timeline-header">
                  <div className="timeline-meta">
                    <h3>{edu.degree}</h3>
                    <span className="timeline-org">{edu.school}</span>
                  </div>
                  <div className="timeline-date-gpa">
                    <span className="timeline-date">{edu.duration}</span>
                    <span className="timeline-gpa">{edu.score}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
