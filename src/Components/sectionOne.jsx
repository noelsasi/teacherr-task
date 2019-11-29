import React from "react";
import { Container, Col } from "reactstrap";

const SectionOne = props => {
  return (
    <Container fluid={true} className="section-one">
      <Col md="12" className="wrapper">
        <div className="main-title">
          <h1>Awesome Free PSD templates & Resources</h1>
        </div>
        <div className="sub-title">
          <h5>www.BlazRobar.com</h5>
          <p className="right-arrow"> &#8594;</p>
        </div>
      </Col>
    </Container>
  );
};

export default SectionOne;
