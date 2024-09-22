import React, { useEffect } from "react";
import "./ContactUs.css";
export default function ContactUs() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="flex flex-column items-center justify-center h-[100vh] pt-[100px] contactus-hero font-poppins ">
        <h1 className="text-[55px]">Contact US</h1>
      </div>
      <div className="contact-container">
        <div className="contact-main">
          <div className="contact-address">
            <h2 className="title-Address">Address</h2>
            <p className="address-name">DSB CHARTERED ACCOUNTANTS GROUP</p>
            <p>
              Prime Tower - C-1 31st Floor <br></br>Business Bay - Dubai
            </p>
            <p>+971 054 467 7219</p>
            <p>info@dsbchartered.com</p>
            {/* Add your address details here */}
          </div>
          <div className="contact-map">
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
    </div>
  );
}
