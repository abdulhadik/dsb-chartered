import React from "react";
// import "../../components/aboutUs/AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhoWeAre.css";
import WhoWeAreImg from "../../images/dubai-city-landscape.jpg";

export default function WhoWeAre() {
  return (
    <div className="whoweare-container">
      <div className="whoweare-text">
        <h2>Who Are We?</h2>
        {/* <p>Join us on this journey of financial growth and success. Let's unlock new opportunities together!</p> */}
      </div>
      <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center ">
        <div className="col-12 col-lg-6 col-xl-7">
          <div className="row justify-content-xl-between">
            <div className="col-12 col-xl-11">
              <p className="mb-5 whoweare-p">
                At DSB Chartered Accountants, we are passionate about driving
                your financial success by providing top-notch Accounting and
                Taxation services. As an eminent accounting powerhouse in Dubai,
                we bring a fusion of financial whoweare and technological
                prowess to help you thrive in today's competitive business
                landscape.
                <br></br>
                <br></br>
               Leading Business & Consultancy firm in Dubai, UAE. DSB Chartered Accountants Proffessional Firms (DSB Chartered Accountants Group) are ISO 9001-2015 Certified International Chartered Accountants Group Firms having it's Headqaurters in Dubai.
              </p>
              {/* <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#673FD7"
                          viewBox="0 0 47.94 47.94"
                        >
                          <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956C22.602,0.567,25.338,0.567,26.285,2.486z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="h4 mb-3 ">Versatile Brands</h2>
                        <p className="text-secondary mb-0">
                          We are crafting a digital method that subsists life
                          across all mediums.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 ">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#673FD7"
                          className="bi bi-fire"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="h4 mb-3 ">Digital Agency</h2>
                        <p className="text-secondary mb-0">
                          We believe in innovation by merging primary with
                          elaborate ideas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
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
