import './NavMenu.css';

const NavMenu = () => {
  return (
    <>
      <nav className="nav-menu">
        <div className="close-nav-menu outer-shadow hover-in-shadow">
          &times;
        </div>
        <div className="nav-menu-inner">
          <ul>
            <li>
              <a href="#home" className="link-item inner-shadow active">
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="link-item outer-shadow hover-in-shadow"
              >
                Acerca de
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="link-item outer-shadow hover-in-shadow"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="link-item outer-shadow hover-in-shadow"
              >
                Portafolio
              </a>
            </li>
            {/* <li>
              <a
                href="#testimonial"
                className="link-item outer-shadow hover-in-shadow"
              >
                Testimonial
              </a>
            </li> */}
            <li>
              <a
                href="#contact"
                className="link-item outer-shadow hover-in-shadow"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
        {/* copyright text */}

        <p className="copyright-text">&copy; 2021 The xSagaX</p>
      </nav>
      <div className="fade-out-effect" />
    </>
  );
};

export default NavMenu;
