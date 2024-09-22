import React, { useEffect } from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import { Card } from "flowbite-react";
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";
export default function AuditAndAssurance(props) {
  return (
    <div>
      <div
  className="AuditHero"
>
        <div className="AuditHero-text">
        <h4>Audit And Assurance</h4>
          <h1>Due Diligence Audit</h1>
        </div>
        <div className="Audit-links">
        <h5>Audit And Assurance</h5>
        <ul><Link to='/audit-and-assurance'><li>Due Diligence Audit</li></Link></ul>
        <ul><Link to='/statutory-audit'><li>Statuatory Audit</li></Link></ul>
        <ul><Link to='/internal-audit'><li>Internal Audit</li></Link></ul>
        <ul><Link to='/liquidation-report'><li>Liquidationion Report</li></Link></ul>
        <ul><Link to='/in-country-valuation'><li>In Country Audit</li></Link></ul>

        </div>
        
      </div>
      <div className="whoweare-container">
        <div className="whoweare-text">
          <h2>Due Diligence services In Dubai UAE</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11">
                <p className="mb-5 whoweare-p">
                  Successful business transactions are the ones, which have
                  undergone detailed and thorough due diligence processes. The
                  process of due diligence in Dubai is generally done to help a
                  potential buyer determine whether the property is worth
                  investing in or not. There are a number of due diligence
                  processes to be carried out when it comes to an acquisition
                  scenario.
                  <br></br>
                  <br></br>
                  Some of the most important due diligence processes that are
                  carried out are business due diligence, financial due
                  diligence, and legal due diligence. If you have no clear idea
                  about these three processes, it is best to get in touch with
                  professional Due diligence services In Dubai UAE.
                  <br></br>
                  <br></br>
                  The process of business due diligence involves reviewing operational
            aspects of a business. The business due diligence process is usually
            undertaken by experts in the industry who will be retained by the
            buyer of the property.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <img
              className="img-fluid rounded"
              loading="lazy"
              src={WhoWeAreImg}
              alt="About 1"
            />
          </div>
        </div>
        
      </div>
      <div className="audit-container ">
      <div className="audit-text">
      <h2>Why Due Diligence In The UAE Indispensable</h2>
          <p>
          If you are still wondering why due diligence processes are indispensable in UAE or Dubai, seek the help of Due diligence specialists in UAE, as they will help you understand why. It is important to remember that undertaking a due diligence process will make it easy for the buyer to evaluate the target’s business.
            <br></br>
            <br></br>
            This will in turn help the buyer to identify the accurate or suitable price to procure a stake in the business. Another added advantage of undertaking a due diligence process is that it will help the buyer to get a clear understanding of the nature of the business he is investing in.
          </p>
        </div>
        </div>
      <div className="audit-container conclu-container">
      <div className="audit-text">
      <h2>Conclusion</h2>
          <p>
          In simple words, conducting due diligence will make it possible for the buyer to make an informed buying decision. Moreover, this will also allow the buyer to determine potential risks and mitigate them by ensuring he/she has tailored protections in the business transaction documents. If you want to know more about Due diligence in Dubai, you should consider seeking the help of expert professionals.
          </p>
        </div>
        </div>
        <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>
            Partner with the Top !
            </h1>
            <p>Due Diligence Specialists in Dubai, UAE.</p>
          </div>
          <button>GET A QUOTE</button>
        </div>
      </div>
    </div>
  );
}
