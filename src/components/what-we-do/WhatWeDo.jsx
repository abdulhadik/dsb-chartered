import React, { useState } from 'react';
import './WhatWeDo.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import TabContent from './tab-content/TabContent';
import { tabDetails } from '../data';

const WhatWeDo = () => {
  const [activeButton, setActiveButton] = useState('AUDIT & ASSURANCE');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonStyle = {
    boxShadow: '0px 0px 14px -7px #5643CC',
    // boxShadow: '0px 0px 14px -7px #f09819',
    // backgroundImage: 'linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%)',
    backgroundImage: 'linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)',
    cursor: 'pointer',
    color: 'white'
  };

  const getTabDetails = (buttonName) => {
    switch (buttonName) {
      case 'AUDIT & ASSURANCE':
        return tabDetails[0];
      case 'BUSINESS ADVISORY':
        return tabDetails[1];
      case 'ACCOUNTING AND BOOKKEEPING':
        return tabDetails[2];
      case 'COMPANY SETUP':
        return tabDetails[3];
      case 'TAXATION':
        return tabDetails[4];
      default:
        return tabDetails[0];
    }
  };

  const activeTabDetails = getTabDetails(activeButton);

  return (
    <div className='whatWeDo-container'>
      <div className='whatWeDo-text'>
        <h2>What we do</h2>
        <p>
          Leading Business & Financial Consultancy firm in Dubai, UAE. DSB Chartered Accountants & Its Associate Professional Firms (DSB Chartered Accountants Group) are ISO 9001-2015 Certified International Chartered Accountants Firms having its headquarters in Dubai.
        </p>
      </div>
      <ButtonGroup className="Button-group">
        <Button
          className="button-group"
          onClick={() => handleButtonClick('AUDIT & ASSURANCE')}
          style={activeButton === 'AUDIT & ASSURANCE' ? buttonStyle : {}}
        >
          AUDIT & ASSURANCE
        </Button>
        <Button
          className="button-group"
          onClick={() => handleButtonClick('BUSINESS ADVISORY')}
          style={activeButton === 'BUSINESS ADVISORY' ? buttonStyle : {}}
        >
          BUSINESS ADVISORY
        </Button>
        <Button
          className="button-group"
          onClick={() => handleButtonClick('ACCOUNTING AND BOOKKEEPING')}
          style={activeButton === 'ACCOUNTING AND BOOKKEEPING' ? buttonStyle : {}}
        >
          ACCOUNTING AND BOOKKEEPING
        </Button>
        <Button
          className="button-group"
          onClick={() => handleButtonClick('COMPANY SETUP')}
          style={activeButton === 'COMPANY SETUP' ? buttonStyle : {}}
        >
          COMPANY SETUP
        </Button>
        <Button
          className="button-group"
          onClick={() => handleButtonClick('TAXATION')}
          style={activeButton === 'TAXATION' ? buttonStyle : {}}
        >
          TAXATION
        </Button>
        
      </ButtonGroup>
      <div>
        <TabContent
          key={activeTabDetails.id}
          heading={activeTabDetails.tabHeading}
          para1={activeTabDetails.tabPara1}
          para2={activeTabDetails.tabPara2}
          name={activeTabDetails.tabName}
          phone={activeTabDetails.tabPhone}
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
