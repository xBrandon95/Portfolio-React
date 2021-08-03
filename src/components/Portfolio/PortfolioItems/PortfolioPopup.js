const PortfolioPopup = () => {
  return (
    <div className="pp portfolio-popup open">
      <div className="pp-details">
        <div className="pp-details-inner">
          <div className="pp-title">
            <h2>Personal Portfolio</h2>
            <p>
              Categoria
              <span className="pp-project-category">Web Application</span>
            </p>
          </div>
          <div className="pp-project-details">
            <div className="row">
              <div className="description">
                <h3>Resumen del Proyecto</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumdicta est officiis quae ab, porro laborum et quos aliquid
                  maximelaboriosam dolores repudiandae incidunt esse.
                </p>
              </div>
              <div className="info">
                <h3>Informacion del Proyecto</h3>
                <ul>
                  <li>
                    Fecha - <span>2020</span>
                  </li>
                  <li>
                    Client - <span>xyz</span>
                  </li>
                  <li>
                    Tools - <span>html, css, javacript</span>
                  </li>
                  <li>
                    Web -
                    <span>
                      <a href="#dsa">site</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="separator">
        <span />
      </div>

      <div className="pp-main">
        <div className="pp-main-inner">
          <div className="pp-project-details-btn outer-shadow hover-in-shadow">
            Detalles del Proyecto <i className="fas fa-plus" />
          </div>
          <div className="pp-close outer-shadow hover-in-shadow">&times;</div>
          <img
            src="img/portfolio/large/project-1/1.png"
            alt="img"
            className="pp-img outer-shadow"
          />
          <div className="pp-counter">1 de 6</div>
        </div>

        <div className="pp-loader">
          <div />
        </div>

        {/* pp-navigation */}
        <div className="pp-prev">
          <i className="fas fa-play" />
        </div>
        <div className="pp-next">
          <i className="fas fa-play" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPopup;
