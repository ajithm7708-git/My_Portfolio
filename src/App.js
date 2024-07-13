import React, { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import About1 from './pages/About1';
import Education from './pages/Education';
import Internship from "./pages/Internship";
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import CV from './pages/CV';
import './App.css';

const App = () => {
  const aboutRef = useRef(null);
  const aboutRef1 = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const internshipRef = useRef(null);
  const projectsRef = useRef(null);
  const cvRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'about1':
        aboutRef1.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'education':
        educationRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
        case 'internship':
        internshipRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'cv':
        cvRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <main style={{paddingRight:"0px"}}>
        <About1 ref={aboutRef1}/>
        <About ref={aboutRef} />
        <Education ref={educationRef} />
        <Skills ref={skillsRef} />
        <Internship ref={internshipRef} />
        <Projects ref={projectsRef} />
        <CV ref={cvRef} />
      </main>
      <Footer />
    </div>
  );
};

export default App;