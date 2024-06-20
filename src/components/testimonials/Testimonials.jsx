
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Testimonials.css"; // Import your custom CSS
import personImage from "../../images/person-profile-image-icon.svg";

export default function Testimonials() {
  return (
    <>
      <div className="testimonial-header">
        <h2 className="testimonial-text">Testimonials</h2>
      </div>

      <MDBCol md="12">
        <MDBCard>
          <MDBCardBody className="px-4 py-5">
            <MDBCarousel
              showIndicators
              showControls
              dark
              className="custom-carousel-indicators"
            >
              <MDBCarouselItem className="active">
                <MDBRow className="d-flex justify-content-center">
                  <MDBCol lg="10" xl="8">
                    <MDBRow>
                      <MDBCol lg="4" className="d-flex justify-content-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                          className="rounded-circle shadow-1 mb-4 mb-lg-0"
                          alt="woman avatar"
                        />
                      </MDBCol>
                      <MDBCol
                        md="9"
                        lg="7"
                        xl="8"
                        className="text-center text-lg-start mx-auto mx-lg-0"
                      >
                        <h4 className="mb-4">Maria Smantha - Web Developer</h4>
                        <p className="mb-0 pb-3">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. A aliquam amet animi blanditiis consequatur
                          debitis dicta distinctio, enim error eum iste libero
                          modi nam natus perferendis possimus quasi sint sit
                          tempora voluptatem. Est, exercitationem id ipsa ipsum
                          laboriosam perferendis.
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBCarouselItem>
              <MDBCarouselItem>
                <MDBRow className="d-flex justify-content-center">
                  <MDBCol lg="10" xl="8">
                    <MDBRow>
                      <MDBCol lg="4" className="d-flex justify-content-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                          className="rounded-circle shadow-1 mb-4 mb-lg-0"
                          alt="woman avatar"
                          width="150"
                          height="150"
                        />
                      </MDBCol>
                      <MDBCol
                        md="9"
                        lg="7"
                        xl="8"
                        className="text-center text-lg-start mx-auto mx-lg-0"
                      >
                        <h4 className="mb-4">Jaya Prakash-Nazih Group</h4>
                        <p className="mb-0 pb-3">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur.
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBCarouselItem>
              <MDBCarouselItem>
                <MDBRow className="d-flex justify-content-center">
                  <MDBCol lg="10" xl="8">
                    <MDBRow>
                      <MDBCol lg="4" className="d-flex justify-content-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                          className="rounded-circle shadow-1 mb-4 mb-lg-0"
                          alt="woman avatar"
                          width="150"
                          height="150"
                        />
                      </MDBCol>
                      <MDBCol
                        md="9"
                        lg="7"
                        xl="8"
                        className="text-center text-lg-start mx-auto mx-lg-0"
                      >
                        <h4 className="mb-4">
                          JAdel Obdao-Scalla Contracting LLC
                        </h4>
                        <p className="mb-0 pb-3">
                          At vero eos et accusamus et iusto odio dignissimos qui
                          blanditiis praesentium voluptatum deleniti atque
                          corrupti quos dolores et quas molestias excepturi sint
                          occaecati cupiditate non provident, similique sunt in
                          culpa qui officia mollitia animi id laborum et dolorum
                          fuga.
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBCarouselItem>
            </MDBCarousel>
          </MDBCardBody>
        </MDBCard>
        <div className="text-center mt-4 pt-2">
          <MDBIcon fas icon="quote-right" size="3x" className="text-white" />
        </div>
      </MDBCol>
    </>
  );
}
