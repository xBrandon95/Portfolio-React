const Filter = () => {
  return (
    <div className="portfolio-filter">
      <span className="filter-item active outer-shadow" data-target="all">
        all
      </span>
      <span className="filter-item" data-target="web-application">
        web application
      </span>
      <span className="filter-item" data-target="photoshop">
        photoshop
      </span>
      <span className="filter-item" data-target="mobile-app">
        mobile app
      </span>
      <span className="filter-item" data-target="e-commerce">
        e-commerce
      </span>
    </div>
  );
};

export default Filter;
