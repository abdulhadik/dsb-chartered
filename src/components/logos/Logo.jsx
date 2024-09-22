import React from "react";
import "../../index.css";
import { motion } from "framer-motion";
import bms from "../../images/logoImage/bms.png";
import Bookkeeper from "../../images/logoImage/Bookkeeper.png";
import Dashmesh from "../../images/logoImage/Dashmesh.png";
import Edu from "../../images/logoImage/Edu.png";
import ElectroRak from "../../images/logoImage/ElectroRak.png";
import Floors from "../../images/logoImage/Floors.png";
import INextise from "../../images/logoImage/INextise.png";
import Itrom from "../../images/logoImage/Itrom.png";
import kashka from "../../images/logoImage/kashka.png";
import logo from "../../images/logoImage/logo.png";
import NewEast from "../../images/logoImage/NewEast.png";
import Picture1 from "../../images/logoImage/Picture1.png";
import pnb from "../../images/logoImage/pnb.png";
import Restyle from "../../images/logoImage/Restyle.png";
import Sai from "../../images/logoImage/Sai.png";
import SevenHill from "../../images/logoImage/SevenHill.png";
import winchem from "../../images/logoImage/winchem.png";
import TheArt from "../../images/logoImage/TheArt.png";
import vivo from "../../images/logoImage/vivo.png";
import smj from "../../images/logoImage/smj.png";
import alyah from "../../images/logoImage/alyah.png";
import stuart from "../../images/logoImage/stuart.png";
import vsp from "../../images/logoImage/vsp.png";
import krestone from "../../images/logoImage/krestone.png";
import meydan from "../../images/logoImage/meydan.png";
import rakez from "../../images/logoImage/rakez.png";

function Logo() {
  const logos = [
    bms,
    Bookkeeper,
    Dashmesh,
    Edu,
    ElectroRak,
    Floors,
    INextise,
    Itrom,
    kashka,
    logo,
    NewEast,
    Picture1,
    pnb,
    Restyle,
    Sai,
    SevenHill,
    winchem,
    TheArt,
    vivo,
  ];
  const logos1 = [smj, alyah, stuart, vsp, krestone];
  const logos2 = [meydan,rakez];

  return (
    <div className="logo-main-container text-center mt-[50px] mb-[50px]">
      <h2 className="logo-heading-client ">Our Clients</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.6, delay: 0.2, ease: [0.44, 0, 0.56, 1] },
        }}
        viewport={{ amount: "some", once: true }}
        className="w-full flex flex-col items-center justify-center gap-4 px-[20px] sm:px-[60px] "
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
                <li
                  key={index}
                  className="flex items-center justify-center w-[121px]"
                >
                  <img
                    src={src}
                    alt="logo"
                    className="w-full h-auto object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

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
                <li
                  key={index}
                  className="flex items-center justify-center w-[121px]"
                >
                  <img
                    src={src}
                    alt="logo"
                    className="w-full h-auto object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
      <h2 className="logo-heading-client ">Our Partners</h2>

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
      {/* Center the logos and don't repeat */}
      <ul className="flex gap-[80px] justify-center">
        {logos2.map((src, index) => (
          <li
            key={index}
            className="flex items-center justify-center w-[121px]"
          >
            <img
              src={src}
              alt="logo"
              className="w-full h-auto object-contain"
            />
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
