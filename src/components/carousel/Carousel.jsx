import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../images/carousel1.jpg";
import image2 from "../../images/carousel2.jpg";
import image3 from "../../images/carousel3.jpg";
import image4 from "../../images/carousel4.jpg";
import image5 from "../../images/carousel5.jpg";
import respImage1 from "../../images/responsive-1.png";
import respImage2 from "../../images/responsive-2.jpg";
import respImage3 from "../../images/responsive-3.jpg";
import respImage4 from "../../images/responsive-4.jpg";
import respImage5 from "../../images/responsive-5.jpg";
import leftArrow from "../../images/previousButton.png";
import rightArrow from "../../images/nextButton.png";
import { Link } from 'react-router-dom';


const defaultImages = [image1, image2, image3, image4, image5];
const responsiveImages = [respImage1, respImage2, respImage3, respImage4, respImage5];

const properties = {
  prevArrow: <button className="buttonStyleLeft"><img src={leftArrow} alt="Previous" /></button>,
  nextArrow: <button className="buttonStyleRight"><img src={rightArrow} alt="Next" /></button>,
  duration: 2000, // Slide display duration in milliseconds (2 seconds)
  transitionDuration: 500,
};

const titles = [
  "Audit Firms in Dubai, UAE",
  "Company Incorporation",
  "Accounting & Bookkeeping",
  "Business Advisory & Consulting",
  "Taxation",
];

const descriptions = [
  "High-Quality Audit Services in accordance with the Code of Ethics and International Standards meeting business needs.",
  "World class customer service ensuring promptness and efficiency with promising growth projections.",
  "Wide range of Accounting Services tailored as per your business needs a one-stop solution.",
  "Advising apt changes making the best differences for your business delivering concrete solutions.",
  "Tax Proficient experts progressing your business operations in compliance with global and local Tax laws.",
];

const SlideShow = () => {
  const [images, setImages] = useState(defaultImages);

  const handleResize = () => {
    if (window.innerWidth <= 500) {
      setImages(responsiveImages);
    } else {
      setImages(defaultImages);
    }
  };

  useEffect(() => {
    handleResize(); // Set the initial set of images
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Slide {...properties} autoplay={true}>
      {images.map((image, index) => (
        <div className="each-slide-effect" key={index}>
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="inside-slide-div">
              <div>
                <h1>{titles[index]}</h1>
                <h3>{descriptions[index]}</h3>
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slide>
  );
};

const Carousel = () => {
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoplay(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return <SlideShow autoplay={autoplay} />;
};

export default Carousel;
