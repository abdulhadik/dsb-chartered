import React, { useState, useEffect } from "react";
import "./ServicesPara.css";
import AuditImg from "../../images/servicesImage/AuditImg.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import { Link } from "react-router-dom";

function ServicesPara(props) {
  const [visible, setVisible] = useState(false);

  const toggleOffcanvas = () => {
    setVisible(!visible);
  };
  return (
    <div className="servicePara-container">
      <div className="left-text" data-aos="fade-right">
        <h2>{props.headingPara}</h2>
        <p>
          <strong>{props.p1Bolder}</strong> {props.p1}
        </p>
        <p>{props.p2}</p>
        <p>{props.p3}</p>
        <div className="services-offcanvas">
          <Button className="services-button" onClick={toggleOffcanvas}>
            Other Services
          </Button>
          <Offcanvas isOpen={visible} toggle={toggleOffcanvas} direction="end">
            <OffcanvasHeader toggle={toggleOffcanvas}>
              <Link to="./audit-and-assuarnce">Audit And Assurance</Link>
            </OffcanvasHeader>

            <OffcanvasBody>
              <strong>Audit And Firms</strong>
            </OffcanvasBody>
          </Offcanvas>
        </div>
      </div>
      <div className="right-image">
        <img className="audit-image" src={AuditImg} alt="Audit-image" />
      </div>
    </div>
  );
}

export default ServicesPara;
