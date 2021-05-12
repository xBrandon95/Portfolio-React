const PortfolioItem = ({ data }) => {
  const {
    title,
    description,
    category,
    image,
    images,
    date,
    client,
    tools,
    url,
  } = data;

  return (
    <div className="portfolio-item" data-category={category}>
      <div className="portfolio-item-inner outer-shadow">
        <div className="portfolio-item-img">
          <img src={image} alt={title} data-screenshots={images} />
          {/* view project btn */}
          <span className="view-project">Ver Proyecto</span>
        </div>
        <p className="portfolio-item-title">{title}</p>

        {/* portolio item details  */}
        <div className="portfolio-item-details">
          <div className="row">
            <div className="description">
              <h3>Resumen del Proyecto</h3>
              <p>{description}</p>
            </div>
            <div className="info">
              <h3>Información del Proyecto</h3>
              <ul>
                <li>
                  Fecha - <span>{date}</span>
                </li>
                <li>
                  Cliente - <span>{client}</span>
                </li>
                <li>
                  Herramientas - <span>{tools}</span>
                </li>
                <li>
                  Sitio Web -
                  <span>
                    <a target="_blank" href={url} rel="noreferrer">
                      Ver Proyecto
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* portolio item details end */}
      </div>
    </div>
  );
};

export default PortfolioItem;
