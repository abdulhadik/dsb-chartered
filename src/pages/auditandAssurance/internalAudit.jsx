import React, { useEffect } from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";
import {Link} from 'react-router-dom';
export default function InternalAudit(props) {
  return (
    <div>
        <div
  className="AuditHero internal">
        <div className="AuditHero-text">
        <h4>Audit And Assurance</h4>
          <h1>Internal Audit</h1>
        </div>
       
      </div>
      <div className="whoweare-container">
        <div className="whoweare-text">
          <h2>Internal Audit Services In Dubai UAE</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11">
                <p className="mb-5 whoweare-p">
                  Internal Audit Service is an independent, objective assurance
                  and consulting activity intended to add value and develop an
                  organization’s operations. Internal Audit helps a business to
                  achieve its objectives by bringing a methodical, meticulous,
                  and disciplined approach to assess and enhance the
                  effectiveness of risk management, control, and governance
                  processes.
                  <br></br>
                  <br></br>
                  Internal Auditing is an activity carried on by the internal
                  auditor to meet the management requirements of information. It
                  is an independent appraisal activity within an organization
                  for the review of operations as a service to the organization.
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
          <h2>Role of an Internal Auditor</h2>
          <p>
          Internal Auditor’s role is to provide Management with independent assurance on the organization’s internal controls, risk management strategies and governance are operating effectively. Internal Auditors’ function includes supervising, evaluating, investigating, and analyzing the risks & controls; checking and ensuring information and compliance with policies, procedures, and laws. Internal Auditor will assess the achievement of goals and objectives set by the Senior management. In the case of short of stated goals, the auditor will identify process gaps and make suggestions for improvement for bridging the same.
            
          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>The objectives of Internal Audit:</h2>
          <p>
          The objective of Internal Audit is to evaluate and improve the effectiveness of governance, risk management, and control process. The overall objective of internal auditing is to assist all members of the management in exuding their responsibilities. Also, to help them with objective analysis, recommendations, and relevant comments concerning any phase of business activity wherein they can be of service to management. In short, Internal Audit will help the management for:
          </p>
          <ul>
            <li>Assessing the Risk involved</li>
            <li>Assisting management in the evaluation of internal controls</li>
            <li>To bridge the gaps by strengthening the internal controls and to accomplish organizational objectives</li>
            <li>Evaluating process performance and managing risk effectively</li>
            <li>Help to find the deviations from KPI and to get proper recommendation/ suggestion for improvement</li>
            <li>To verify the fulfilment of plans and sound business requirements and also to focus on objectives</li>
            <li>To evaluate evidence in connection with the situation and issues</li>
          </ul>
        </div>
      </div>
      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>Internal Audit Specialists in Dubai, UAE.</p>
          </div>
          <Link  to={"/contact"}
                    style={{ textDecoration: "none" }}><button>Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
}
