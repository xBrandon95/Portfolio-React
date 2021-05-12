import TimeLine from '../Experience/TimeLine';

const Education = () => {
  return (
    <div className="row">
      <div className="education tab-content">
        <div className="row">
          <div className="timeline">
            <div className="row">
              <TimeLine
                job="Estudiante - INFORMÁTICA"
                company="Universidad Mayor de San Andrés"
                date="2017 - 2021"
                icon="fa-graduation-cap"
              />
              <TimeLine
                job="Tecnico Medio - Sistemas Computacionales"
                company="CEA - DON BOSCO"
                date="2018 - 2020"
                icon="fa-graduation-cap"
              />
              {/* <TimeLine
                job="Master in Computer Science"
                company="Market, La Paz"
                date="2008 - 2010"
                icon="fa-graduation-cap"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
