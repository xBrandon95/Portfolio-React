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
          <span className="view-project">view project</span>
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
              <h3>Informacion del Proyecto</h3>
              <ul>
                <li>
                  Fecha - <span>{date}</span>
                </li>
                <li>
                  Client - <span>{client}</span>
                </li>
                <li>
                  Tools - <span>{tools}</span>
                </li>
                <li>
                  Web -
                  <span>
                    <a href={url}> site</a>
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