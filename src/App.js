import { useEffect } from 'react';

import Home from './components/Home/Home';
import About from './components/About/About';

import './skins/color-1.css';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
// import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';

function App() {
  useEffect(() => {
    // hide all sections except active
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      if (!section.classList.contains('active')) {
        section.classList.add('hide');
      }
    });
  }, []);

  return (
    <>
      <Home />
      <About />
      <Services />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
    </>
  );
}

export default App;
