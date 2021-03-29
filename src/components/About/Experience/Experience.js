import TimeLine from './TimeLine';

const Experience = () => {
  return (
    <div className="row">
      <div className="experience tab-content">
        <div className="row">
          <div className="timeline">
            <div className="row">
              <TimeLine
                job="Full Stack Developer"
                company="Soft, La Paz"
                date="Ene, 2018 - Abr, 2020 "
                icon="fa-briefcase"
              />
              <TimeLine
                job="Web Designer"
                company="Vista, La Paz"
                date="Sep, 2017 - Dic, 2017"
                icon="fa-briefcase"
              />
              <TimeLine
                job="Frontend Developer"
                company="Market, La Paz"
                date="Jun, 2015 - Marzo 2016"
                icon="fa-briefcase"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
