import React from "react";
import './Logos.css';
import birla from '../../images/logoImage/birlaGroup.png';
import discovery from '../../images/logoImage/discovery.png';
import hitachi from '../../images/logoImage/hitachi.png';
import hudco from '../../images/logoImage/hudco.png';
import indianAccounting from '../../images/logoImage/indianAccounting.png';
import kei from '../../images/logoImage/kei.png';
import meridien from '../../images/logoImage/meridien.png';
import indianOil from '../../images/logoImage/indianOil.png';
import gail from '../../images/logoImage/gail.png';
import ircon from '../../images/logoImage/ircon.png';
import powergrade from '../../images/logoImage/powergrade.png';
import webEcreater from '../../images/logoImage/webEcreater.png';
import icsi from '../../images/logoImage/icsi.png';
import birlaSugar from '../../images/logoImage/birlaSugar.png';
import pfc from '../../images/logoImage/pfc.png';
import lex from '../../images/logoImage/lex.png';
import ndts from '../../images/logoImage/ndts.png';
import { Slide } from "react-slideshow-image";

const logosClient1 = [
  { src: birla, alt: 'Birla Group', className: 'logo-images-birla' },
  { src: kei, alt: 'KEI', className: 'logo-images-kei' },
  { src: discovery, alt: 'Discovery', className: 'logo-images-discovery' },
  { src: hudco, alt: 'HUDCO', className: 'logo-images-hudco' },
  { src: hitachi, alt: 'Hitachi', className: 'logo-images-hitachi' },
  { src: icsi, alt: 'icsi', className: 'logo-images-icsi' },
  
  { src: indianOil, alt: 'Indian Oil', className: 'logo-images-indianOil' },
];

const logosClient2 = [
  { src: meridien, alt: 'Meridien', className: 'logo-images-meridien' },
  { src: birlaSugar, alt: 'birla Sugar', className: 'logo-images-birlaSugar' },
  { src: gail, alt: 'GAIL', className: 'logo-images-gail' },
  { src: ircon, alt: 'IRCON', className: 'logo-images-ircon' },
  { src: powergrade, alt: 'Powergrade', className: 'logo-images-powergrade' },
  { src: webEcreater, alt: 'Web Ecreater', className: 'logo-images-webEcreater' },
  { src: pfc, alt: 'pfc', className: 'logo-images-pfc' }
];
 const logosPartner1=[
  { src:lex, alt:'lex', className:"logo-images-lex"},
  { src: indianAccounting, alt: 'indainAccounting', className: 'logo-images-indianAccounting' },
  { src:ndts, alt:'ndts', className:"logo-images-ndts"}


 ];
const properties = {
  prevArrow: <button className="buttonlogoStyleLeft"><img alt="Previous" /></button>,
  nextArrow: <button className="buttonlogoStyleRight"><img alt="Next" /></button>,
  duration: 3000, // Slide display duration in milliseconds (2 seconds)
  transitionDuration: 3000,
};

function Logo() {
  return (
  <>
  <h2 className="logo-heading-client">Our Valuable Clients</h2>
    <Slide {...properties} className="logo-slider">
      
      <div className="each-slide-effects">
        <div className='logo-container'>
          <div className='logo-inner-container'>
            {logosClient1.map((logo, index) => (
              <img
                key={index}
                className={logo.className}
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="each-slide-effects">
        <div className='logo-container'>
          <div className='logo-inner-container'>
            {logosClient2.map((logo, index) => (
              <img
                key={index}
                className={logo.className}
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </Slide>
  <h2 className="logo-heading-partner">Our Valuable Partners</h2>
    <Slide {...properties} className="logo-slider">
      </Slide>
    <div className='logo-container'>
    <div className='logo-inner-container'>
      {logosPartner1.map((logo, index) => (
        <img
          key={index}
          className={logo.className}
          src={logo.src}
          alt={logo.alt}
        />
      ))}
    </div>
  </div>
    </>
  );
}

export default Logo;
