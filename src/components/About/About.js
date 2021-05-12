import './About.css';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import AboutTabs from './Info/AboutTabs';
import Info from './Info/Info';
import ListSkills from './Skills/ListSkills';

const About = () => {
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="¿Quien Soy?">Acerca de Mi</h2>
          </div>
        </div>
        <Info />
        <AboutTabs />
        <ListSkills />
        <Experience />
        <Education />
      </div>
    </section>
  );
};

export default About;
