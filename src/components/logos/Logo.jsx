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
import lex from '../../images/logoImage/lex.png';
import ndts from '../../images/logoImage/ndts.png';


function Logo() {
  return (
    <div className='logo-container'>
    <div className='logo-inner-container'>
      <img  className='logo-images-birla' src={birla} alt="logo" />
      <img  className='logo-images-kei' src={kei} alt="logo" />
      <img  className='logo-images-discovery' src={discovery} alt="logo" />
      <img  className='logo-images-hudco' src={hudco} alt="logo" />
      <img  className='logo-images-hitachi' src={hitachi} alt="logo" />
      
      <img  className='logo-images-indianAccounting' src={indianAccounting} alt="logo" />
    
      <img  className='logo-images-meridien' src={meridien} alt="logo" />
      <img  className='logo-images-indianOil' src={indianOil} alt="logo" />
      <img  className='logo-images-gail' src={gail} alt="logo" />
      <img  className='logo-images-lex' src={lex} alt="logo" />
      <img  className='logo-images-ndts' src={ndts} alt="logo" />
      
    </div>
    </div>
  );
}

export default Logo;
