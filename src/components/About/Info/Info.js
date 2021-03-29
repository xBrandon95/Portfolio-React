const Info = () => {
  return (
    <div className="row items-center">
      <div className="about-img">
        <div className="img-box inner-shadow">
          <img
            src="img/profile-pic.png"
            className="outer-shadow"
            alt="profile-pic"
          />
        </div>
      </div>
      <div className="about-info">
        <p>
          <span>
            Hola mi nombre es John Ticona y soy Desarrollador Frontend.
          </span>
          Phasellus orci est, rutrum eget felis non, elementum egestas enim.
          Maecenas auctor non nibh sit amet faucibus. Vivamus vel imperdiet
          purus, eget sollicitudin eros. Integer vitae ipsum justo. Praesent
          nunc mauris, facilisis finibus tempus vitae, laoreet non diam. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Vivamus faucibus mi ante, nec rhoncus odio fringilla
          sed. Mauris in diam et tellus rhoncus porta. Nulla bibendum, odio in
          facilisis ultricies, elit leo porta purus, sed
        </p>
        <p>
          Iaculis odio urna ac est. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Praesent gravida mi ac
          suscipit pellentesque. Nullam hendrerit ornare erat, vitae dictum
          metus sodales vel. Mauris vitae ipsum dolor.
        </p>
        <a href="cv.pdf" className="btn-1 outer-shadow hover-in-shadow">
          Descargar CV
        </a>
        <a href="#e" className="btn-1 outer-shadow hover-in-shadow">
          Contáctame
        </a>
      </div>
    </div>
  );
};

export default Info;
