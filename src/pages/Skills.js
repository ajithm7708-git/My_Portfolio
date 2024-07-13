import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import "../Skills.css"

const Skills = React.forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const skillsData = [
    { skill: 'React Js, Redux, Hooks', level: 90 },
    { skill: 'JavaScript (ES6), DOM, JSX', level: 85 },
    { skill: 'Node + npm', level: 75 },
    { skill: 'HTML 5', level: 90 },
    { skill: 'CSS & SCSS', level: 80 },
    { skill: 'GraphQL and Rest APIs, GIT, Axios...', level: 85 },
    { skill: 'Bootstrap, Material UI & Tailwind,', level: 80 },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const aboutMePosition = ref.current.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.5;

      if (aboutMePosition < screenPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div ref={ref} className='newsection'>
      <Container>
      <Slide right>
        <Row>
        <h2 className='txtalignab'>Technical Skills</h2>
          <Col sm={6} style={{paddingLeft:"25px",paddingRight:"10px"}}>
          <img src="https://elearningimages.adobe.com/files/2020/06/AdobeStock_244900189-scaled.jpeg" className={`about-me-image ${isVisible ? 'visible' : ''} img-fluid`} alt="Responsive image"></img>
       </Col>
          <Col sm={6} style={{paddingLeft:"29px"}}>
          {skillsData.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skill-name">{skill.skill}</div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${skill.level}%` }}
            >
              <span className="progress-text">{skill.level}%</span>
            </div>
          </div>
        </div>
      ))}
          </Col>
        </Row>
       
        </Slide>
      </Container>
    </div>
  );
});

export default Skills;
