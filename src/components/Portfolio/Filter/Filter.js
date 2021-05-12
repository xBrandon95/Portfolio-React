const Filter = () => {
  return (
    <div className="portfolio-filter">
      <span className="filter-item active outer-shadow" data-target="all">
        Todos
      </span>
      <span className="filter-item" data-target="sitio-web">
        Sitios Web
      </span>
      <span className="filter-item" data-target="aplicación-web">
        Aplicación Web
      </span>
      {/* <span className="filter-item" data-target="mobile-app">
        mobile app
      </span>
      <span className="filter-item" data-target="e-commerce">
        e-commerce
      </span> */}
    </div>
  );
};

export default Filter;
