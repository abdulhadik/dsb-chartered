import React from "react";
import "./Expertise.css";
import businessIcon from "../../images/businessIcon.png";
import calculatorIcon from "../../images/calculatorIcon .png";
import documentIcon from "../../images/documentIcon.png";
import internalIcon from "../../images/internalIcon.png";

const expertiseData = [
  {
    icon: internalIcon,
    title: "Internal Audit Services in Dubai",
    description: "Accounting and Financial Reporting Services in the UAE: Recording the transactions of a company is an integral factor that contributes to the growth of the company.",
    link: "./"
  },
  {
    icon: calculatorIcon,
    title: "External Audit Services in Dubai",
    description: "An audit simply refers to examine and give comments on the items verified. Financial audit implies an examination of the books of accounts...",
    link: "./"
  },
  {
    icon: documentIcon,
    title: "Tax Agent Services in Dubai",
    description: "A tax agent is an individual registered with the Federal Tax Authority (FTA) in the UAE. Such Registered Tax Agent in the UAE...",
    link: "./"
  },
  {
    icon: businessIcon,
    title: "Business Setup Services in Dubai",
    description: "Company Formation in the UAE: The United Arab Emirates (UAE) is a business hub for international trade. The country is a federation of seven Emirates.",
    link: "./"
  }
];

const Expertise = () => {
  return (
    <div className="expertise-container">
      <div className="expertise-text">
        <h2>Areas of expertise</h2>
        <p>Our Core service expertise as leading Audit Firm in Dubai, UAE</p>
      </div>
      <ExpertiseCard expertiseData={expertiseData} />
    </div>
  );
};

const ExpertiseCard = ({ expertiseData }) => {
  return (
    <div className="expertise-card-container">
      {expertiseData.map((item, index) => (
        <div className="expertise-card" key={index}>
          <div className="icon-heading">
            <img src={item.icon} alt={item.title} />
            <h3 className="expertise-card-h2">{item.title}</h3>
          </div>
          <p className="expertise-card-p">{item.description}</p>
          <a href={item.link}>+ Read More</a>
        </div>
      ))}
    </div>
  );
};

export default Expertise;
