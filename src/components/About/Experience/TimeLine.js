import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TimeLine = ({ job, company, date, icon, description = '' }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-inner outer-shadow">
        <FontAwesomeIcon icon={icon} className="icon" />
        <span>{date}</span>
        <h3>{job}</h3>
        <h4>{company}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimeLine;
