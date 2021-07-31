import { dataExperience } from '../../../services/aboutData';
import TimeLine from './TimeLine';

const Experience = () => {
  return (
    <div className="row">
      <div className="experience tab-content">
        <div className="row">
          <div className="timeline">
            <div className="row">
              {dataExperience.map(({ id, job, company, date, icon }) => (
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

export default Experience;
