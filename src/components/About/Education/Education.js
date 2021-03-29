import TimeLine from '../Experience/TimeLine';

const Education = () => {
  return (
    <div className="row">
      <div className="education tab-content">
        <div className="row">
          <div className="timeline">
            <div className="row">
              <TimeLine
                job="Master in Computer Science"
                company="Universidad Mayor de San Andres"
                date="2012 - 2014 "
                icon="fa-graduation-cap"
              />
              <TimeLine
                job="Master in Computer Science"
                company="Universidad Mayor de San Andres"
                date="2010 - 2012"
                icon="fa-graduation-cap"
              />
              <TimeLine
                job="Master in Computer Science"
                company="Market, La Paz"
                date="2008 - 2010"
                icon="fa-graduation-cap"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
