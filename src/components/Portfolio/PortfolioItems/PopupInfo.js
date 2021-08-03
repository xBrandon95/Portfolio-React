const PopupInfo = ({ data }) => {
  const { description, date, client, tools, url } = data;

  return (
    <div className="row">
      <div className="description">
        <h3>Resumen del Proyecto</h3>
        <p>{description}sssss</p>
      </div>
      <div className="info">
        <h3>Informacion del Proyecto</h3>
        <ul>
          <li>
            Fecha - <span>{date}ssss</span>
          </li>
          <li>
            Client - <span>{client}sss</span>
          </li>
          <li>
            Tools - <span>{tools}ss</span>
          </li>
          <li>
            Web -
            <span>
              <a href={url}>site</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PopupInfo;
