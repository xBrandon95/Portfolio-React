import { useEffect, useState } from 'react';

import Filter from './Filter/Filter';
import './Portfolio.css';
import PortfolioItem from './PortfolioItems/PortfolioItem';
// import PortfolioPopup from './PortfolioItems/PortfolioPopup';
import { projectsData } from '../../services/portfolioData';

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState('todos');
  const [projects, setProjects] = useState(projectsData);

  useEffect(() => {
    switch (selectedTab) {
      case 'todos':
        setProjects(projectsData);
        break;

      case 'web':
        setProjects(projectsData.filter(({ tab }) => tab === 'web'));
        break;

      case 'aplicacion':
        setProjects(projectsData.filter(({ tab }) => tab === 'aplicacion'));
        break;

      default:
        break;
    }
  }, [selectedTab]);

  return (
    <>
      <section className="portfolio-section section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2 data-heading="portafolio">Mis trabajos</h2>
            </div>
          </div>
          <div className="row">
            <Filter selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </div>

          <div className="row portfolio-items content-around">
            {projects.map(item => (
              <PortfolioItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      </section>
      {/* <PortfolioPopup /> */}
    </>
  );
};

export default Portfolio;
