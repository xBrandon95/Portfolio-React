import TimeLine from '../Experience/TimeLine';
import { dataEducations } from '../../../services/aboutData';

const Education = () => {
  return (
    <div className="row">
      <div className="education tab-content">
        <div className="row">
          <div className="timeline">
            <div className="row">
              {dataEducations.map(({ id, job, company, date, icon }) => (
                <TimeLine
                  key={id}
                  job={job}
                  company={company}
                  date={date}
                  icon={icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
