import './About.css';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import AboutTabs from './Info/AboutTabs';
import Info from './Info/Info';
import ListSkills from './Skills/ListSkills';
import SocialLinks from './SocialLinks';

const About = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="main info">Acerca de Mi</h2>
          </div>
        </div>
        <Info />
        <SocialLinks />
        <AboutTabs />
        <ListSkills />
        <Experience />
        <Education />
      </div>
    </section>
  );
};

export default About;
