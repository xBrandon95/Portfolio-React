import './Home.css';
import Effects from './Effects/Effects';
import Header from './Header/Header';
import NavMenu from './Nav/NavMenu';

const Home = () => {
  return (
    <>
      <Header />
      <NavMenu />
      <section className="home-section section">
        <Effects />

        <div className="container">
          <div className="row full-screen items-center">
            <div className="home-text">
              <p>Hola</p>
              <h2>Soy John Ticona</h2>
              <h1>Desarrollador Frontend</h1>
              <a href="#s" className="btn-1 outer-shadow hover-in-shadow">
                Mas Sobre Mi
              </a>
            </div>
            <div className="home-img">
              <div className="img-box inner-shadow">
                <img
                  src="img/profile-pic.png"
                  className="outer-shadow"
                  alt="profile-pic"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
