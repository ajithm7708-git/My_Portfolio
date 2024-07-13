import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import EducationCard from './EducationCard';

const educationDetails = [
  {
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Thiruvalluvar University',
    duration: '2013 - 2016',
    description: 'Thiruvannamalai, Tamil Nadu, India.',
  },
  {
    degree: 'Master of Computer Application (MCA)     ',
    institution: 'Dr. Ambedkar Institute of Technology',
    duration: '2016 - 2019',
    description: 'Bangalore, Karnataka, India.',
  },
];

const Education = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className='newsection'>
      <Container>
        <Slide left>
          <h2 className='txtalignab'>Education</h2>
          <Row>
        {educationDetails.map((education, index) => (
          <Col key={index} sm={12} md={6}>
            <EducationCard {...education} />
          </Col>
        ))}
      </Row>
        </Slide>
      </Container>
    </section>
  );
});

export default Education;
