import React from "react";
import Carousel from "../../components/carousel/Carousel";
// import Brand from "../../components/brand/Brand";
import { brandDetails} from "../../components/data";
import WhatWeDo from "../../components/what-we-do/WhatWeDo";
import "./Main.css";
import Expertise from '../../components/expertise/Expertise.jsx'
import Testimonials from "../../components/testimonials/Testimonials.jsx";  // Correct path and case
import CustomCard from "../../components/card/Card.jsx";
// import Table from '../../components/table/Table.jsx';
import Logo from '../../components/logos/Logo.jsx';


const Main = () => {
  return (
    <div>
      <div className="main-first">
        <Carousel className="custom-carousel" />
       
      </div>
      
      <div className="company-profile">
        <h3>DSB CHARTERED ACCOUNTANTS</h3>
        <h1>Audit, Tax, Accounting & Businees advisory firm in Dubai, UAE.</h1>
        <p>
          DSB Chartered Accountants is a comprehensive financial services
          provider that specializes in - Accounting & Bookkeeping Auditing*{" "}
          (through Associates) UAE VAT UAE Corporate Tax Transfer
          Pricing International Taxation Anti-Money Laundering (AML) Commercial
          Laws Secretarial Compliances Economic Substance Regulations (ESR)
          Ultimate Beneficial Ownership (UBO) compliance Financial Consulting
          Tax Compliance Corporate Governance Financial Planning Risk Management
          Financial Analysis Business Strategy Regulatory Compliance
          Financial Reporting
        </p>
      </div>

      <WhatWeDo />
      <Expertise/>
      <Logo/>
      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>
              Looking For Professional<br></br> Audit Firm In Dubai, UAE?
            </h1>
            <p>To ensure clients progress financially and Socially</p>
            
            
          </div>
          <button>GET A QUOTE</button>
        </div>
      </div>
      <Testimonials/>
      <CustomCard/>
     
      </div>
  );
};

export default Main;
