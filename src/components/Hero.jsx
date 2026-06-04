import React, { useState, useEffect, useMemo } from 'react';
import Modal from './Modal';

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  
  // Dynamic typing state
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = useMemo(() => ["Java Full Stack Developer", "Spring Boot Specialist", "MERN Developer"], []);
  
  useEffect(() => {
    let timer;
    const activeRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && currentText === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting 
          ? activeRole.substring(0, currentText.length - 1)
          : activeRole.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="hero">
      {/* Dynamic Background Glowing Blobs */}
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>

      <div className="hero-content container-width">
        <div className="hero-copy">
          <p className="hero-greeting">Welcome to my space</p>
          <h1>Bhanu Pratap Yadav</h1>
          <h2>
            I'm a <span className="typing-text">{currentText}</span>
            <span className="typing-cursor"></span>
          </h2>
          
          <p className="hero-tagline">
            Building scalable, high-performance web applications using Java, Spring Boot, React.js, and MySQL. 
            Focused on secure backend systems and pixel-perfect interactive frontends.
          </p>

          <div className="hero-contact">
            <div className="hero-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Uttar Pradesh, India</span>
            </div>
            <div className="hero-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:bhanuy9648@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>bhanuy9648@gmail.com</a>
            </div>
            <div className="hero-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href="tel:+917617896131" style={{ color: 'inherit', textDecoration: 'none' }}>+91 76178 96131</a>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="cta-button">View Projects</a>
            <a href="/files/Bhanu-Pratap-Yadav-CV.pdf" className="cta-outline" download>Download CV</a>
            <a 
              href="https://github.com/bhanuy9648-cell" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/bhanu-pratap-yadav-" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <button 
              type="button" 
              className="cta-button" 
              style={{ background: 'var(--secondary-glow)' }}
              onClick={() => setModalOpen(true)}
            >
              Interactive Preview
            </button>
          </div>
        </div>

        <div className="hero-photo">
          <div className="hero-image-wrapper">
            <img src="/images/BP.jpeg" alt="Bhanu Pratap Yadav" className="hero-image" />
          </div>
        </div>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Bhanu Pratap Yadav"
        subtitle="Java Full Stack Developer Overview"
      >
        <div className="modal-grid">
          <div className="modal-card-block">
            <h3>Full-Stack Competence</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '12px' }}>
              Specialized in developing end-to-end applications:
            </p>
            <ul>
              <li>Spring Boot, Hibernate, Java Enterprise</li>
              <li>React.js SPA Development & State Context</li>
              <li>MySQL Database design and indexing</li>
            </ul>
          </div>
          <div className="modal-card-block">
            <h3>Key Qualifications</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '12px' }}>
              Academics, tools, and certifications:
            </p>
            <ul>
              <li>BCA Student (80% GPA indicator)</li>
              <li>Software Engineer Internship (8 months)</li>
              <li>Full Stack certifications (Java, MERN, Python)</li>
            </ul>
          </div>
        </div>
        <p className="modal-note">
          My portfolio is fully responsive, supporting seamless rendering on tablets and mobile screens. 
          Use the form below or contact me directly to discuss your project requirements!
        </p>
        <div className="modal-footer">
          <a href="#contact" className="cta-button" onClick={() => setModalOpen(false)}>
            Get In Touch
          </a>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
