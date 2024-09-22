import React, { useEffect } from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";
import { Link } from "react-router-dom";
export default function InternalAudit(props) {
  return (
    <div>
      <div className="AuditHero internal">
        <div className="AuditHero-text">
          <h4>Taxation</h4>
          <h1>Corporate Tax In UAE</h1>
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
              <li>Excise Tax</li>
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
          <h2>Corporate tax In UAE</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11">
                <p className="mb-5 whoweare-p">
                  Corporate Tax is a form of direct tax levied on the net income
                  or profit of corporations and other businesses.
                  <br></br>
                  <br></br>
                  On 31 January 2022, the UAE Ministry of Finance announced the
                  introduction of a federal corporate tax in the UAE that will
                  be effective for financial years starting on or after 1 June
                  2023.
                  <br></br>
                  <br></br>
                  Generally, such taxes are computed on the accounting net
                  profit/income of a business, after making adjustments for
                  certain items which will be specified under the UAE Corporate
                  Tax law.
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
          <h2>Will any kind of business be subject to Corporate Tax in UAE?</h2>
          <p>
            The tax will be applicable in all businesses including the free
            zones except the activity for the extraction of natural resources.
            No corporate tax will apply on personal income from employment, real
            estate, and other investments, or on any other income earned which
            need not have a commercial license or permit to be undertaken in
            UAE.
          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Corporate Tax Implementation</h2>
          <p>
            In the increasingly complex areas of Corporate Tax reporting, tax
            authority compliance, and tax planning – in-house tax departments
            are often challenged to meet constantly changing requirements.
            <br></br>
            <br></br>
            Our experienced professionals having industry experience and
            experience in Corporate Tax can supplement the professionals of your
            organization to ensure the error-free transition to the newly
            introduced
            <br></br>
            <br></br>
            Our reputation for expertise, efficiency, attention to detail, and superior service is recognized by both our clients and peers.
            <br></br>
            <br></br>
            Whether your organization is an emerging operation or a large, established business, our team of professionals will apply their years of tax experience and resources to help you identify areas of risk, and offer solutions that mitigate financial risk and tax compliance exposures. 
          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Corporate Tax Compliance</h2>
          <p>
            We assist organizations to improve management effectiveness, correlating tax decisions made in one country with the business imperatives of the overall organization. 
            <br></br>
            <br></br>
            We assist organizations to improve management effectiveness, correlating tax decisions made in one country with the business imperatives of the overall organization            <br></br>
            <br></br>
            Our Corporate Tax Compliance Team assists organizations in meeting tax compliance requirements, by offering a wide range of services that include:          </p>
        <ul>
            <li>General compliance Service</li>
            <li>Corporate Tax Registration </li>
            <li>Calculation of taxes payable</li>
            <li>Preparation of Corporate Tax return and other tax reporting documents </li>
            <li>Review of the tax return prepared by the organization</li>
            <li>Assistance with correspondence with the tax authorities, in case of any queries raised by the authorities</li>
            <li>Coordinating with authorities to settle tax disputes, if any</li>
        </ul>
        <p>We offer a wide range of services that include general compliance, the introduction of the tax, finance, and accounting services, and global coordination and management of tax accounting projects.</p>
        </div>
      </div>
      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>Corporate Tax Specialists in Dubai, UAE.</p>
          </div>
          <button>GET A QUOTE</button>
        </div>
      </div>
    </div>
  );
}
