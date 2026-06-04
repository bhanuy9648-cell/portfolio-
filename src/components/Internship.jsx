import React from 'react';

const Internship = () => {
  return (
    <section id="internship" className="timeline-section">
      <div className="container-width">
        <h2>Professional Internship</h2>
        <div className="timeline-wrapper">
          <div className="timeline-item">
            {/* Timeline Indicator Badge */}
            <div className="timeline-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>

            <div className="timeline-panel glass-panel">
              <div className="timeline-header">
                <div className="timeline-meta">
                  <h3>Software Engineer Intern</h3>
                  <span className="timeline-org">Hummingbyte Technologies Pvt. Ltd.</span>
                </div>
                <div className="timeline-date-gpa">
                  <span className="timeline-date">May 2025 – January 2026</span>
                </div>
              </div>

              <div className="timeline-body">
                <ul>
                  <li>Developed clean full-stack solutions utilizing Java, Spring Boot, and React.js.</li>
                  <li>Designed, tested, and optimized RESTful APIs for client applications.</li>
                  <li>Wrote custom database queries and integrated MySQL schemas.</li>
                  <li>Collaborated on git workflows, resolving code branches and deployment issues.</li>
                  <li>Gained practical knowledge of agile software development processes.</li>
                </ul>
                
                <a 
                  href="/files/Bhanu-Yadav-internship-letter.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-button"
                  style={{ display: 'inline-flex', padding: '10px 20px', fontSize: '0.85rem' }}
                >
                  Verify Internship Letter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
