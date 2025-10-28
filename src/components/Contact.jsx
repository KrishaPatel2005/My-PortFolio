import React from "react";
import "../index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect and Collaborate!</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-description">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:krishappatel285@gmail.com">
                  krishappatel285@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <span>+1 (437) 778-8548</span>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>Toronto, Ontario, Canada</span>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/krisha-patel-bba0492a5/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href="https://github.com/KrishaPatel2005"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="mailto:krishappatel285@gmail.com"
                className="social-link"
                title="Email"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" id="name" placeholder=" " required />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="form-group">
              <input type="email" id="email" placeholder=" " required />
              <label htmlFor="email">Your Email</label>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                rows="6"
                placeholder=" "
                required
              ></textarea>
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit" className="form-submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
