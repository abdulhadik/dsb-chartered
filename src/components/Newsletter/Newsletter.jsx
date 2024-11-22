import React, { useEffect, useRef } from "react";
import './Newsletter.scss';
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'react-hot-toast';

export default function Newsletter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y0w7yzo", "template_hoix1vp", form.current, {
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
    <div>
      <Toaster />
      <div className="wrapper">
        <div className="center-div">
          <div className="heading">
          <br></br>
          <br></br>
            <h2>Get your Newsletter now</h2>
            <h2>and step into</h2>
            <br></br>
          <br></br>
          </div>
          <form className="form-content" ref={form} onSubmit={sendEmail}>
            <div className="form-input">
              <div className="form-input-group">
                <input placeholder="NAME" name="from_name" required />
                <label htmlFor="firstName" className="placeholder-label">
                  Name
                </label>
              </div>
              <div className="form-input-group">
                <input placeholder="Phone" name="user_phone" required />
                <label htmlFor="number" className="placeholder-label">
                  Phone
                </label>
              </div>
            </div>
            <div className="form-input">
              <input placeholder="EMAIL" name="user_email" required />
              <label htmlFor="email" className="placeholder-label">
                Email
              </label>
            </div>
            <div className="form-input">
              <textarea
                rows="8"
                name="message"
                placeholder="YOUR MESSAGE"
                required
              ></textarea>
              <label htmlFor="message" className="placeholder-label">
                Your Message
              </label>
            </div>
            <button type="submit" className="btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
