const ServiceItem = ({ title, description, icon }) => {
  return (
    <div className="service-item">
      <div className="service-item-inner outer-shadow">
        <div className="icon inner-shadow">
          <i className={icon} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
