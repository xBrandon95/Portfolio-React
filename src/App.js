import { useEffect } from 'react';

import Home from './components/Home/Home';
import About from './components/About/About';

import Preloader from './components/Preloader/Preloader';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
// import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Switcher from './components/Switcher/Switcher';
import Footer from './components/Footer/Footer';

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
      <Preloader />
      <Home />
      <About />
      <Services />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
      <Switcher />
    </>
  );
}

export default App;
