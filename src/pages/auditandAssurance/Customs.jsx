import React from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";
import {Link} from 'react-router-dom'
export default function Customs(props) {
  return (
    <div>
         <div className="AuditHero inCountry">
        <div className="AuditHero-text">
        <h4>Taxation</h4>
          <h1>Customs Duty in UAE</h1>
        </div>
        
      </div>
      <div className="whoweare-container">
        <div className="whoweare-text">
          <h2>Customs Duty in UAE</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11">
              <p className="mb-5 whoweare-p">
                  Customs is a tax imposed on goods imported from international
                  borders and is collected at the first point of entry of the
                  GCC States. Customs in UAE operate under the Common Customs
                  Law of the GCC states and other rules and regulations in line
                  with the provision of International Agreements relating to
                  Customs. <br></br>
                  <br></br>
                  The customs duty rates on imported goods are fixed at Ad
                  Valorem Terms i.e., the customs duty is calculated on a
                  percentage of the CIF value of the goods, or on Specific duty
                  wherein the import duty is calculated on a quantitative
                  description of the goods. The customs duty in UAE on foreign
                  goods originated and imported from non-GCC countries are:
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
          
          <h2>Customs Duty Rates on Imported Goods</h2>
          <p>
          The customs duty rates on imported goods are:          </p>
          <ul>
            <li>
            1. 5% on CIF (Cost, Insurance, and Freight) value of all foreign goods imported from outside the Customs Union.
            </li>
            <li>2. 100% ad valorem or specific duty (whichever is higher) on the value or quantity/weight for tobacco and related products.</li>
            <li>3. 50% duty on alcohol products.</li>
            
          </ul>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Business Registration with the Customs Department  </h2>
          <p>
          Businesses licensed by a competent authority in the UAE or other GCC states can register with the Customs Department by specifying the type of business they operate. Upon registration, the business will be provided with a unique identification code, linked to the validity of the license.          
          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Customs Declaration Filing</h2>
          <p>
          Registered businesses are required to file detailed customs declarations to clear goods. In cases where approval from the Tax Authority is necessary, it must also be submitted to the Customs Authority for proper clearance.          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Customs Audits and Compliance </h2>
          <p>
          The Customs Authority conducts audits on all transactions to ensure compliance with the law. Audits can be initiated by the Customs Department or requested by the registered entity. Regular audits help businesses avoid fines and penalties by keeping records reconciled.          </p>
          
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Document Retention Requirements </h2>
          <p>
          All documents related to customs declarations must be retained for 5 years from the date of clearance. The Customs Authority may request relevant documents such as contracts and correspondence, regardless of the information stated in the declarations or invoices.

For Free Zone Customs Declarations, documents must be retained until the completion of the economic operations in the free zone.</p>          
        </div>
      </div>
      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>Choose the best Customs Duty Services in Dubai, UAE</p>
          </div>
          <Link  to={"/contact"}
                    style={{ textDecoration: "none" }}><button>Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
}
