import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API Submission
    console.log('Sending message:', formData);
    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Auto clear alert
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container container-width">
        <h2>Get In Touch</h2>
        <div className="contact-grid">
          
          {/* Contact Details Column */}
          <div className="contact-info">
            <div className="contact-card-glass glass-panel">
              
              <div className="contact-item-detail">
                <div className="contact-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="contact-lbl">Location</div>
                  <div className="contact-val">Jaunpur, Uttar Pradesh, India</div>
                </div>
              </div>

              <div className="contact-item-detail">
                <div className="contact-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="contact-lbl">Email Address</div>
                  <div className="contact-val">
                    <a href="mailto:bhanuy9648@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                      bhanuy9648@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-item-detail">
                <div className="contact-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-lbl">Phone Number</div>
                  <div className="contact-val">
                    <a href="tel:+917617896131" style={{ color: 'inherit', textDecoration: 'none' }}>
                      +91 76178 96131
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-wrapper glass-panel">
            {success && (
              <div className="success-alert">
                🚀 Message sent successfully! I will get back to you shortly.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Hi Bhanu, let's collaborate on a Java/Spring Boot project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="cta-button" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
