import { useRef, useState } from 'react';
import './NavMenu.css';

const menuOptions = [
  {
    id: 'home',
    title: 'Inicio',
  },
  {
    id: 'about',
    title: 'Acerca de',
  },
  {
    id: 'services',
    title: 'Servicios',
  },
  {
    id: 'portfolio',
    title: 'Portafolio',
  },
  {
    id: 'contact',
    title: 'Contacto',
  },
];

const NavMenu = ({ menuOpen, setMenuOpen }) => {
  const [option, setOption] = useState('home');

  const effect = useRef();

  const closeMenu = () => {
    setMenuOpen(false);

    effect.current.classList.add('active');
    setTimeout(() => {
      effect.current.classList.remove('active');
    }, 300);
  };

  return (
    <>
      <nav className={`nav-menu ${menuOpen && 'open'}`}>
        <div
          className="close-nav-menu outer-shadow hover-in-shadow"
          onClick={closeMenu}
        >
          &times;
        </div>
        <div className="nav-menu-inner">
          <ul>
            {menuOptions.map(({ id, title }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`link-item ${
                    option === id
                      ? 'inner-shadow active'
                      : 'outer-shadow hover-in-shadow'
                  }`}
                  onClick={() => {
                    setOption(id);
                    closeMenu();
                  }}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* copyright text */}

        <p className="copyright-text">&copy; 2021 The xSagaX</p>
      </nav>
      <div className="fade-out-effect" ref={effect} />
    </>
  );
};

export default NavMenu;
