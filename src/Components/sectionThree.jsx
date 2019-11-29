import React from "react";
import { Col, Row } from "reactstrap";
import bridge from "../images/bridge.jfif";
import woman from "../images/woman.jfif";

function sectionThree() {
  return (
    <Col className="s3">
      <Row>
        <Col sm={4} md={4} className="left p-0">
          <p>&#8594;</p>
        </Col>
        <Col sm={4} md={4} className="middle p-0">
          <img src={bridge} alt="bridge" className="img-responsive" />
        </Col>
        <Col sm={4} md={4} className="right p-0">
          <img src={woman} alt="bridge" className="img-responsive" />
        </Col>
      </Row>
    </Col>
  );
}

export default sectionThree;
