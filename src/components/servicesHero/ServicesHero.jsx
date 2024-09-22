import React from "react";
import "./ServicesHero.css";

function ServicesHero(props) {
  return (
    <div className="container-servicesHero">
      <div className="left-container">
        <h1 className="left-heading">{props.headingServicesHero}</h1>
        <p className="left-sentence">
         {props.paraServicesHero}
        </p>
      </div>
      <div className="right-container">
        <div className="img-1"></div>
        <div className="img-2"></div>
        <div className="img-3"></div>
        <div></div>
      </div>
    </div>
  );
}
export default ServicesHero;
