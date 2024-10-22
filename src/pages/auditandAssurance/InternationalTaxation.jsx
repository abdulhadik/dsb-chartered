import React, { useEffect } from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";
import { Link } from "react-router-dom";
export default function InternationalTaxation (props) {
  return (
    <div>
      <div className="AuditHero internal">
        <div className="AuditHero-text">
          <h4>Taxation</h4>
          <h1>International Taxation</h1>
        </div>
        </div>
      <div className="whoweare-container">
        <div className="whoweare-text">
          <h2>International Taxation Consultants</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11 audit-text">
              <ul>
                <li>Do you have a business in two different countries?</li>
                <li>Have you structured your operating and holding companies considering the tax laws of each of the countries you have a business relationship in?</li>
                <li>Are you aware of the tax, accounting, and regulatory requirements of each jurisdiction where you have business relationships?</li>
                <li>Do you wish to expand your business globally?</li>
              </ul>
                <p className="mb-5 whoweare-p">
                International Tax Planning, which means managing the complexities of multiple tax regulations around the world is what you would need.
                  <br></br>
                  <br></br>
                  It is one of the vital aspects of any business, especially when business demands cross-border transactions or global expansion.
                 
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
          <h2>What is International Taxation?</h2>
          <p>
          International Taxation means adhering to varied tax laws of a different jurisdiction when an entity undertakes cross-border transactions.
          <br></br>
          <br></br>
          It includes the application of tax laws in the respective jurisdictions and determining tax obligations of entities in the affected jurisdictions.
          <br></br>
          <br></br>
          In general, an entity needs to determine the tax expenditure in each jurisdiction of its operation and its exposure to tax liabilities in the jurisdiction in which it conducts its business.
          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Why is International Taxation is gaining importance now in the UAE?</h2>
          <p>
          UAE, a most rapidly growing business hub, is the gateway between the Asia Pacific and Europe for cross-border transactions. Hence International Tax Planning is a very important matter for most of the businesses operating in this region.
          <br></br>
          <br></br>
          To improve international competitiveness, the UAE started shifting towards a taxation economy that encourages transparency and improves economic diversification. The UAE introduced Excise Tax in the year 2017 and Value Added Tax (VAT) in 2018. Subsequently, there are many developments with respect to improving international tax compliance in the country which are commendable and necessary.
          <br></br>
          <br></br>
          The UAE has given a green signal to the internationally agreed standards on exchange of information for tax purposes both “EOIR” (Exchange of Information on Request (‘EOIR’) and Automatic Exchange of Information (from OECD)
          <br></br>
          <br></br>
          The UAE is largely compliant with the requirements of CRS (Common Reporting Standards) as well as FATCA to improve international tax compliance and international tax reporting.          
          <br></br>
          <br></br>
          The United Arab Emirates joined the Inclusive Framework of BEPS (“ Base Erosion and Profit Shifting ”) on 16th May 2018 and became the 116th jurisdiction on the list. Hence the UAE is committed to implementing BEPS 4 minimum standards. In the year 2019, UAE implemented the following two regulations;         
        </p>
        <ul>
          <li>
          Economic Substance Regulation through the Cabinet Resolution no 31 of 2019. [Economic Substance Regulation is a part of Action 5 of the Base Erosion and Profit Shifting]
            </li>
            <li>
            Country by Country Reporting - CbCR legislation through the Cabinet Resolution no 32 of 2019. [CbCR is a part of Action 13 of the Base Erosion and Profit Shifting (BEPS)]
            </li>
          </ul>
          <p>Now the United Arab Emirates is committed to the relevant overseas authorities to report within the timelines.</p>
        </div>
      </div>
    
      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>International Taxation Specialists in Dubai, UAE.</p>
          </div>
          <Link  to={"/contact"}
                    style={{ textDecoration: "none" }}><button>Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
}
