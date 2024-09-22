import React, { useEffect } from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";
export default function AccountingAndBookkeeping(props) {
  return (
    <div>
      <div className="AuditHero">
        <div className="AuditHero-text">
          <h4>Accounting & Financial Reporting</h4>
          <h1>IFRS Compliance in Dubai</h1>
        </div>
        <div className="Audit-links">
          <h5>Accounting & Financial Reporting</h5>
          <ul>
            <Link to="/audit-and-assurance">
              <li>Accounting & Bookkeeping</li>
            </Link>
          </ul>
          <ul>
            <Link to="/statutory-audit">
              <li>IFRS Compliant</li>
            </Link>
          </ul>
          <ul>
            <Link to="/internal-audit">
              <li>IFRS for SMEs Compliant</li>
            </Link>
          </ul>
          <ul>
            <Link to="/liquidation-report">
              <li>IND-AS Compliant</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="whoweare-container">
        <div className="whoweare-text">
          <h2>IFRS Compliance in Dubai</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11">
                <p className="mb-5 whoweare-p">
                  IFRS (International Financial Reporting Standards) is a set of
                  accounting standards developed by the International Accounting
                  Standards Board (IASB) that provides guidelines for how
                  companies should report their financial results and position.
                  The goal is to ensure transparency, accountability, and
                  efficiency in financial markets around the world.
                  <br></br>
                  <br></br>
                  In Dubai, and the wider UAE, IFRS is mandatory for most
                  companies, especially for publicly listed companies. Private
                  companies, including those in free zones, are also required to
                  prepare their financial statements in accordance with IFRS.
                  <br></br>
                  <br></br>
                  The Dubai Financial Services Authority (DFSA) and the UAE
                  Ministry of Economy oversee the application of IFRS in the
                  country, ensuring that companies adhere to these standards.{" "}
                  <br></br>
                  <br></br>
                  Companies in Dubai's various free zones, such as Dubai
                  International Financial Centre (DIFC), are also required to
                  comply with IFRS. DIFC itself follows a regulatory framework
                  that aligns with international standards, including IFRS.{" "}
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
          <h2>Benefits of IFRS Compliance</h2>
          <ul>
            <li><span>Global Comparability:</span> IFRS allows financial statements to be comparable across international boundaries, which is beneficial for investors, regulators, and other stakeholders.</li>
            <li><span>Investor Confidence:</span> Compliance with IFRS can enhance investor confidence as it provides a true and fair view of a company’s financial health.</li>
            <li><span>Access to Global Markets:</span> Companies that comply with IFRS may find it easier to access global financial markets and attract foreign investment</li>
            
          </ul>
        </div>
      </div>
      <div className="audit-container ">
        <div className="audit-text">
          <h2>Support and Resources</h2>
          <ul>
            <li><span>Professional Services:</span>  DSB Chartered Accountants offers comprehensive services to help companies achieve and maintain IFRS compliance. Their services include audits, advisory, and training tailored to IFRS standards.</li>
            <li><span>Technology Solutions</span> Various software solutions can assist in maintaining IFRS-compliant records and preparing financial statements.</li>
            
          </ul>
        </div>
      </div>

      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Conclusion</h2>
          <p>
          IFRS compliance in Dubai is crucial for transparency, comparability, and investor trust. While it requires a significant investment in resources and training, partnering with professional services like DSB Chartered Accountants and leveraging technology can streamline the process and address challenges effectively.
          </p>
          
        </div>
      </div> 
      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>IFRS Compliance Specialists in Dubai, UAE.</p>
          </div>
          <button>GET A QUOTE</button>
        </div>
      </div>
    </div>
  );
}
