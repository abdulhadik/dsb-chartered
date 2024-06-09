import React from 'react';
import './TabContent.css'

const TabContent = (props) => {
  return (
    <div className='tab-content-container'>
        <div className='tab-content-left'>
            <h3>{props.heading}</h3>
            <p className='para1'>{props.para1}</p>
            <p className='para2'>{props.para2}</p>
            <button>
            Read More
            </button>
            <h6 className='tabName'>{props.name}</h6>
            <h6 className='tabTel'>
            {props.phone}</h6>
        
        </div>

    </div>
  )
}

export default TabContent;
