import React from "react";
import { Col, Row } from "reactstrap";

function sectionTwo() {
  return (
    <Col sm={12} className="s2">
      <Row className="s2-divider">
        <Col className="left">
          <h4>I'm like the Robin Hood of PSD files.</h4>
        </Col>
        <Col className="right">
          <p>&#8594;</p>
        </Col>
      </Row>
    </Col>
  );
}

export default sectionTwo;
