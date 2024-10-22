import React, { useEffect } from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";
export default function IFRSforSME(props) {
  return (
    <div>
      <div className="AuditHero">
        <div className="AuditHero-text">
          <h4>Accounting & Financial Reporting</h4>
          <h1>IFRS for SME's : International Financial Reporting Standards for Small & Medium Enterprises</h1>
        </div>
      </div>
      <div className="whoweare-container">
        <div className="whoweare-text">
          <h2>IFRS for SMEs with DSB Chartered Accountants</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11">
                <p className="mb-5 whoweare-p">
                For small and medium-sized enterprises (SMEs) in the UAE, staying compliant with international accounting standards is not just important, but also simplified through the adoption of IFRS for SMEs. According to UAE Corporate Tax law, if your business's revenue is less than AED 50 million, you are eligible to follow IFRS for SMEs. This tailored standard is designed to reduce the complexity and burden of financial reporting while maintaining global consistency.
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
          <h2>Why Choose IFRS for SMEs?</h2>
          <p>
          IFRS for SMEs is approximately 10% the size of full IFRS, with fewer disclosures and simplified reporting requirements. It is crafted to suit the unique needs of smaller businesses, making compliance more manageable. The simplified initial and subsequent measurement rules make financial reporting easier, allowing SMEs to focus on growth without getting overwhelmed by the complexity of full IFRS.     
          <br></br>    
          <br></br>
          At DSB Chartered Accountants, we offer specialized expertise in implementing IFRS for SMEs. Whether you're transitioning from another framework or starting fresh, we provide you with the tools and knowledge to maintain compliance effortlessly. Our solutions are designed to simplify your financial reporting while ensuring accuracy and transparency in line with international standards.    
           </p>
        </div>
      </div>
      <div className="audit-container ">
        <div className="audit-text">
          <h2>Why DSB Chartered Accountants for IFRS for SMEs?</h2>
          <ul className='ul-link'>
            <li>Expertise in the nuances of IFRS for SMEs and UAE Corporate Tax law.</li>
            <li>Tailored financial solutions for businesses with revenue under AED 50 million.</li>
            <li>Simplified accounting processes that align with your business's needs.</li>
            <li>Hands-on guidance to ensure compliance without the complexity of full IFRS.</li>
          </ul>
          <p>Ease your financial compliance journey with IFRS for SMEs—partner with DSB Chartered Accountants for a streamlined approach that suits your business.</p>
        </div>
      </div> 
      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>IFRS for SMEs Specialists in Dubai, UAE.</p>
          </div>
          <Link  to={"/contact"}
                    style={{ textDecoration: "none" }}><button>Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
}
