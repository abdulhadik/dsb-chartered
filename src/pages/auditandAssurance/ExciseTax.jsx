import React, { useEffect } from "react";
import "./AuditAndAssurance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";
import { Link } from "react-router-dom";
export default function ExciseTax(props) {
  return (
    <div>
      <div className="AuditHero internal">
        <div className="AuditHero-text">
          <h4>Taxation</h4>
          <h1>Excise Duty</h1>
        </div>

        <div className="Audit-links">
          <h5>Taxation</h5>
          <ul>
            <Link to="/audit-and-assurance">
              <li>Vat Consultancy</li>
            </Link>
          </ul>
          <ul>
            <Link to="/international-taxation">
              <li>International Taxation</li>
            </Link>
          </ul>
          <ul>
            <Link to="/excise-duty">
              <li>Excise Duty</li>
            </Link>
          </ul>
          <ul>
            <Link to="/customs-duty">
              <li>Customs</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="whoweare-container">
        <div className="whoweare-text">
          <h2>Excise Tax in the UAE</h2>
        </div>

        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-between">
              <div className="col-12 col-xl-11 audit-text">
                <p className="mb-5 whoweare-p">
                  Excise Tax is an indirect tax levied by the UAE government on
                  goods that are considered harmful to human health or the
                  environment. The basic reason for implementing Excise Tax is
                  to reduce the consumption of these goods, raising income for
                  the government that can be spent for the public. <br></br>
                  <br></br>
                  Excise Tax in the UAE was initially implemented in the UAE on
                  certain goods with effect from 1st October 2017 through the
                  Excise Tax Federal Decree-Law No. (7) of 2017. Later, with
                  effect from 1st December 2019 few more products were added to
                  the purview of excise tax vide Cabinet Decision No. 52 of
                  2019. All Taxable entities are entitled to register for Excise
                  Tax in the UAE through the FTA’s online portal.
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
          <h2>What are excise goods?</h2>
          <p>These goods are listed as excise goods:</p>
          <ul>
            <li>Carbonated drinks including flavored aerated beverages. </li>
            <li>
              Concentrations, powder, gel, or extracts used to make carbonated
              drinks.
            </li>
            <li>
              Energy drinks containing stimulant substances, such as caffeine,
              taurine, ginseng, and guarana.
            </li>
            <li>Tobacco and tobacco products.</li>
          </ul>
        </div>
      </div>
      <div className="audit-container ">
        <div className="audit-text">
          <h2>What are the rates of excise tax?</h2>
          <p>The rate of excise tax depends on each excise good:</p>
          <ul>
            <li>Carbonated drinks: 50% </li>
            <li>Products with added sugar and other sweeteners: 50%</li>
            <li>Tobacco products: 100%</li>
            <li>Energy drinks:100%</li>
            <li>
              Electronic smoking devices, and the liquids used in such devices:
              100%
            </li>
          </ul>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>What are the excise prices?</h2>
          <p>
            The excise price should be the higher price of the following two:
          </p>
          <ul>
            <li>
              The price published by the Authority for the relevant excise good
              in a standard price list.{" "}
            </li>
            <li>
              The price designated by the retailer minus the included tax
              amount.{" "}
            </li>
          </ul>
          <br></br>
          <p>
          Here’s how you should deduct the amount of tax included in the retail sales price:.
          </p>
          <ul>
            <li>
            For 50% excise-rated goods: The excise price should equal two-thirds of the designated retail sales price.
            </li>
            <li>
            For 100% excise-rated goods: The excise price should equal half of its designated retail sales price.
            </li>
          </ul>
          <p>
          The excise price of carbonated drinks is calculated according to the mechanism implemented by the Minister of Finance.          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Which businesses are required to register for excise tax?</h2>
          <p>
          Businesses who are involved in the following are required to register for excise tax:
          </p>
          <ul>
            <li>
            Importing excise goods into the UAE.
            </li>
            <li>
            Producing excise goods for consumption in the UAE.
            </li>
            <li>
            Stockpiling excise goods in the UAE.            </li>
            <li>
            Overseeing excise goods at warehouses or designated zones.  </li>
          </ul>
          
          <p>

          The Federal Tax Authority is allowed to audit taxable corporates and penalize those who do not abide by the law.          </p>
        </div>
      </div>
      <div className="audit-container conclu-container">
        <div className="audit-text">
          <h2>Why is an excise tax imposed?</h2>
          <p>
          The excise tax increases the prices of goods that are harmful to human health and the environment, therefore, it is expected to contribute to the reduction of the consumption of unhealthy goods. These taxes also raise revenues for the government to use for beneficial public services.
          </p>
          
        </div>
      </div>

      <div className="call">
        <div className="inside-call">
          <div className="left-call">
            <h1>Partner with the Top !</h1>
            <p>Excise Duty Specialists in Dubai, UAE.</p>
          </div>
          <button>GET A QUOTE</button>
        </div>
      </div>
    </div>
  );
}
