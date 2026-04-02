import React, { useState, useRef } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        setIsSending(false);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('error');
        setIsSending(false);
      });
  };

  return (
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
          <form className="minimal-form" ref={form} onSubmit={sendEmail}>
            <div className="form-grid">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Full Name" required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="email@example.com" required />
              </div>
              <div className="input-group span-full">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
              </div>
              <div className="input-group span-full">
                <label htmlFor="message">Query</label>
                <textarea id="message" name="message" rows="5" placeholder="How can I help you?" required></textarea>
              </div>
            </div>
            
            <div className="form-footer">
              <button 
                type="submit" 
                className={`btn btn-primary send-btn ${isSending ? 'btn-loading' : ''}`}
                disabled={isSending}
              >
                {isSending ? 'Transmitting...' : 'Send Signal'} 
                {!isSending && <Send size={16} style={{ marginLeft: '12px' }} />}
              </button>

              {status === 'success' && (
                <div className="status-msg success">
                  <CheckCircle size={14} style={{ marginRight: '8px' }} /> Signal received successfully.
                </div>
              )}
              {status === 'error' && (
                <div className="status-msg error">
                  <AlertCircle size={14} style={{ marginRight: '8px' }} /> Transmission failed. Retry?
                </div>
              )}

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
};

export default Contact;
