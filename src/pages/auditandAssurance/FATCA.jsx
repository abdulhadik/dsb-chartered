import React, { useEffect } from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhoWeAreImg from "../../images/carousel1.jpg";
import { Link } from "react-router-dom";
export default function FATCA(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="AuditHero Statuatory">
        <div className="AuditHero-text">
          <h4>Taxation</h4>
          <h1>Automatic Exchange of Information – FATCA & CRS</h1>
        </div>
      </div>
      <div className="whoweare-container">
        <div className="whoweare-text">
          <h2>FATCA (Foreign Account Tax Compliance Act)</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11 audit-text">
                <p className="mb-5 whoweare-p">
                  FATCA stands for the Foreign Account Tax Compliance Act. It is
                  a United States federal law enacted in 2010 aimed at combating
                  tax evasion by U.S. taxpayers holding accounts and other
                  financial assets offshore. <br></br>
                  <br></br>
                  The primary objective of FATCA is to prevent tax evasion by
                  U.S. citizens and residents who use foreign financial
                  institutions and offshore accounts to hide income and
                  assets.Foreign financial institutions (FFIs) are required to
                  report information about financial accounts held by U.S.
                  taxpayers to the Internal Revenue Service (IRS).
                  <br></br>
                  <br></br>
                  Foreign financial institutions (FFIs) are required to report
                  information about financial accounts held by U.S. taxpayers to
                  the Internal Revenue Service (IRS).
                  <br></br>
                  <br></br>
                  FFIs that do not comply with FATCA face a 30% withholding tax
                  on certain payments made to them from U.S. sources.
                  <br></br>
                  <br></br>
                  U.S. taxpayers must report their foreign financial accounts
                  and assets on an annual basis.
                  <br></br>
                  <br></br>
                  FATCA has led to increased transparency and reporting, as well
                  as significant administrative requirements for both U.S.
                  taxpayers and foreign financial institutions.
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
          <h2>CRS (Common Reporting Standard)</h2>
          <p>CRS stands for the Common Reporting Standard. It is a global standard for the automatic exchange of financial account information between jurisdictions, developed by the Organisation for Economic Co-operation and Development (OECD). The UAE adopted CRS in 2015.
          <br></br>
          <br></br>
          The CRS aims to combat tax evasion on a global scale by requiring financial institutions to report information about non-resident account holders to their local tax authorities, which in turn exchange this information with the tax authorities of the account holders’ countries of residence.
          <br></br>
          <br></br>
          Financial institutions in participating jurisdictions must collect and report detailed information on financial accounts held by non-residents.
          <br></br>
          <br></br>
          The collected information is automatically exchanged between participating countries on an annual basis.
          <br></br>
          <br></br>
          CRS applies to a wide range of financial institutions, including banks, custodians, brokers, certain collective investment vehicles, and certain insurance companies.
The implementation of CRS has significantly enhanced international tax transparency and cooperation, making it harder for individuals to hide assets and income in foreign jurisdictions.
          </p>
          
        </div>
      </div>
      <div className="audit-container ">
        <div className="audit-text">
          <h2>Comparison</h2>
          <p>FATCA is specific to U.S. taxpayers and involves the U.S. IRS, while CRS is a global standard involving multiple countries.
          <br></br>
          <br></br>
          FATCA imposes requirements primarily on foreign financial institutions dealing with U.S. persons, whereas CRS involves mutual information exchange between all participating jurisdictions.          <br></br>
          <br></br>
          Both aim to prevent tax evasion, but FATCA is U.S.-centric, while CRS has a broader, international focus.          <br></br>
          <br></br>
          The collected information is automatically exchanged between participating countries on an annual basis.
          <br></br>
          <br></br>
          In summary, FATCA is a U.S. law targeting foreign financial accounts of U.S. persons, while CRS is an international framework for the automatic exchange of financial information to combat tax evasion globally.          </p>
          
        </div>
      </div>
      
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Key Points for Both FACT and CRS in the UAE Compliance</h2>
          <p>
            Companies must implement due diligence procedures to identify
            reportable accounts. Companies must comply with annual reporting
            deadlines as specified by the UAE Ministry of Finance. Failure to
            comply with FATCA and CRS requirements can result in significant
            penalties, including fines and, for FATCA, potential withholding
            taxes on U.S.-sourced payments.
          </p>
        </div>
      </div>

      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>FATCA & CRS Specialists in Dubai, UAE.</p>
          </div>
          <Link  to={"/contact"}
                    style={{ textDecoration: "none" }}><button>Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
}
