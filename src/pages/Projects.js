import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'KISOK Feedback and Event Management System',
    description: 'Developed and deployed a web application for feedback and event management on KIOSK systems installed in BIT.The application aims to collect, manage, and analyze user feedback efficiently to improve services. Providing upcoming Event information to the Students and Faculties. The platform has multi device support, Admin module to quickly configure the Event information, Feedback Questions, Download the Excel format feedback data with selected period for Improve Services, also view feedback data in the form of Charts.',
    images: [
      'https://www.lbcc.edu/sites/main/files/imagecache/medium/main-images/tile-upcoming-events.jpg?1602025080',
      'https://mdcthereporter.com/wp-content/uploads/2015/12/Kiosk.jpg',
      'https://i.ytimg.com/vi/Nz7h3P8Kvkc/maxresdefault.jpg',
      'https://strategyeducation.co.uk/wp-content/uploads/2020/05/The-Power-of-Feedback-Which-When-and-How.jpg',
      'https://acante.co.uk/wp-content/uploads/2024/01/shutterstock_2231223323-2-e1705677613765.jpg'
    ],
  },
  {
    title: 'PIE (Platform for Investor Education)',
    description: 'It is an online platform for investor education. Increase investor awareness and improving investor education. This is an online investor education resource center developed jointly by N Investor Protection. Fund Trust (NSE IPFT). It helps the users to understand the Investment concepts with video tutorials for free.',
    images: [
      'https://i1.wp.com/reclamationmagazine.com/wp-content/uploads/2019/08/edu2.jpg?ssl=1',
      'https://i1.wp.com/nairametrics.com/wp-content/uploads/2020/04/investments-are-unreliable-.jpg?fit=900,505&ssl=1',
      'https://i.ytimg.com/vi/JUm_8YlCF3A/maxresdefault.jpg',
      'https://enterslice.com/learning/wp-content/uploads/2022/01/Understand-Investor-Education-and-Protection-Fund-in-Detail.jpg',
      'https://skilloutlook.com/wp-content/uploads/2018/09/NSE-IIMB-min.jpg'
    ],
  },
  {
    title: 'DLP (Digital Learning Platform)',
    description: 'DLP is a product developed in-house at DigitalIT360 which is a cloud based online learning platform that provides various training courses, assessments, certificates for the registered candidates. The platform supports various content forms such as videos, audios, text files. The platform has multi device support, Admin module to quickly configure the courses, streams, candidate enrolment for training, analytics and many more.',
    images: [
      'https://wallpapercave.com/wp/wp3950314.png',
      'https://wallpapercave.com/wp/wp3950334.jpg',
      'https://c4.wallpaperflare.com/wallpaper/65/348/54/eyes-line-circles-information-face-hd-wallpaper-preview.jpg',
      'https://www.kovacorp.com/wp-content/uploads/2017/10/digital-customer-service-concept-image.jpeg',
      'https://www.therookee.com/blogs/assets/images/blog/rookee-blog-4-march-20220304142410-ZPMKTD.jpg'
    ],
  },
  // Add more projects as needed
];
const Projects = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className='newsection'>
      <Container>
        <h2 className='txtalignab'>Projects</h2>
        <Row>
        {projects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Zoom>
            <ProjectCard project={project} />
            </Zoom>
          </Col>
        ))}
          </Row>
          {/* Add more projects as needed */}
      
      </Container>
    </section>
  );
});

export default Projects;
