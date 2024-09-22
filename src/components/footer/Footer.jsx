import React from "react";
import "./Footer.css";
import VisaCard from '../../images/VisaCard.png'
import MasterCard from '../../images/MasterCard.png'
import dubaiFreezone from '../../images/dubaiFreezone.png'
import expo from '../../images/expo.png'
import jafza from '../../images/jafza.png'
import rakez from '../../images/rakez.png'
import silicon from '../../images/silicon.png'
const Footer = () => {
  return (
    <div className="footer-container">
    
      <div className="details-container">
        <div className="details-office">
          <h3>Corporate office</h3>
          <p>
          Prime Tower - C-1 31st Floor<br className='hide-on'></br>Business Bay - Dubai
          </p>
          <p>+971 054 467 7219</p>
          <p>info@dsbchartered.com</p>
          
        </div>
        <div className="details-services">
          <h3>Services</h3>
          <p>Audit Assurance Service</p>
          <p>Business Advisory Service</p>
          <p>Accounting and Bookkeeping</p>
          <p>Taxation</p>
          <p>Company Set Up</p>
          <p>Trade Finance in UAE</p>
        </div>
        <div className="details-company">
          <h3>Company</h3>
          <p>About</p>
          <p>Meet the Team</p>
          <p>Blog</p>
          <p>Events</p>
          <p>Audit Division</p>
          <p>Training Internships</p>
        </div>
        <div className="details-help">
          <h3>Help</h3>
          <p className='companyProfile'>Company profile</p>
          <p>Contact Us</p>
          <p>Learning Center</p>
          <p>Why Choose Us</p>
          <button className="button-36">Get Quote</button>
        </div>
      </div>
     
      <div className="terms-container">
        <p>Copyright © 2024 DSB Chartered Accountants Group</p>
        <div className="terms-logos">
          <img className='visaCard-img' src={VisaCard} alt='visa card'/>
          <img className='masterCard-img' src={MasterCard} alt='master card'/>
        </div>
        <div className="privacy-links">
          <ul>
          <li><a href="/">Terms and condition</a></li>
          <li>|</li>
          <li><a href="/">Privacy Statement</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
