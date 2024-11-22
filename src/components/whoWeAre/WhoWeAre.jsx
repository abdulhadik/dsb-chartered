import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhoWeAre.css";
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";
export default function WhoWeAre() {
  return (
    <div className="whoweare-container">
      <div className="whoweare-text">
        <h2>Who Are We?</h2>
      </div>
      <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
        <div className="col-12 col-lg-6 col-xl-7">
          <div className="row justify-content-xl-between">
            <div className="col-12 col-xl-11">
              <p className=" whoweare-p">
                At DSB Chartered Accountants, we are passionate about driving
                your financial success by providing top-notch Accounting and
                Taxation services. As an eminent accounting powerhouse in Dubai,
                we bring a fusion of financial whoweare and technological
                prowess to help you thrive in today's competitive business
                landscape.
                <br></br>
                <br></br>
                Leading Business & Consultancy firm in Dubai, UAE. DSB Chartered
                Accountants Proffessional Firms (DSB Chartered Accountants
                Group) are ISO 9001-2015 Certified International Chartered
                Accountants Group Firms having it's Headqaurters in Dubai.
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
  );
}
