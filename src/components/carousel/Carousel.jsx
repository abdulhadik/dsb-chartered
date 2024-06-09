import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../images/carousel1.jpg";
import image2 from "../../images/carousel2.jpg";
import image3 from "../../images/carousel3.jpg";
import image4 from "../../images/carousel4.jpg";
import image5 from "../../images/carousel5.jpg";
import 'react-slideshow-image/dist/styles.css';

const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px',
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}

const Carousel = () =>  {
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoplay(true);
    }, 2000); // 4 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <Slide {...properties}
      autoplay={autoplay}
      onChange={function noRefCheck() {}}
      onStartChange={function noRefCheck() {}}
    >
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: `url(${image1})`,
          }}
        >
          <div className="inside-slide-div">
            <div>
              <h1>Audit Firms in dubai, UAE</h1>
              <h3>
                High-Quality Audit Services in accordance with the Code of
                Ethics and <br></br>International Standards meeting business
                needs.
              </h3>
              <button>Read More</button>

            </div>
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: `url(${image2})`,
          }}  
        >
          <div className="inside-slide-div">
            <div>
              <h1>Company incorporation</h1>
              <h3>
                World class customer service ensuring promptness and efficiency
                with <br></br>promising growth projections.
              </h3>
              <button>Read More</button>

            </div>
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: `url(${image3})`,
          }}
        >
          <div className="inside-slide-div">
            <div>
              <h1>Accounting & Bookkeeping</h1>
              <h3>
                Wide range of Accounting Services tailored as per your business
                needs <br></br>a one stop solution.
              </h3>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: `url(${image4})`,
          }}
        >
          <div className="inside-slide-div">
            <div>
              <h1>Business Advisory & Consulting</h1>
              <h3>
                Advising apt changes making the best differences for your
                business delivering<br></br> concrete solutions.
              </h3>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: `url(${image5})`,
          }}
        >
          <div className="inside-slide-div">
            <div>
              <h1>Taxation</h1>
              <h3>
                Tax Proficient experts progressing your business operations in
                compliance with <br></br>global and local Tax laws.
              </h3>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default Carousel;
