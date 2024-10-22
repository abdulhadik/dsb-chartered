import React, { useEffect } from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";
import {Link} from 'react-router-dom'
export default function LiquidationReport(props) {
  return (
    <div>
       <div
 
  className="AuditHero liquidation"
>
        <div className="AuditHero-text">
        <h4>Audit And Assurance</h4>
          <h1>Liquidation Report</h1>
        </div>
        
      </div>
      <div className="whoweare-container">
        <div className="whoweare-text">
          <h2>Company Liquidation in UAE</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11">
                <p className="mb-5 whoweare-p">
                  Company liquidation is the formal insolvency procedure by
                  which a company is brought to an end. Company liquidation is
                  also often termed as ‘winding up’ or ‘closing’ a company. All
                  of the company’s assets are liquidated and the proceeds from
                  the sale of assets are used to settle outstanding debts and
                  pay outstanding expenses. Any balance remaining can then be
                  transferred to the shareholders of the company.
                  <br></br>
                  <br></br>
                  Once a company is liquidated it will cease doing business and
                  employing people. On liquidation, a company’s business licence
                  is revoked and its name is removed from the Trade Registry.
                  The entity is then considered to have ceased to exist.
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
          <h2>Why is a company liquidation required?</h2>
          <p>
            There are two principal reasons why a company liquidation may be
            necessary in the UAE
          </p>
          <ul>
            <li>
              The original purpose for setting up of the company has been
              fulfilled and the entity is no longer required
            </li>
            <li>The company is considered to be insolvent</li>
          </ul>

          <p>
            Even if there are no debts to be paid to creditors, it is highly
            advisable to formally liquidate a company that is no longer of use
            rather than simply allowing your trade licence to expire
            <br></br>
            <br></br>
            There are a number of procedures to be completed when formally
            liquidating a company. Ignoring these may attract various penalties
            and could also result in the ‘blacklisting’ of company, as well as
            its directors and shareholders, by the government authorities in
            UAE. This may impact on their involvement in other businesses or
            damage their ability to set up another company in future.{" "}
          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>What is the role of a liquidator?</h2>
          <p>
            A liquidator is a UAE-registered agent or a firm, typically a
            chartered accountancy or audit firm, that is assigned to act on
            behalf of the company to sell its assets in order to generate cash
            to discharge any outstanding liabilities.
            <br></br>
            <br></br>A liquidator may be appointed by shareholders via
            resolution or may be appointed by the courts in the case of
            compulsory liquidation.
            <br></br>
            <br></br>
            Once appointed, the liquidator will issue an official letter of
            acceptance at the initial stage. Once all its duties are completed,
            the liquidator will prepare a statement of affairs and the
            liquidator’s report, which are essential to finalise the liquidation
            process
          </p>
        </div>
      </div>
      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>Liquidation Report Specialists in Dubai, UAE.</p>
          </div>
          <Link  to={"/contact"}
                    style={{ textDecoration: "none" }}><button>Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
}
