import React, { useEffect } from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";
export default function StatutoryAudit(props) {
  return (
    <div>
        <div
  className="AuditHero statutory"
>
        <div className="AuditHero-text">
        <h4>Audit And Assurance</h4>
          <h1>Statutory Audit</h1>
        </div>
        
      </div>
      <div className="whoweare-container">
        <div className="whoweare-text">
          <h2>Statutory Audit Services In Dubai UAE</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11">
                <p className="mb-5 whoweare-p">
                It is not an easy matter for any business to conduct any kind of Audit. There are many steps and prerequisites which the management should keep in mind before conducting the audits. Also, there are many different types of Audit to choose from, and Statutory Audit is one of them. It is an audit in which is legally required to be conducted by a business which is enforced by the statutes of law or is mandated by the law. All the financial documents of hte company are then analysed and teh compliance for each of report is checked.
                  <br></br>
                  <br></br>
This type of Audit is usually done to help the public as all the findings of the audit are made public in the end. This helps the general public and the other investor of the company to make informed decisions regarding investment in the company. A Statutory audit in UAE can be most frequently seen in the public sector of a business. The Statutory Auditors are selected by the shareholders in a general meeting for a duration ranging from 3 years to 5 years
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
          <h2>Who can perform a Statutory Audit?</h2>
          <p>
          A statutory audit can be conducted by any business which fulfils particular prerequisites as mentioned by the auditing authority. The management can also conduct a statutory audit if it has been deemed mandatory by any authority or if it is mandated by a statute in the jurisdiction
            <br></br>
            <br></br>
            The primary purpose of a statutory audit is to examine if the particular organization provides complete and fair information about its finances. It helps in determining the financial position of the business is and also ensures that there is no illegal or wrong activity being conducted in the business whcih can hamper the interest of the stake holders. For conducting the financial audit of a company, there are certain prerquisits which the company needs to fulfill.
          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2> DSB Statutory Audit Services in UAE</h2>
          <p>
          DSB Auditors perform statutory Audit, which is essentially a review of the final statements of the company, including the Profit and Loss Statement and the Balance Sheet. We assist our clients in keeping accurate financial records in doing statutory Audits. Our auditors are licensed and registered with the proper authorities to perform statutory audits.
          </p>
        </div>
      </div>
      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>Statutory Audit Specialists in Dubai, UAE.</p>
          </div>
          <Link  to={"/contact"}
                    style={{ textDecoration: "none" }}><button>Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
}
