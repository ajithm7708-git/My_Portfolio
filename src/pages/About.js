import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import '../About.css';

const About = React.forwardRef((props, ref) => {

  const [isVisible, setIsVisible] = useState(false);
 

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
    <section ref={ref} className="about-page newsection">
      <Container>
        <Fade bottom>
          <Row className="align-items-center">
            <Col md={8}>
            <h2 className='txtalignab'>About Me</h2>
                <ul style={{marginBottom:"2px",fontWeight:"500px"}}>
                    <li>Highly skilled and dedicated React Developer having 2+ years of hands-on experience in designing, developing dynamic and integrating web applications using Front end Technologies.</li>
                    <li>Very Good Knowladge Experience in React.js for creating interactive UI's and Familiar with creating Custom reusable react components library.</li>
                    <li>Understanding popular React.js state management Redux, Context API and Proficient in React Hooks.</li>
                    <li>Proficient in HTML5, CSS3, Bootstrap, JavaScript(ES6) and modern libraries.</li>
                    <li>Familiar with REST APIs and JSON web tokens. Having experience in building and maintaining responsive websites.</li>
                    <li>I am good at. <i class="fa fa-thumbs-o-up" aria-hidden="true"></i></li>
                </ul>
                <div className='row' style={{paddingLeft:"25px"}}>
                {/* <div className={`animated-label badge badge-primary ${isVisible ? 'fade-in' : ''}`}>
        Welcome to my portfolio!
      </div> */}
      <div className="skills-labels">
        <span className="badge badge-info" style={{backgroundColor:"#f8f9fa",margin:"3px",color:"rgb(3 117 117)",fontSize:"16px"}}>React</span>
        <span className="badge badge-success" style={{backgroundColor:"#f8f9fa",margin:"3px",color:"rgb(3 117 117)",fontSize:"16px"}}>Redux & Hooks</span>
        <span className="badge badge-info" style={{backgroundColor:"#f8f9fa",margin:"3px",color:"rgb(3 117 117)",fontSize:"16px"}}>JavaScript ES6</span>
        <span className="badge badge-warning" style={{backgroundColor:"#f8f9fa",margin:"3px",color:"rgb(3 117 117)",fontSize:"16px"}}>JSX</span>
        <span className="badge badge-danger" style={{backgroundColor:"#f8f9fa",margin:"3px",color:"rgb(3 117 117)",fontSize:"16px"}}>GraphQL & Rest APIs</span>
        <span className="badge badge-danger" style={{backgroundColor:"#f8f9fa",margin:"3px",color:"rgb(3 117 117)",fontSize:"16px"}}>Node js</span>
        <span className="badge badge-danger" style={{backgroundColor:"#f8f9fa",margin:"3px",color:"rgb(3 117 117)",fontSize:"16px"}}>NPM</span>
        <span className="badge badge-danger" style={{backgroundColor:"#f8f9fa",margin:"3px",color:"rgb(3 117 117)",fontSize:"16px"}}>HTML 5</span>
        <span className="badge badge-danger" style={{backgroundColor:"#f8f9fa",margin:"3px",color:"rgb(3 117 117)",fontSize:"16px"}}>CSS & SCSS</span>
        <span className="badge badge-danger" style={{backgroundColor:"#f8f9fa",margin:"3px",color:"rgb(3 117 117)",fontSize:"16px"}}>GIT, Github</span>
        <span className="badge badge-danger" style={{backgroundColor:"#f8f9fa",margin:"3px",color:"rgb(3 117 117)",fontSize:"16px"}}>Pyhton</span>
        <span className="badge badge-danger" style={{backgroundColor:"#f8f9fa",margin:"3px",color:"rgb(3 117 117)",fontSize:"16px"}}>MySQL</span>
        <span className="badge badge-secondary" style={{backgroundColor:"#f8f9fa",margin:"3px",color:"rgb(3 117 117)",fontSize:"16px"}}>Bootstrap, Material UI</span>
      </div>
                </div>
            </Col>
            <Col md={4}>
    
      <img src="https://wallpapercave.com/wp/wp3950261.jpg" className={`about-me-image ${isVisible ? 'visible' : ''} img-fluid`} alt="Responsive image"></img>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
});

export default About;
