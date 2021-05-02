import { useEffect } from 'react';
import './Home.css';
import Effects from './Effects/Effects';
import Header from './Header/Header';
import NavMenu from './Nav/NavMenu';

const Home = () => {
  useEffect(() => {
    const hamburguerBtn = document.querySelector('.hamburger-btn');
    const navMenu = document.querySelector('.nav-menu');
    const closeNavBtn = navMenu.querySelector('.close-nav-menu');

    function fadeOutEffect() {
      document.querySelector('.fade-out-effect').classList.add('active');
      setTimeout(() => {
        document.querySelector('.fade-out-effect').classList.remove('active');
      }, 300);
    }

    function showNavMenu() {
      navMenu.classList.add('open');
      // bodyScrollingToggle();
    }

    function hideNavMenu() {
      navMenu.classList.remove('open');
      fadeOutEffect();
      // bodyScrollingToggle();
    }

    // // attach and event handler to document
    // document.addEventListener('click', e => {
    //   if (e.target.classList.contains('link-item')) {
    //     /* make sure event.target.hash has a value before overridding default behavior */
    //     if (e.target.hash !== '') {
    //       // prevent default anchor click behavior
    //       e.preventDefault();
    //       const { hash } = e.target;
    //       // deactivate existing active section
    //       document.querySelector('.section.active').classList.add('hide');
    //       document.querySelector('.section.active').classList.remove('active');
    //       document.querySelector(hash).classList.add('active');
    //       document.querySelector(hash).classList.remove('hide');
    //       // deactivate existing active navigation menu 'link-item'
    //       navMenu
    //         .querySelector('.active')
    //         .classList.add('outer-shadow', 'hover-in-shadow');

    //       navMenu
    //         .querySelector('.active')
    //         .classList.remove('active', 'inner-shadow');

    //       // if clicked 'link-item' is contained withing the navigation menu
    //       if (navMenu.classList.contains('open')) {
    //         // active new navigation menu link item
    //         e.target.classList.add('active', 'inner-shadow');
    //         e.target.classList.remove('outer-shadow', 'hover-in-shadow');

    //         // hide navigation menu
    //         hideNavMenu();
    //       } else {
    //         const navItems = navMenu.querySelectorAll('.link-item');
    //         navItems.forEach(item => {
    //           if (hash === item.hash) {
    //             // activate the navigation menu link item
    //             item.classList.add('active', 'inner-shadow');
    //             item.classList.remove('outer-shadow', 'hover-in-shadow');
    //           }
    //         });
    //         // fadeOutEffect();
    //       }
    //       // add has (#) to url
    //       window.location.hash = hash;
    //     }
    //   }
    // });

    // attach and event handler to document
    document.addEventListener('click', e => {
      if (e.target.classList.contains('link-item')) {
        if (e.target.hash !== '') {
          const { hash } = e.target;
          navMenu
            .querySelector('.active')
            .classList.add('outer-shadow', 'hover-in-shadow');

          navMenu
            .querySelector('.active')
            .classList.remove('active', 'inner-shadow');
          if (navMenu.classList.contains('open')) {
            e.target.classList.add('active', 'inner-shadow');
            e.target.classList.remove('outer-shadow', 'hover-in-shadow');
            hideNavMenu();
          } else {
            const navItems = navMenu.querySelectorAll('.link-item');
            navItems.forEach(item => {
              if (hash === item.hash) {
                // activate the navigation menu link item
                item.classList.add('active', 'inner-shadow');
                item.classList.remove('outer-shadow', 'hover-in-shadow');
              }
            });
            // fadeOutEffect();
          }
        }
      }
    });

    hamburguerBtn.addEventListener('click', showNavMenu);
    closeNavBtn.addEventListener('click', hideNavMenu);
  }, []);
  return (
    <>
      <Header />
      <NavMenu />
      <section className="home-section section active" id="home">
        <Effects />

        <div className="container">
          <div className="row full-screen items-center">
            <div className="home-text">
              <p>Hola</p>
              <h2>Soy John Ticona</h2>
              <h1>Desarrollador Frontend</h1>
              <a
                href="#about"
                className="link-item btn-1 outer-shadow hover-in-shadow"
              >
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
