import Home from './components/Home/Home';
import About from './components/About/About';

import './skins/color-1.css';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
    </>
  );
}

export default App;
