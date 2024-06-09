// import React, { useEffect, useState } from "react";
// import "./Testimonials.css";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

// function Testimonials() {
//   const [autoplay, setAutoplay] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setAutoplay(true);
//     }, 4000); // 4 seconds delay

//     return () => clearTimeout(timer); // Cleanup the timer on unmount
//   }, []);

//   return (
//     <div className="parent-container">
//     <h1>TESTIMONIALS</h1>
//       <div className="testimonial-main-container">
//         <Slide
//           autoplay={autoplay}
//           onChange={function noRefCheck() {}}
//           onStartChange={function noRefCheck() {}}
//         >
//           <div className="each-slide-effect">
//             <div className="testimonial-container">
//               <p className="testimonial-text">
//                 “It’s been almost 3 years since we are a business partner with
//                 you. So far, whatever the services you and your team have provided
//                 to our group, are extremely appreciable, pleasant and excellent.
//                 During this whole time, we have noticed that we are getting full
//                 support for every single transaction and interaction. Thank you
//                 very much for the full support and cooperation to us. We hope to
//                 continue the relationship with you and your organization for many
//                 more years".
//               </p>
//               <h4>Jaya Prakash-Nazih Group</h4>
//               <p className="slideNum">1/3</p>
//             </div>
//           </div>
//           <div className="each-slide-effect">
//             <div className="testimonial-container">
//               <p className="testimonial-text">
//               “It’s been almost 3 years since we are a business partner with
//               you. So far, whatever the services you and your team have provided
//               to our group, are extremely appreciable, pleasant and excellent.
//               During this whole time, we have noticed that we are getting full
//               support for every single transaction and interaction. Thank you
//               very much for the full support and cooperation to us. We hope to
//               continue the relationship with you and your organization for many
//               more years"
//               </p>
//               <h4>JAdel Obdao-Scalla Contracting LLC</h4>
//               <p className="slideNum">2/3</p>
//             </div>
//           </div>
//           <div className="each-slide-effect">
//             <div className="testimonial-container">
//               <p className="testimonial-text">
//                 “The accounting team has been providing excellent services as per
//                 our convenience to discuss and advise on Auditing, VAT consultancy
//                 & other Accounting related needs of our company. They are detailed
//                 & consistent in checking our month end/ year end reports. Such as
//                 monthly visits in our office was done. They helped us create an
//                 accounting system that made it easy for us to monitor our
//                 accounting management. Overall the work is done of Emirates
//                 Chartered Accountants very satisfactory on our end."
//               </p>
//               <h4>Ahmad M. Lootah-Al Hilal Capital</h4>
//               <p className="slideNum">3/3</p>
//             </div>
//           </div>
//         </Slide>
//       </div>
//     </div>
//   );
// }

// export default Testimonials;

// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCarousel,
//   MDBCarouselItem,
//   MDBCol,
//   MDBContainer,
//   MDBIcon,
//   MDBRow,
// } from "mdb-react-ui-kit";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// export default function Testimonials() {
//   return (
//     <MDBContainer fluid className="py-5 gradient-custom">
//       <MDBRow className="d-flex justify-content-center">
//         <MDBCol md="12">
//           <div className="text-center mb-4 pb-2">
//             <MDBIcon fas icon="quote-left" size="3x" className="text-white" />
//           </div>
//           <MDBCard>
//             <MDBCardBody className="px-4 py-5">
//               <MDBCarousel showIndicators showControls dark>
//                 <MDBCarouselItem className="active">
//                   <MDBRow className="d-flex justify-content-center">
//                     <MDBCol lg="10" xl="8">
//                       <MDBRow>
//                         <MDBCol
//                           lg="4"
//                           className="d-flex justify-content-center"
//                         >
//                           <img
//                             src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
//                             className="rounded-circle shadow-1 mb-4 mb-lg-0"
//                             alt="woman avatar"
//                             width="150"
//                             height="150"
//                           />
//                         </MDBCol>
//                         <MDBCol
//                           md="9"
//                           lg="7"
//                           xl="8"
//                           className="text-center text-lg-start mx-auto mx-lg-0"
//                         >
//                           <h4 className="mb-4">
//                             Maria Smantha - Web Developer
//                           </h4>
//                           <p className="mb-0 pb-3">
//                             Lorem ipsum dolor sit amet, consectetur adipisicing
//                             elit. A aliquam amet animi blanditiis consequatur
//                             debitis dicta distinctio, enim error eum iste libero
//                             modi nam natus perferendis possimus quasi sint sit
//                             tempora voluptatem. Est, exercitationem id ipsa
//                             ipsum laboriosam perferendis.
//                           </p>
//                         </MDBCol>
//                       </MDBRow>
//                     </MDBCol>
//                   </MDBRow>
//                 </MDBCarouselItem>
//                 <MDBCarouselItem>
//                   <MDBRow className="d-flex justify-content-center">
//                     <MDBCol lg="10" xl="8">
//                       <MDBRow>
//                         <MDBCol
//                           lg="4"
//                           className="d-flex justify-content-center"
//                         >
//                           <img
//                             src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
//                             className="rounded-circle shadow-1 mb-4 mb-lg-0"
//                             alt="woman avatar"
//                             width="150"
//                             height="150"
//                           />
//                         </MDBCol>
//                         <MDBCol
//                           md="9"
//                           lg="7"
//                           xl="8"
//                           className="text-center text-lg-start mx-auto mx-lg-0"
//                         >
//                           <h4 className="mb-4">
//                           Jaya Prakash-Nazih Group
//                           </h4>
//                           <p className="mb-0 pb-3">
//                             Sed ut perspiciatis unde omnis iste natus error sit
//                             voluptatem accusantium doloremque laudantium, totam
//                             rem aperiam, eaque ipsa quae ab illo inventore
//                             veritatis et quasi architecto beatae vitae dicta
//                             sunt explicabo. Nemo enim ipsam voluptatem quia
//                             voluptas sit aspernatur.
//                           </p>
//                         </MDBCol>
//                       </MDBRow>
//                     </MDBCol>
//                   </MDBRow>
//                 </MDBCarouselItem>
//                 <MDBCarouselItem>
//                   <MDBRow className="d-flex justify-content-center">
//                     <MDBCol lg="10" xl="8">
//                       <MDBRow>
//                         <MDBCol
//                           lg="4"
//                           className="d-flex justify-content-center"
//                         >
//                           <img
//                             src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
//                             className="rounded-circle shadow-1 mb-4 mb-lg-0"
//                             alt="woman avatar"
//                             width="150"
//                             height="150"
//                           />
//                         </MDBCol>
//                         <MDBCol
//                           md="9"
//                           lg="7"
//                           xl="8"
//                           className="text-center text-lg-start mx-auto mx-lg-0"
//                         >
//                           <h4 className="mb-4">
//                           JAdel Obdao-Scalla Contracting LLC
//                           </h4>
//                           <p className="mb-0 pb-3">
//                             At vero eos et accusamus et iusto odio dignissimos
//                             qui blanditiis praesentium voluptatum deleniti atque
//                             corrupti quos dolores et quas molestias excepturi
//                             sint occaecati cupiditate non provident, similique
//                             sunt in culpa qui officia mollitia animi id laborum
//                             et dolorum fuga.
//                           </p>
//                         </MDBCol>
//                       </MDBRow>
//                     </MDBCol>
//                   </MDBRow>
//                 </MDBCarouselItem>
//               </MDBCarousel>
//             </MDBCardBody>
//           </MDBCard>
//           <div className="text-center mt-4 pt-2">
//             <MDBIcon fas icon="quote-right" size="3x" className="text-white" />
//           </div>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }
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
import personImage from '../../images/person-profile-image-icon.svg'

export default function Testimonials() {
  return (
    <>
      <h1 className="testimonial-header">TESTIMONIALS</h1>
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
                          src={personImage}
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
                          // src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                          src={personImage}
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
                          // src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                          src={personImage}
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
