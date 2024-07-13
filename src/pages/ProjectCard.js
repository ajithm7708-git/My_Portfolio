import React, { useState } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import '../ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const description = showFullDescription
    ? project.description
    : project.description.split(' ').slice(0, 15).join(' ') + '...';

  return (
    <Card className="project-card">
      <Carousel>
        {project.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 rounded" src={image} alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text style={{textAlign:"justify"}}>
          {description}
          {!showFullDescription && (
            <Button variant="link" onClick={toggleDescription}>
             Read More
            </Button>
          )}
        </Card.Text>
        {showFullDescription && (
          <Button variant="link" onClick={toggleDescription}>
            Show Less
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
