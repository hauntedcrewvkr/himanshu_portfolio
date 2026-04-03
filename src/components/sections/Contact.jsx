import React, { useState, useRef } from 'react';
import { SendIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Magnetic from '../ui/Magnetic';

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
          <h2>Let's build the future together.</h2>
          <p className="body-text">
            Available for select freelance opportunities and full-time development roles.
          </p>
        </div>

        <div className="form-container-split">
          <form className="split-form" ref={form} onSubmit={sendEmail}>
            <div className="form-left">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Full Name" required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="email@example.com" required />
              </div>
              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
              </div>
            </div>

            <div className="form-right">
              <div className="input-group full-height">
                <label htmlFor="message">Query</label>
                <textarea id="message" name="message" placeholder="How can I help you?" required></textarea>
              </div>
            </div>
            
            <div className="form-footer-full">
              <button 
                type="submit" 
                className={`btn btn-primary send-btn ${isSending ? 'btn-loading' : ''}`}
                disabled={isSending}
              >
                {isSending ? 'Transmitting...' : 'Send Signal'} 
                {!isSending && <SendIcon size={16} strokeWidth={1.5} style={{ marginLeft: '12px' }} />}
              </button>

              {status === 'success' && (
                <div className="status-msg success">
                  <CheckCircleIcon size={14} strokeWidth={1.5} style={{ marginRight: '8px' }} /> Signal received successfully.
                </div>
              )}
              {status === 'error' && (
                <div className="status-msg error">
                  <AlertCircleIcon size={14} strokeWidth={1.5} style={{ marginRight: '8px' }} /> Transmission failed. Retry?
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
