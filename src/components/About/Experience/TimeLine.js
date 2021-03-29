const TimeLine = ({ job, company, date, icon }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-inner outer-shadow">
        <i className={`fas ${icon} icon`} />
        <span>{date}</span>
        <h3>{job}</h3>
        <h4>{company}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae autem
          nemo quis adipisci saepe optio porro earum nostrum suscipit corrupti!
        </p>
      </div>
    </div>
  );
};

export default TimeLine;
