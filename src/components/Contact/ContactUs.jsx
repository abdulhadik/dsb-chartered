import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'react-hot-toast'; 
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome, faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9bgxuqk", "template_vxf4xe2", form.current, {
        publicKey: "5lOPQnidJ8HKp17uQ",
      })
      .then(
        () => {
          toast.success("Message sent successfully!"); 
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <Toaster /> 
      <section>
        <div className="section-header">
        <div className="heading">
        <br></br>
        <br></br>
            <h2>Contact Us</h2>
            <br></br>
        <br></br>
          </div>
        </div>

        <div className="container font-poppins">
          <div className="row">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FontAwesomeIcon className="fas" icon={faHome} style={{ color: "#673FD7" }} />
                </div>
                <div className="contact-info-content">
                  <h4>Address</h4>
                  <p>
                    DSB CHARTERED ACCOUNTANTS GROUP
                    <br />
                    Prime Tower - C-1 31st Floor
                    <br />
                    Business Bay, Dubai
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FontAwesomeIcon className="fas" icon={faPhone} style={{ color: "#673FD7" }} />
                </div>
                <div className="contact-info-content">
                  <h4>Phone</h4>
                  <p>+971 544 677 219</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FontAwesomeIcon className="fas" icon={faEnvelope} style={{ color: "#673FD7" }} />
                </div>
                <div className="contact-info-content">
                  <h4>Email</h4>
                  <p>info@dsbchartered.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FontAwesomeIcon icon={faLink} style={{ color: "#673FD7" }} />
                </div>
                <div className="contact-info-content">
                  <h4>Social</h4>
                  <div className="contact-social">
                    <a
                      href="https://www.linkedin.com/company/dsbchartered/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedin} style={{ color: "#673FD7", fontSize: "40px" }} />
                    </a>
                    <a
                      href="https://www.instagram.com/dsbcharteredaccountants?igsh=MWgzdTJ1bDRlZGZmaw%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} style={{ color: "#673FD7", fontSize: "40px" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <h2>Send Message</h2>
                <div className="input-box">
                  <input type="text" name="from_name" required />
                  <span>Full Name</span>
                </div>

                <div className="input-box">
                  <input type="email" name="user_email" required />
                  <span>Email</span>
                </div>
                <div className="input-box">
                  <input type="tel" name="user_phone" required />
                  <span>Phone</span>
                </div>

                <div className="input-box">
                  <textarea name="message" required></textarea>
                  <span>Type your Message...</span>
                </div>

                <div className="input-box">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-map">
        <div className="contact-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.095518738302!2d55.271516399999996!3d25.1884074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x27b6f0b0bff09421%3A0xc2304437c6ae2b7b!2sDSB%20Chartered%20Accountants!5e1!3m2!1sen!2sae!4v1726505657159!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
