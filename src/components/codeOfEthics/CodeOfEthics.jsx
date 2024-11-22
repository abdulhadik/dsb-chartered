import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CodeOfEthics.css";
import CodeOfEthicsImg from "../../images/codeofethics.jpg";

export default function CodeOfEthics() {
  return (
    <div className="codeOfEthics-container">
      <div className="codeOfEthics-text">
        <h2> Code Of Ethics</h2>
      </div>
      <div className="row gy-3 gy-md-4 gy-lg-0 ">
        <div className="col-12 col-lg-6 col-xl-7">
          <div className="row justify-content-xl-between">
            <div className="col-12 col-xl-11">
              <p className="mb-3 codeOfEthics-p">
                We uphold integrity and confidentiality while ensuring
                competence and accountability in all our services.
              </p>
              <div className="row gy-4 gy-md-0 gx-xxl-5X">
                <div className="col-12 col-md-6">
                  <div className="d-flex">
                    <div className="me-4 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#673FD7"
                        viewBox="0 0 18 18"
                      >
                        <path d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm4.49 6.924l-5.02 5.51a.983.983 0 0 1-1.442 0l-2.48-2.482a.983.983 0 0 1 .008-1.417 1.027 1.027 0 0 1 1.4.02L7.712 10.3l4.3-4.73a1.018 1.018 0 0 1 1.4-.075 1.006 1.006 0 0 1 .078 1.43z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="h4 mb-3">Integrity</h2>
                      <p className="text-secondary mb-0">
                        We commit to honesty and transparency in all our
                        services, ensuring truthful and reliable information.
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
                        viewBox="0 0 47.94 47.94"
                      >
                        <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956C22.602,0.567,25.338,0.567,26.285,2.486z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="h4 mb-3">Confidentiality</h2>
                      <p className="text-secondary mb-0">
                        We protect client information with the highest level of
                        security and discretion.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 codePoints">
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
                      <h2 className="h4 mb-3">Competence</h2>
                      <p className="text-secondary mb-0">
                        We maintain and enhance our professional skills to
                        deliver high-quality and effective services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 codePoints ">
                  <div className="d-flex">
                    <div className="me-4 text-primary">
                      <svg
                        fill="#673FD7"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                      >
                        <path d="M16.417 9.579A7.917 7.917 0 1 1 8.5 1.662a7.917 7.917 0 0 1 7.917 7.917zm-6.37 2.817a.317.317 0 0 0-.316-.317H4.15a.318.318 0 0 0-.317.317v.715a.318.318 0 0 0 .317.317h5.58a.317.317 0 0 0 .317-.317zM5.362 8.655l2.362 2.362a.396.396 0 0 0 .56-.56L5.921 8.096a.396.396 0 1 0-.56.56zm8.05 3.235-3.285-3.285.81-.81L8.593 5.45 6.398 7.644l2.345 2.344.823-.823 3.285 3.285a.396.396 0 1 0 .56-.56zM9.056 4.96l2.363 2.362a.396.396 0 1 0 .56-.56L9.615 4.4a.396.396 0 1 0-.56.56z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="h4 mb-3">Accountability</h2>
                      <p className="text-secondary mb-0">
                        We take full responsibility for our actions and ensure
                        compliance with ethical standards and legal requirements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-5">
          <img
            className="img-fluid rounded"
            loading="lazy"
            src={CodeOfEthicsImg}
            alt="About 1"
          />
        </div>
      </div>
    </div>
  );
}
