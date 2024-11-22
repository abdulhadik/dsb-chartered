import React from "react";
import "../../index.css";
import { motion } from "framer-motion";
import img1 from "../../images/logoImage/1.png";
import img2 from "../../images/logoImage/2.png";
import img3 from "../../images/logoImage/3.png";
import img4 from "../../images/logoImage/4.png";
import img5 from "../../images/logoImage/5.png";
import img6 from "../../images/logoImage/6.png";
import img7 from "../../images/logoImage/7.png";
import img8 from "../../images/logoImage/8.png";
import img9 from "../../images/logoImage/9.png";
import img10 from "../../images/logoImage/10.png";
import img11 from "../../images/logoImage/11.png";
import img12 from "../../images/logoImage/12.png";
import img13 from "../../images/logoImage/13.png";
import img14 from "../../images/logoImage/14.png";
import img15 from "../../images/logoImage/15.png";
import img16 from "../../images/logoImage/16.png";
import img17 from "../../images/logoImage/17.png";
import img18 from "../../images/logoImage/18.png";
import img19 from "../../images/logoImage/19.png";
import img20 from "../../images/logoImage/20.png";
import img21 from "../../images/logoImage/21.png";
import img22 from "../../images/logoImage/22.png";
import img23 from "../../images/logoImage/23.png";
import img24 from "../../images/logoImage/24.png";
import img25 from "../../images/logoImage/25.png";

function Logo() {
  const logos = [
    img1, img4, img5, img6, img7, img8, img9, img10, img11, img13, img14, img16, img17, img18, img21, img22, img24, img25
  ];
  const logos1 = [img19, img3, img20, img23, img2];
  const logos2 = [img15, img12];

  return (
    <div className="logo-main-container text-center mt-[50px] mb-[50px]">
      {/* Clients Section */}
      <h2 className="logo-heading-client">Our Clients</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.6, delay: 0.2, ease: [0.44, 0, 0.56, 1] },
        }}
        viewport={{ amount: "some", once: true }}
        className="w-full flex flex-col items-center justify-center gap-4 px-[20px] sm:px-[60px]"
      >
        <div className="relative w-full overflow-hidden">
          <div
            className="flex w-full h-[130px] items-center relative"
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 95%)",
            }}
          >
            <ul className="animate-scroll">
              {logos.concat(logos).map((src, index) => (
                <li key={index} className="flex items-center justify-center w-[121px]">
                  <img src={src} alt="logo" className="w-auto h-[70px]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Associates Section */}
      <h2 className="logo-heading-client">Our Associates</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.6, delay: 0.2, ease: [0.44, 0, 0.56, 1] },
        }}
        viewport={{ amount: "some", once: true }}
        className="w-full flex flex-col items-center justify-center gap-4 px-[20px] sm:px-[60px]"
      >
        <div className="relative w-full overflow-hidden">
          <div
            className="flex w-full h-[150px] items-center relative"
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 95%)",
            }}
          >
            <ul className="animate-scroll">
              {logos1.concat(logos1).map((src, index) => (
                <li key={index} className="flex items-center justify-center w-[121px]">
                  <img src={src} alt="logo" className="w-auto h-[70px]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Partners Section */}
      <h2 className="logo-heading-client">Our Partners</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.6, delay: 0.2, ease: [0.44, 0, 0.56, 1] },
        }}
        viewport={{ amount: "some", once: true }}
        className="w-full flex flex-col items-center justify-center gap-4 px-[20px] sm:px-[60px] mt-[10px]"
      >
        <div className="relative w-full overflow-hidden">
          <div
            className="flex w-full h-[150px] items-center justify-center relative"
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 95%)",
            }}
          >
            <ul className="flex gap-[20px] justify-center">
              {logos2.map((src, index) => (
                <li key={index} className="flex items-center justify-center w-[121px]">
                  <img src={src} alt="logo" className="w-auto h-[80px]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Logo;
