import './NavMenu.css';

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <div className="close-nav-menu outer-shadow hover-in-shadow">&times;</div>
      <div className="nav-menu-inner">
        <ul>
          <li>
            <a href="#ss" className="inner-shadow active">
              Inicio
            </a>
          </li>
          <li>
            <a href="#ss" className="outer-shadow hover-in-shadow">
              Acerca de
            </a>
          </li>
          <li>
            <a href="#ss" className="outer-shadow hover-in-shadow">
              Servicios
            </a>
          </li>
          <li>
            <a href="#ss" className="outer-shadow hover-in-shadow">
              Portafolio
            </a>
          </li>
          <li>
            <a href="#ss" className="outer-shadow hover-in-shadow">
              Testimonial
            </a>
          </li>
          <li>
            <a href="#ss" className="outer-shadow hover-in-shadow">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      {/* copyright text */}
      <p className="copyright-text">&copy; 2021 The xSagaX</p>
    </nav>
  );
};

export default NavMenu;
