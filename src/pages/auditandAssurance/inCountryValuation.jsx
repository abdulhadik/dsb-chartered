import React from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";
import {Link} from 'react-router-dom'
export default function InCountryValuation(props) {
  return (
    <div>
         <div className="AuditHero inCountry">
        <div className="AuditHero-text">
        <h4>Audit And Assurance</h4>
          <h1>In Country Valuation (ICV)</h1>
        </div>
        
      </div>
      <div className="whoweare-container">
        <div className="whoweare-text">
          <h2>In Country Valuation (ICV) in UAE</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11">
                <p className="mb-5 whoweare-p">
                The In-Country Value (ICV) program was first launched in 2017 for Abu Dhabi National Oil Company (ADNOC) Group Companies to achieve key goals such as Emiratization, GDP Diversification and Strategic considerations. In the subsequent years, different Government and semi-Government Companies joined the program to broaden the scope of the ICV certification process as a Unified ICV program for Suppliers across various sectors in Abu Dhabi and the UAE.
                  <br></br>
                  <br></br>
                  In the latter half of 2021, the Unified ICV program has been transformed into the National In-Country Value Program (ICV) by the Ministry of Industry and Advanced Technology (MoIAT) to enhance the performance of various sectors. The initiative aims to fulfil its goals by boosting the contribution of the local industries to the national GDP and promoting local companies. As part of the program, the Ministry Certifying Bodies will issue an ICV certificate to suppliers which evaluates their contribution to the local economy of the UAE. The certified suppliers get preference during the award of contracts and purchases based on their ICV score. ICV Certificates are used by the Participating entities in evaluating their tenders for procurement.
                  <br></br>
                  <br></br>
                  The key strategic partners of the national ICV certification program include government entities and national companies such as the Abu Dhabi Department of Economic Development (ADDED), Abu Dhabi National Oil Company (ADNOC) and Aldar Properties. Suppliers need to declare their ICV achievement or ICV certificate concerning the previous financial year. The ICV assessment should be certified by one of the Certifying Bodies on an annual basis. Consult with providers of ICV certification services in Dubai to leverage the National ICV program.
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
          <h2>Key Objectives of In Country Valuation (ICV) Program</h2>
          <p>
          The National ICV certification program has been envisioned to boost the growth of local industries by reducing the dependence on imports and launching other initiatives such as financing incentives. The ICV program aims to support the national industry and redirect amounts spent in procuring goods and services towards the national economy. The major objectives of the program are:
          </p>
          <ul>
            <li>
            Strategic supply chain localisation and development of new local industries & services
            </li>
            <li>Encouraging and attracting foreign investments, diversifying the economy, and boosting exports</li>
            <li>Generating private-sector job opportunities of great value</li>
            <li>Contributing to national GDP growth</li>
            <li>Boost the spending on R&D and advanced technology</li>
            <li>Boost the contribution of the private sector’s to the UAE GDP</li>
          </ul>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Companies that Require ICV Certification  </h2>
          <p>
          Companies inside or outside the UAE are eligible to apply for an ICV Certification per the ICV guidelines.  ICV certification is required for all companies that wish to apply to governmental and semi-governmental procurements. The ICV factor accounts for a certain weightage in tender evaluation. However, this is not a mandatory requirement.            
          
          <br></br>
          <br></br>
          The Tier 1 suppliers (suppliers directly providing goods or services to the Partners of the Program) may have to declare their ICV Score because it’s an essential part of their tender evaluation and award process. Suppliers belonging to the Tier 2 category and below also need to present their ICV Certificate to ensure competitiveness in their tenders with Tier 1 suppliers.
          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Issuance of ICV Certification </h2>
          <p>
          Professional firms authorised by the <a href="https://moiat.gov.ae/en/">MoIAT</a> carry out the verification and issuance of the ICV Certificate. These professional firms are called Certifying Bodies, which provide ICV certification services in Dubai and across the UAE.
          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Key Metrics to Determine the ICV Score </h2>
          <p>
          The ICV score of a company reflects its value-add within the UAE economy. Moreover, the ICV score is represented as a percentage. Availing of ICV Certification services in Dubai can make things easier for the companies. The authorities determine the ICV score of companies based on the following parameters:
          </p>
          <ul>
            <li>
            Goods Manufactured
            </li>
            <li>Third-Party Spend</li>
            <li>Investment</li>
            <li>Investment – Top-up</li>
            <li>Manpower – Emiratization</li>
            <li>Manpower – Expats</li>
            <li>Additional Bonus – Revenue from Outside UAE, Emirati Head Count & Investment Growth</li>
          </ul>
        </div>
      </div>
      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>Choose the best ICV Certification Services in Dubai, UAE</p>
          </div>
          <Link  to={"/contact"}
                    style={{ textDecoration: "none" }}><button>Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
}
