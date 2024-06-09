import React from "react";
import Carousel from "../../components/carousel/Carousel";
import Brand from "../../components/brand/Brand";
import { brandDetails} from "../../components/data";
import WhatWeDo from "../../components/what-we-do/WhatWeDo";
import "./Main.css";
import Expertise from '../../components/expertise/Expertise.jsx'
import Testimonials from "../../components/testimonials/Testimonials.jsx";  // Correct path and case
import CustomCard from "../../components/card/Card.jsx";
// import Table from '../../components/table/Table.jsx';

function brands(brandDetail) {
  return (
    <Brand
      key={brandDetail.id}
      name={brandDetail.brandname}
      details={brandDetail.brandDetails}
    />
  );
}
const Main = () => {
  return (
    <div>
      <div className="main-first">
        <Carousel className="custom-carousel" />
        <div className="custom-brand"> {brandDetails.map(brands)}</div>
      </div>
      <div className="company-profile">
        <h3>DSB CHARTERED ACCOUNTANTS</h3>
        <h1>AUDIT, TAX, ACCOUNTING & BUSINESS ADVISORY FIRM IN DUBAI, UAE.</h1>
        <p>
          DSB Chartered Accountants is a comprehensive financial services
          provider that specializes in - Accounting & Bookkeeping Auditing*{" "}
          <br></br>(through Associates) UAE VAT UAE Corporate Tax Transfer
          Pricing International Taxation Anti-Money Laundering (AML) Commercial
          Laws Secretarial Compliances Economic Substance Regulations (ESR)
          Ultimate Beneficial Ownership (UBO) compliance Financial Consulting
          Tax Compliance Corporate Governance Financial Planning Risk Management
          Financial Analysis Business Strategy Regulatory <br></br>Compliance
          Financial Reporting
        </p>
      </div>
      <WhatWeDo />
      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>
              Looking For Professional<br></br> Audit Firm In Dubai, UAE?
            </h1>
            <button>GET A QUOTE</button>
            
          </div>
          <div className="right-call">
          <p>To ensure clients progress financially and Socially</p>
          </div>
        </div>
      </div>
      <Expertise/>
      <Testimonials/>
      <CustomCard/>
     
      </div>
  );
};

export default Main;
