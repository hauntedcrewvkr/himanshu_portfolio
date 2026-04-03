import React, { useState, useRef } from 'react';
import { SendIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
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
        setStatus('success');
        setIsSending(false);
        e.target.reset();
      }, (error) => {
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
          </form>

          {/* Button moved OUTSIDE form but INSIDE container */}
          <button 
            type="submit" 
            form="contact-form-id"
            onClick={() => form.current.requestSubmit()}
            className={`btn btn-primary send-btn ${isSending ? 'btn-loading' : ''}`}
            disabled={isSending}
          >
            {isSending ? 'Transmitting...' : 'Send Signal'} 
            {!isSending && <SendIcon size={16} strokeWidth={1.5} style={{ marginLeft: '12px' }} />}
          </button>

          {status && (
            <div className={`status-msg-absolute ${status}`}>
              {status === 'success' ? <CheckCircleIcon size={14} strokeWidth={1.5} /> : <AlertCircleIcon size={14} strokeWidth={1.5} />}
              {status === 'success' ? 'Signal received.' : 'Failed.'}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
