import SocialLinks from '../SocialLinks';

const Info = () => {
  return (
    <div className="row items-center content-evenly">
      <div className="about-img">
        <div className="img-box inner-shadow">
          <img
            src="img/hero/startup.svg"
            className="outer-shadow"
            alt="profile-pic"
          />
        </div>
      </div>
      <div className="about-info">
        <p>
          Me llamo <span>John Brandon Ticona Apaza</span> y soy
          <span> FRONTEND DEVELOPER JUNIOR</span>, estudio la carrera de
          Informática, me considero una persona autodidacta que le apasiona la
          tecnología, con muchas ganas de trabajar, aprender cosas nuevas,
          mejorar mis habilidades y colaborar en equipo.
          {/* Busco siempre hacer el trabajo de manera eficiente y
          organizada además de concretar siempre mi trabajo de la mejor manera
          sin nunca apartarme de aprender, dando un estilo único y propio a cada
          proyecto e intentando innovar. */}
        </p>
        <a
          href="cv/CV-JohnTicona.pdf"
          className="btn-1 outer-shadow hover-in-shadow"
        >
          Descargar CV
        </a>
        <a
          href="#contact"
          className="link-item btn-1 outer-shadow hover-in-shadow"
        >
          Contáctame
        </a>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Info;
