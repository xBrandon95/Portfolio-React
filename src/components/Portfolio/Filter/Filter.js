import { listTabsPortfolio } from '../../../services/portfolioData';

const Filter = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="portfolio-filter">
      {listTabsPortfolio.map(({ id, title }) => (
        <span
          key={id}
          className={`filter-item ${
            selectedTab === id && 'outer-shadow active'
          }`}
          onClick={() => setSelectedTab(id)}
        >
          {title}
        </span>
      ))}
    </div>
  );
};

export default Filter;
