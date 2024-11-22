import React from "react";
import "./Footer.css";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="details-container">
        <div className="details-services">
          <h3>Links</h3>
          <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            {" "}
            <p>Home</p>
          </Link>
          <Link
            to={"/events-and-webinar"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <p>Upcoming Webinars & Events</p>
          </Link>
          <Link
            to={"/completed-events-webinar"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <p>Completed Webinars & Events</p>
          </Link>
          <Link
            to={"/newsletter"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <p>Newsletters</p>
          </Link>
          <Link
            to={"/contact"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <p>Contact Us</p>
          </Link>
        </div>
        <div className="details-company">
          <h3>Services</h3>
          <p>Accounting & finacial Reporting</p>
          <p>Taxation</p>
          <p>Statuatory Compliances</p>
          <p>CFO Services</p>
          <p>Business Valuation </p>
          <p>Business Services</p>
        </div>
        <div className="details-help">
          <div className="details-office">
            <h3>Corporate office</h3>
            <p>
              Prime Tower - C-1 31st Floor<br className="hide-on"></br>Business
              Bay - Dubai
            </p>
            <p>+971 054 467 7219</p>
            <p>info@dsbchartered.com</p>
          </div>
          <Link to={"/contact"} style={{ textDecoration: "none" }}>
            <button className="button-36">Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="footer-social">
        <a
          href="https://www.linkedin.com/company/dsbchartered/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#838181", fontSize: "30px" }}
          />
        </a>
        <a
          href="https://www.instagram.com/dsbcharteredaccountants?igsh=MWgzdTJ1bDRlZGZmaw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#838181", fontSize: "30px" }}
          />
        </a>
      </div>
      <div className="terms-container">
        <p>Copyright © 2024 DSB Chartered Accountants Group</p>
      </div>
    </div>
  );
}
