import React from 'react';
import { Send } from 'lucide-react';

const Contact = () => (
  <section id="contact" style={{ borderBottom: 'none' }}>
    <div className="container">
      <div className="contact-header-centered">
        <span className="label-mono">05 // Initialize Connection</span>
        <h2>Let's build the future together.</h2>
        <p className="body-text">
          Available for select freelance opportunities and full-time architectural roles.
        </p>
      </div>

      <div className="form-container-centered">
        <form className="minimal-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-grid">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Full Name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="email@example.com" required />
            </div>
            <div className="input-group span-full">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="What's this about?" required />
            </div>
            <div className="input-group span-full">
              <label htmlFor="message">Query</label>
              <textarea id="message" rows="5" placeholder="How can I help you?" required></textarea>
            </div>
          </div>
          
          <div className="form-footer">
            <button type="submit" className="btn btn-primary send-btn">
              Send Signal <Send size={16} style={{ marginLeft: '12px' }} />
            </button>
            <div className="contact-meta-footer">
              <span>LOC: DELHI_IN</span>
              <span className="sep">//</span>
              <span>TEL: +91 8826331186</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
