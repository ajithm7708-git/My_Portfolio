import React, { useEffect, useState } from 'react';
import { Container, Row, Col,Card, CardSubtitle, CardText,Button } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import "../Intership.css";




const Internship = React.forwardRef((props, ref) => {
    const [animate1, setAnimate1] = useState(true);
useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate1(false);
    }, 500); // Duration of the animation in milliseconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <section ref={ref} className='newsection'>
      <Container>
        <Slide bottom>
          <h2 className='txtalignab'>Internship</h2>
          <Row>
          <Col sm={12} md={12}>
    <Card className={`intership-card custom1-card ${animate1 ? 'animate1' : ''}`}>
      <Card.Body style={{padding:"5px"}}>
        <Card.Title style={{textAlign:"center"}} className='mb-1'> Learning Management System Platform for Investor Education</Card.Title>
        <Card.Subtitle className="mt-2 text-muted "><b>Details about the site:- </b> This is an online investor education resource center developed jointly by NSE Investor Protection
 FundTrust (NSE IPFT). It helps the users to understand the Investment concepts with video
 tutorials for free. <i> My Intership Modules are:-</i> Audio, Video and Discussion Forum.</Card.Subtitle>
        <Card.Subtitle className="mt-2 text-muted "><b>Technologies:-</b> React Js, Redux, JavaScript, HTML5, CSS, Bootstrap, GIT, RestAPI, MySQL, Python Flask Framework.</Card.Subtitle>
        <Card.Text className='mt-2'><b style={{color:"#212529BF"}}>Description:-</b> In this internship project we have created multiple reusable components using React, please find some of the components details below. <br/><br/><b>Audio <i class="fa fa-headphones" aria-hidden="true"></i> :- </b>In the audio component we can play the audio in preferred Language.We have options like <i>Volume up down, Play & Pause audio, Forward & Backward </i> the audio. We can modify Playback Speed.<br /><br /><b>Video <i class="fa fa-video-camera" aria-hidden="true"></i> :-</b> This Video Component is played very important roal in this application. This react video player have more options like <i>Maximize & Minimize video,Full screen video, Volume up down, Play & Pause, Forward & Backward, Zoom in & Zoom out, Subtitles, Quality, Playback Speed. </i><br/><br /><b>Discussion Forum <i class="fa fa-comments" aria-hidden="true"></i> :-</b> Discussion Forum is nothing but Comments, User can post the comments, Reply for particular comment, React all comments relatted to that video, also can rise the Query or Question and ect.</Card.Text>
        <CardSubtitle className='mb-2'>Visit site:- <a href="https://pie.ccmrm.org/">Platform for Investor Education</a></CardSubtitle>
      <CardSubtitle>Download Internship Completion Cerificate:- <Button style={{marginLeft:"6px",marginTop:"6px",backgroundColor:"#34bfbf",color:"white",borderColor:"#0a252c"}} href="/intershipdoc.pdf" download>
              Download <i class="fa fa-download" aria-hidden="true"></i>
            </Button></CardSubtitle>
      </Card.Body>
    </Card>
          </Col>
      </Row>
        </Slide>
      </Container>
    </section>
  );
});

export default Internship;
