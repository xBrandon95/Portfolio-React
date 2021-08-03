import { useState } from 'react';
import './Home.css';
import Effects from './Effects/Effects';
import Header from './Header/Header';
import NavMenu from './Nav/NavMenu';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section className="home-section section active" id="home">
        <Effects />

        <div className="container">
          <div className="row full-screen items-center">
            <div className="home-text">
              <p>Hola mi nombre es: </p>
              <h2>
                <span>{'<'}</span> BRANDON TICONA <span>{'/>'}</span>
              </h2>
              {/* <h1>Frontend Developer</h1> */}
              <h1>Desarrollador Web Jr.</h1>
              <a
                href="#about"
                className="link-item btn-1 outer-shadow hover-in-shadow"
              >
                Mas Sobre Mi
              </a>
            </div>
            <div className="home-img">
              <div className="img-box">
                <img src="img/hero/developer2.svg" alt="profile-pic" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
