import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import '../EducationCard.css';

const EducationCard = ({ degree, institution, duration, description }) => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500); // Duration of the animation in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className={`education-card custom-card ${animate ? 'animate' : ''}`}>
      <Card.Body>
        <Card.Title>{degree}</Card.Title>
        <Card.Subtitle className="mb-2 mt-2 text-muted">{institution}</Card.Subtitle>
        <Card.Text style={{marginBottom:"5px"}}>{duration}</Card.Text>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EducationCard;
