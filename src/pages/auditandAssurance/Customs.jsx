import React, { useEffect } from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";
import { Link } from "react-router-dom";
export default function Customs(props) {
  return (
    <div>
      <div className="AuditHero internal">
        <div className="AuditHero-text">
          <h4>Taxation</h4>
          <h1>Customs</h1>
        </div>

        <div className="Audit-links">
          <h5>Taxation</h5>
          <ul>
            <Link to="/audit-and-assurance">
              <li>Vat Consultancy</li>
            </Link>
          </ul>
          <ul>
            <Link to="/statutory-audit">
              <li>International Taxation</li>
            </Link>
          </ul>
          <ul>
            <Link to="/internal-audit">
              <li>Excise Duty</li>
            </Link>
          </ul>
          <ul>
            <Link to="/liquidation-report">
              <li>Customs</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="whoweare-container">
        <div className="whoweare-text">
          <h2>Customs Duty in the UAE</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11 audit-text">
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
                <ol>
                  <li>
                    5% on CIF value of all foreign goods imported from outside
                    of the Customs Union
                  </li>
                  <li>
                    Ad valorem or specific duty of 100% on value or quantity/
                    weight, whichever is higher, on tobacco and related products
                  </li>
                  <li>50% on Alcohol Products </li>
                </ol>
                
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
      <div className="audit-container conclu-container">
        <div className="audit-text">
        <p>
                  Businesses licensed by a competent authority in UAE or in the
                  GCC states can register their business with the Customs
                  Department specifying the type of business they operate. The
                  company will be provided with a unique identification code
                  upon registration, which is associated with the validity of
                  the license.
                
                <br></br>
                <br></br>
               
                  Registered businesses need to file detailed customs
                  declarations to clear the goods and approval from Tax
                  Authority, wherever required, also needs to be submitted to
                  the Customs Authority.
                
                <br></br>
                <br></br>
                
                  The Customs Authority conducts Customs Audit on all
                  transactions to ensure compliance of Law. This audit can be
                  initiated by the Customs Department or by the registered
                  entity. Conducting regular audits will safeguard businesses
                  from fines and penalties as all records would be reconciled.
               
                <br></br>
                <br></br>
                
                  All documents related to Customs Declaration are to be
                  retained for a period of 5 years from the date of clearance.
                  Customs may demand all the Declaration-related documents such
                  as contracts, correspondence, and other relevant documents
                  without having to accept all that is stated in the declaration
                  or in the Invoices. However, the documents related to the Free
                  zone Customs Declaration shall be required to retain until the
                  economic operations are being carried out in free zones.{" "}
                </p>
        </div>
      </div>
      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>Customs Duty Specialists in Dubai, UAE.</p>
          </div>
          <button>GET A QUOTE</button>
        </div>
      </div>
    </div>
  );
}
