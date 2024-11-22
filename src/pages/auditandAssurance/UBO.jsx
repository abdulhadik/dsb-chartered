import React, { useEffect } from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhoWeAreImg from "../../images/carousel1.jpg";
import { Link } from "react-router-dom";
export default function UBO(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="AuditHero Statuatory">
        <div className="AuditHero-text">
          <h4>Taxation</h4>
          <h1>Ultimate Beneficial Owner (UBO) UAE</h1>
        </div>
      </div>
      <div className="whoweare-container">
        <div className="whoweare-text">
          <h2>What is UBO ?</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11 audit-text">
                <p className="mb-5 whoweare-p">
                  The Ultimate Beneficial Owner (UBO) refers to the genuine
                  beneficial owners, partners, and/or shareholders of an
                  organization who owns or controls the legal entity or a
                  natural person who conducts the transaction with the firm. The
                  UBO may or may not be known as the owner of the business. As
                  per the Cabinet Resolution, all companies incorporated in the
                  UAE mainland and commercial free zones must keep track of
                  their genuine beneficial owners, partners, and shareholders,
                  according to the decision.
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
          <h2>UAE Enhances UBO Regulations</h2>
          <p>
            The UAE has recently updated its Ultimate Beneficial Ownership (UBO)
            regulations through legislative updates. These updates apply to all
            UAE entities except for government-owned companies and those in
            financial-free zones. They include stricter disclosure requirements,
            the introduction of AML measures, and penalties for non-compliance,
            aiming to improve transparency, and identify UBOs within complex
            ownership structures. The amendments emphasize adherence to
            disclosure obligations, definition of beneficial owners, and
            grievance procedures while seeking expert guidance for compliance
          </p>
        </div>
      </div>
      <div className="audit-container ">
        <div className="audit-text">
          <h2>2022 Latest Update: Ultimate Beneficial Owner</h2>
          <p>
            According to the Ministry of Economy, the deadline for providing
            data on ultimate beneficial owners (UBO) was June 30, 2022, or at
            the time of incorporation/registration of a new entity. The
            licensing authorities, however, are continuing to accept
            registrations. Many of the licensing authorities will require the
            information specified by the resolution when a company applies for
            trade license renewal or amendment.
          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Objectives of Ultimate Beneficial Owner (UBO)</h2>
          <p>
            Most countries around the world have legislation related to UBOs.
            The goal is to identify any illegal activities in the business. This
            is by money laundering, Know Your Customer (KYC), bribery,
            corruption, and terrorism financing legislation.
            <br></br>
            <br></br>
            The government, regulatory authorities, and other firms interested
            in doing business with an entity can learn about it by identifying
            the UBO. Thus, the primary goal of UBO regulation requirements is to
            safeguard oneself from engaging in business with an entity that may
            be engaged in criminal activities. You have a thorough understanding
            of who your business partner or client is and what their company
            operations are, which is critical.
            <br></br>
            <br></br>
            In line with the same, the UAE Cabinet released Cabinet Resolution
            No. 58 of 2020 on Regulation of Procedures Relating to Real
            Beneficiaries (“the Decision”) on August 28, 2020.
            <br></br>
            <br></br>
            Also, in a series of legislative updates, the United Arab Emirates
            (UAE) has recently revised its Ultimate Beneficial Ownership (UBO)
            regulations and associated penalties. This development, including
            Cabinet Resolution No. 109 of 2023 and Cabinet Decision No. 132 of
            2023, demonstrates a strong commitment to enhancing corporate
            transparency and aligning with international standards.
          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>
             UBO Compliance in UAE - Final Thoughts
          </h2>
          <p>
            The implementation of legislation such as the Ultimate Beneficial
            Ownership is a step forward for the UAE in the fight against money
            laundering and the financing of terrorism and illegal activities.
            This decision is also consistent with the UAE's commitment to the
            OECD's BEPS measures
            <br></br>
            <br></br>
            Various other legislation, such as Economic Substance Regulations,
            CbCR Reporting, and AML Regulations have been enacted by the
            government of UAE in recent quarters in order to increase
            transparency in business affairs. More transparency in the country's
            economic system is expected as businesses tighten their overall
            record-keeping and disclosures.
          </p>
        </div>
      </div>

      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>UBO Specialists in Dubai, UAE.</p>
          </div>
          <Link  to={"/contact"}
                    style={{ textDecoration: "none" }}><button>Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
}
