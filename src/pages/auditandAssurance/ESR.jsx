import React, { useEffect } from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";
import { Link } from "react-router-dom";
export default function ESR(props) {
  return (
    <div>
      <div className="AuditHero internal">
        <div className="AuditHero-text">
          <h4>Statutory Compliances</h4>
          <h1>The Economic Substance Regulations (ESR)</h1>
        </div>

        <div className="Audit-links">
          <h5>Statuatory Compliances</h5>
          <ul>
            <Link to="/esr">
              <li>ESR</li>
            </Link>
          </ul>
          <ul>
            <Link to="/aml">
              <li>AML</li>
            </Link>
          </ul>
          <ul>
            <Link to="/ubo">
              <li>UBO</li>
            </Link>
          </ul>
          <ul>
            <Link to="/fatca">
              <li>FATCA, CRS</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="whoweare-container">
        <div className="whoweare-text">
          <h2>Economic Substance Regulations(ESR) Dubai UAE</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11 audit-text">
                <p className="mb-5 whoweare-p">
                  Economic Substance Regulations(ESR) Dubai, UAE was brought out
                  via Resolution 31 of 2019 in April of the same year. The
                  Economic Substance Regulation serves as a guideline for
                  improving the nation’s tax frameworks and will make companies
                  more accountable for maintaining an economic presence in the
                  UAE.<br></br>
                  <br></br>
                  The Economic Substance Regulations(ESR) ensure that all
                  eligible Onshore and Free Zone entities will demonstrate
                  adequate economic presence within the UAE. Let us now take a
                  closer look at the Economic Substance Dubai guidelines, and
                  why they are so useful.
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

      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Main ESR legislation</h2>
          <p>
            The ESR includes, in particular: (i) Cabinet Resolution No. 31 of
            2019 on the Specification of the Requirements of the Real Economic
            Activities, (ii) Ministerial Decision No. 215 of 2019 on the
            Issuance of Directives for the Implementation of the Provisions of
            Cabinet Decision No. 31 of 2019, (iii) Cabinet of Ministers
            Resolution No. 57 of 2020 Determining the Economic Substance
            Requirements, and (iv) Ministerial Decision No. 100 of 2020 on the
            Issuance of Directives for the Implementation of the Provisions of
            Cabinet Decision No. 57 of 2020 Concerning Economic Substance
            Requirements.
          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>What does the ESR require?</h2>
          <p>
            The ESR requires Licensees to demonstrate that they have a genuine
            economic presence in the UAE and that the activities they carry on
            are not solely tax-driven. Licensees may be required to prepare and
            submit an economic substance notification (Notification) and an
            economic substance report (Report) from 1 January 2020 onwards, on
            an annual basis (if applicable).
          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Economic Substance Test</h2>
          <p>
            Pursuant to the ESR, Licensees that carry on a Relevant Activity in
            the UAE that generates revenue/income (either a profit or a loss)
            must maintain an adequate presence in the UAE such as through having
            an adequate level of assets or number of qualified employees. In
            addition, the strategic management decisions of the Licensee must be
            conducted in the UAE. In other words, they must meet what is known
            as an “Economic Substance Test”. The level of economic substance a
            Licensee is required to demonstrate under the Economic Substance
            Test may depend on the type of Relevant Activity conducted by it in
            the UAE.{" "}
          </p>
        </div>
      </div>
      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>ESR Specialists in Dubai, UAE.</p>
          </div>
          <button>GET A QUOTE</button>
        </div>
      </div>
    </div>
  );
}
