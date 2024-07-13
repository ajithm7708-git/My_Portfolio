import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className=" text-white p-2 pt-3 text-center" style={{backgroundColor:"rgb(7 151 152)"}}>
      <Container>
        <Row>
          <Col>
            <p>All rights reserved © 2024 ajithm7708@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
