import React from "react";
import Carousel from "../../components/carousel/Carousel";
import WhatWeDo from "../../components/what-we-do/WhatWeDo";
import "./Main.css";
import Expertise from "../../components/expertise/Expertise.jsx";
import CodeOfEthics from "../../components/codeOfEthics/CodeOfEthics.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import CodeOfEthicsImg from "../../images/codeofethics.jpg";
import Logo from "../../components/logos/Logo.jsx";

import WhoWeAre from "../../components/whoWeAre/WhoWeAre.jsx";
function Main() {
  return (
    <div className="main-container">
      <div className="main-first">
        <Carousel className="custom-carousel" />
      </div>
      <WhoWeAre />
      <div className="team-container">
        <div className="team-text">
          <h2>Our Team</h2>
          <p>
            DSB Chartered Accountants have highly qualified and experienced
            professionals in the field of Chartered Accountancy and Management
            Consultancy. Committed to adding value to the organization and
            enhancing the benefits to the clients led by our Founder and CEO,
            Satya Bharath Damaraju, He is a CFA, FCA, ACMA & FTA Tax Agent. He
            has 14+ years of overall experience, while 7+ in UAE. He has
            authored Books on India GST, UAE Corporate Tax.
          </p>
        </div>
      </div>
     
      <CodeOfEthics />
      <Expertise />
      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>
              Looking For Professional<br></br> Audit Firm In Dubai, UAE?
            </h1>
            <p>To ensure clients progress financially and Socially</p>
          </div>
          <Link  to={"/contact"}
                    style={{ textDecoration: "none" }}><button>Contact Us</button></Link>
        </div>
      </div>{" "}
      {/* Closing tag for the div with className="call" */}
      <Logo />
      
      
    </div>
  );
}

export default Main;
