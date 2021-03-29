import ServiceItem from './ServiceItem';
import servicesData from './ServiceData';

import './Services.css';

const Services = () => {
  return (
    <div className="service-section section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="Servicios">Lo que realizo</h2>
          </div>
        </div>
        <div className="row content-between">
          {servicesData.map(item => (
            <ServiceItem
              key={item.id}
              title={item.title}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
