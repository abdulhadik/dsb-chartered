import React, { useEffect } from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";
import { Link } from "react-router-dom";
export default function AML(props) {
  return (
    <div>
      <div className="AuditHero internal">
        <div className="AuditHero-text">
          <h4>Statuatory Compliances</h4>
          <h1>Anti Money Laundering (AML) in UAE</h1>
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
          <h2>Anti Money Laundering in UAE</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11 audit-text">
                <p className="mb-5 whoweare-p">
                  The UAE is a prosperous Middle Eastern nation with a dynamic
                  economy driven by diversification efforts away from oil. Dubai
                  and Abu Dhabi have emerged as global financial centers,
                  contributing to the country's wealth.
                  <br></br>
                  <br></br>
                  Notably, the UAE enacted Federal Law No. 4 of 2002 to
                  criminalize money laundering, defining penalties for
                  offenders. The Anti-Money Laundering and Suspicious Cases Unit
                  (AMLSCU) was established in 2002 to manage AML/CFT. In 2010,
                  the National Anti-Money Laundering Committee (NAMLC) was
                  formed to coordinate AML efforts and foster international
                  cooperation.
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
          <h2>History of AML in the UAE</h2>
          <p>
            The UAE's history as a trading hub has attracted global businesses,
            but it has also faced challenges with financial crimes like money
            laundering and terrorist financing. To combat these issues, the UAE
            established a legal framework for AML/CFT. It became a member of
            FATF in 2004 and has taken various measures to strengthen AML and
            CFT efforts.
            <br></br>
            <br></br>
            Notably, the UAE enacted Federal Law No. 4 of 2002 to criminalize
            money laundering, defining penalties for offenders. The Anti-Money
            Laundering and Suspicious Cases Unit (AMLSCU) was established in
            2002 to manage AML/CFT. In 2010, the National Anti-Money Laundering
            Committee (NAMLC) was formed to coordinate AML efforts and foster
            international cooperation.
          </p>
        </div>
      </div>
      <div className="audit-container ">
        <div className="audit-text">
          <h2>Legal Framework for AML in the UAE</h2>
          <p>
            The UAE's robust legal framework for AML and CTF encompasses various
            laws, regulations, and guidelines, including:
          </p>
          <ul>
            <li>
              Federal Law No. 20 of 2018 on AML and CTF: This primary
              legislation covers CDD, STR, record-keeping, and sanctions. It
              establishes the FIU for intelligence exchange.
            </li>
            <li>
              Federal Law No. 10 of 2019 on AML and CTF Procedures: It details
              risk assessment, CDD, and obligations for entities like financial
              institutions and real estate agents.
            </li>
            <li>
              Central Bank Regulations: The Central Bank issued guidelines for
              CDD, STR, and risk management within financial institutions.
            </li>
            <li>
              DIFC Laws and Regulations: The DIFC, a financial-free zone, has
              its own framework, including the AML Law (DIFC Law No. 1 of 2019)
              and AML Rules and Guidance.
            </li>
            <li>
              Electronic smoking devices, and the liquids used in such devices:
              100%
            </li>
          </ul>
        </div>
      </div>
      <div className="audit-container ">
        <div className="audit-text">
          <h2>Role of UAE Government Agencies</h2>
          <p>
            The UAE government is actively combatting money laundering and
            terrorist financing through various agencies and bodies. The
            Financial Intelligence Unit (FIU), under the Central Bank of the
            UAE, analyzes and disseminates information on suspicious financial
            activities. The UAE Central Bank supervises financial institutions,
            implements AML regulations, and conducts inspections. The DFSA
            oversees DIFC, while the ADGM regulator monitors Abu Dhabi Global
            Market. For designated non-financial businesses and professions
            (DNFBPs), the Ministry of Economy enforces regulations.
            Internationally, the UAE collaborates with organizations like the
            FATF and has signed agreements to combat financial crimes.
          </p>
        </div>
      </div>
      <div className="audit-container ">
        <div className="audit-text">
          <h2>Future of Financial Crime and AML in the UAE</h2>
          <p>
            Looking ahead, the UAE's fight against financial crime and AML
            appears challenging yet promising. Bolstered by a robust regulatory
            framework, the UAE has made strides in curbing financial crime. The
            country is harnessing advanced technologies like AI, blockchain, and
            big data for improved AML compliance and crime detection.
            <br></br>
            <br></br>
            As the UAE's economy thrives, it becomes a hotspot for businesses,
            investments, and trade. This prosperity, however, exposes the nation
            to financial risks like fraud, cybercrime, and money laundering.
            Financial institutions must proactively mitigate these risks to
            evade regulatory penalties and reputational damage.
            <br></br>
            <br></br>
            The UAE government is dedicated to enhancing AML compliance and
            tackling financial crime. Stringent penalties for non-compliance and
            evolving regulations demonstrate their commitment to a secure
            financial landscape. Through technology adoption and proactive
            measures, the UAE aims to secure its financial future.
          </p>
        </div>
      </div>

      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>AML Specialists in Dubai, UAE.</p>
          </div>
          <button>GET A QUOTE</button>
        </div>
      </div>
    </div>
  );
}
