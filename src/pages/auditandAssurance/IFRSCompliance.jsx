import React, { useEffect } from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import WhoWeAreImg from "../../images/carousel3.jpg";
export default function IFRSCompliance(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="AuditHero">
        <div className="AuditHero-text">
          <h4>Accounting & Financial Reporting</h4>
          <h1>IFRS Compliance in Dubai</h1>
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
                  At DSB Chartered Accountants, we specialize in helping businesses transition smoothly to IFRS, whether it's converting existing financial records or implementing IFRS for the first time. Our team of experienced Chartered Accountants and financial experts understands the complexities involved and is equipped to ensure your business remains compliant with the latest standards. From IFRS conversion projects to ongoing reporting, we guide you through every step, aligning your financial practices with international benchmarks.
                  
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
          <h2>Why Choose DSB Chartered Accountants for IFRS Implementation?</h2>
          <ul>
            <li>IFRS allows financial statements to be comparable across international boundaries, which is beneficial for investors, regulators, and other stakeholders.</li>
            <li><span>Investor Confidence:</span> Compliance with IFRS can enhance investor confidence as it provides a true and fair view of a company’s financial health.</li>
            <li><span>Access to Global Markets:</span> Companies that comply with IFRS may find it easier to access global financial markets and attract foreign investment</li>
            
          </ul>
        </div>
      </div>
      <div className="audit-container ">
        <div className="audit-text">
          <h2>Support and Resources</h2>
          <ul>
            <li>  Expertise in full IFRS convergence or first-time implementation.</li>
            <li>Tailored solutions that suit your business's specific accounting needs.</li>
     
            <li>Strong understanding of both local UAE regulations and international standards.</li>
            <li>Assistance with complex IFRS topics such as revenue recognition, lease accounting, and financial instruments</li>
            
          </ul>

          <p>With a client-centric approach, DSB Chartered Accountants offers a seamless process for integrating IFRS into your financial operations, ensuring accuracy, compliance, and financial clarity.<br></br>
          Let us help you unlock global opportunities by aligning your financial reporting with international standards. Choose difference makers, choose DSB Chartered Accountants.</p>
        </div>
      </div>
      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>IFRS Compliance Specialists in Dubai, UAE.</p>
          </div>
          <Link  to={"/contact"}
                    style={{ textDecoration: "none" }}><button>Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
}
