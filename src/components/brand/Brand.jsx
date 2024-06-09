import React from 'react'
import './Brand.css'
const Brand = (props) => {
  return (
    <div className='brand-container'>
      <div className='brand-text'>
            <h2 className='brand-name'>{props.name}</h2>
            <p className='brand-details'>{props.details}</p>
      </div>
      </div>
  )
}

export default Brand;
