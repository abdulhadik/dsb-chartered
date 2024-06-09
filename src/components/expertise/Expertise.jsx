import React from "react";
import "./Expertise.css";
import businessIcon from "../../images/businessIcon.png";
import calculatorIcon from "../../images/calculatorIcon .png";
import documentIcon from "../../images/documentIcon.png";
import internalIcon from '../../images/internalIcon.png';
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Expertise = () => {
  return (
    <div className="expertise-container">
      <div className="expertise-text">
        <h2>AREAS OF EXPERTISE</h2>
        <p>Our Core service expertise as leading Audit Firm in Dubai, UAE</p>
      </div>
      <ExpertiseCard />
    </div>
  );
};

export default Expertise;

const buttonStyle = {
  background: "none",
  border: "none",
  color: "black",
  cursor: "pointer",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </button>
  ),
};

const ExpertiseCard = () => {
  return (
    <div className="expertise-slide-container">
      <Slide
        {...properties}
        autoplay={false}
        onChange={function noRefCheck() {}}
        onStartChange={function noRefCheck() {}}
      >
        <div className="each-slide-effect">
          <div className="expertise-card-contaner">
            <div className="expertise-card">
              <div className="icon-heading">
                <img src={internalIcon} alt="" />
                <h3 className="expertise-card-h2">
                  Internal Audit Services in Dubai
                </h3>
              </div>
              <p className="expertise-card-p">
                Accounting and Financial Reporting Services in the UAE:
                Recording the transactions of a company is an integral factor
                that contributes to the growth of the company.
              </p>
              <a href="./">+ Read More</a>
            </div>
            <div className="expertise-card">
              <div className="icon-heading">
                <img src={calculatorIcon} alt="" />
                <h3 className="expertise-card-h2">
                  External Audit Services in Dubai
                </h3>
              </div>
              <p className="expertise-card-p">
                An audit simply refers to examine and give comments on the items
                verified. Financial audit implies an examination of the books of
                accounts...
              </p>
              <a href="./">+ Read More</a>
            </div>
            <div className="expertise-card">
              <div className="icon-heading">
                <img src={documentIcon} alt="" />
                <h3 className="expertise-card-h2">
                  Tax Agent Services in Dubai
                </h3>
              </div>
              <p className="expertise-card-p">
                A tax agent is an individual registered with the Federal Tax
                Authority (FTA) in the UAE. Such Registered Tax Agent in the
                UAE...
              </p>
              <a href="./">+ Read More</a>
            </div>
            <div className="expertise-card">
              <div className="icon-heading">
                <img src={businessIcon} alt="" />
                <h3 className="expertise-card-h2">
                  Business Setup Services in Dubai
                </h3>
              </div>
              <p className="expertise-card-p">
                Company Formation in the UAE: The United Arab Emirates (UAE) is
                a business hub for international trade. The country is a
                federation of seven Emirates
              </p>
              <a href="./">+ Read More</a>
            </div>
          </div>
        </div>
        <div className="second-slide">
        <div className="each-slide-effect">
            <div className="expertise-card-contaner">
              <div className="expertise-card">
                <div className="icon-heading">
                  <img src={documentIcon} alt="" />
                  <h3 className="expertise-card-h2">
                  Accounting Services in Dubai, UAE
                  </h3>
                </div>
                <p className="expertise-card-p">
                Accounting and Financial Reporting Services in the UAE: Recording the transactions of a company is an integral factor that contributes to the growth of the company.
                </p>
                <a href="./">+ Read More</a>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};
