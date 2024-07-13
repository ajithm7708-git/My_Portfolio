import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import '../About.css';

const About1 = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="about-page newsection">
      <Container>
        <Fade bottom>
          <Row className="align-items-center">
            <Col md={2}></Col>
            <Col md={4} className='align-items-cente'>
              <Image src="img2.jpg" className='rounded-circle img' alt="My Photo" />
            </Col>
            <Col md={5}>
               <Col sm={3} className='animated bounceInRight hel'>
                <p className='animated bounceInRight hell hel'>Hello I'm</p>
                </Col>
              <h1 className='txtalign'>Ajith M</h1>
              <h3 className='txtalign'>Frontend React Developer</h3>
                <div className='desctext'>
                <p className='iconst'><i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;ajithm7708@gmail.com</p>
                <p className='iconst'><i class="fa fa-mobile fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;+91 7337635569</p>
                <p className='iconst'><i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Bangalore, Karnataka, India</p>
                </div>
            </Col>
            
          </Row>
        </Fade>
      </Container>
    </section>
  );
});

export default About1;
