import React from 'react';

const Certifications = () => {
  const certifications = [
    { 
      title: 'MERN Full Stack Developer', 
      image: '/images/cf1.jpeg',
      provider: 'Full Stack Academy'
    },
    { 
      title: 'Java Full Stack Developer', 
      image: '/images/cf2.jpeg',
      provider: 'Java Specialization Hub'
    },
    { 
      title: 'Python Full Stack Developer', 
      image: '/images/cf3.jpeg',
      provider: 'Modern Python Programming'
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container container-width">
        <h2>Professional Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card glass-panel">
              <div className="cert-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: '600', marginBottom: '8px' }}>
                  {cert.provider}
                </p>
                <p>Industry-grade certification detailing full-stack practices, REST architecture, and live projects.</p>
              </div>

              <div className="cert-action">
                <a href={cert.image} target="_blank" rel="noreferrer" className="cta-button" style={{ width: '100%' }}>
                  Open Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
