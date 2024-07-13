import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CV = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='newsection'>
      <Container>
        <Row>
          <Col>
            <h2 className='txtalignab'>Download My CV</h2>
            <Button style={{marginLeft:"12px",marginTop:"6px",backgroundColor:"#34bfbf",color:"white",fontSize:"large",borderColor:"#0a252c"}} href="/Ajith_M_CV.pdf" download>
              Download CV <i class="fa fa-download" aria-hidden="true"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default CV;
