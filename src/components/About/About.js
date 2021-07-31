/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import './About.css';
import Education from './Education/Education';
import AboutTabs from './Info/AboutTabs';
import Info from './Info/Info';
import ListSkills from './Skills/ListSkills';
import Experience from './Experience/Experience';

const About = () => {
  const [selected, setSelected] = useState('skills');

  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="¿Quien Soy?">Acerca de Mi</h2>
          </div>
        </div>
        <Info />
        <AboutTabs selected={selected} setSelected={setSelected} />

        {selected !== 'skills' ? (
          selected === 'education' ? (
            <Education />
          ) : (
            <Experience />
          )
        ) : (
          <ListSkills />
        )}
      </div>
    </section>
  );
};

export default About;
