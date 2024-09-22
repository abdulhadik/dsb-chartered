import React from "react";
import "./ServiceConsult.css";
export default function ServiceConsult(props) {
   
  return (
    <div className="auditList-container">
      <div className="left-Audit">
        <h2>{props.headingConsult}</h2>
        <p>
          {props.paraConsult}
        </p>
      </div>
      <div className="right-Audit">
        <div className="image-div" ></div>
        <div className='right-details'>
          <p className="p-consultation">Call for consultation</p>
          <p className='p-name'>Mr. Someone</p>
          <p className='p-mob'>Mob: 12312239-572</p>
          <p classsName='p-email'>Email: abcdefghjagv@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
