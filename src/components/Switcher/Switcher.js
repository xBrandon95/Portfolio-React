import { useEffect } from 'react';
import './Switcher.css';

const Switcher = () => {
  useEffect(() => {
    const styleSwitcherToogler = document.querySelector(
      '.style-switcher-toggler',
    );

    styleSwitcherToogler.addEventListener('click', () => {
      document.querySelector('.style-switcher').classList.toggle('open');
    });

    // hide style -switcher on scroll
    window.addEventListener('scroll', () => {
      if (
        document.querySelector('.style-switcher').classList.contains('open')
      ) {
        document.querySelector('.style-switcher').classList.remove('open');
      }
    });

    // them light and dark mode
    const dayNight = document.querySelector('.day-night');

    const updateIcon = () => {
      if (!document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.remove('fa-sun');
        dayNight.querySelector('i').classList.add('fa-moon');
      } else {
        dayNight.querySelector('i').classList.remove('fa-moon');
        dayNight.querySelector('i').classList.add('fa-sun');
      }
    };

    dayNight.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }

      updateIcon();
    });

    const themeMode = () => {
      if (localStorage.getItem('theme') !== null) {
        if (localStorage.getItem('theme') === 'light') {
          document.body.classList.remove('dark');
        } else {
          document.body.classList.add('dark');
        }
      }
      updateIcon();
    };

    themeMode();

    // window.addEventListener('load', () => {
    //   if (!document.body.classList.contains('dark')) {
    //     dayNight.querySelector('i').classList.add('fa-moon');
    //   } else {
    //     dayNight.querySelector('i').classList.add('fa-sun');
    //   }
    // });
  }, []);

  const changeColor = () => {
    const alternateStyles = document.querySelectorAll('.alternate-style');
    alternateStyles.forEach(style => {
      if (localStorage.getItem('color') === style.getAttribute('title')) {
        style.removeAttribute('disabled');
      } else {
        style.setAttribute('disabled', 'true');
      }
    });
  };

  // checking if color key exists
  if (localStorage.getItem('color') !== null) {
    changeColor();
  }

  // theme colors
  const setActiveStyle = color => {
    localStorage.setItem('color', color);
    changeColor();
    //
  };

  return (
    <div className="style-switcher outer-shadow">
      <div className="style-switcher-toggler s-icon outer-shadow hover-in-shadow">
        <i className="fas fa-cog fa-spin" />
      </div>
      <div className="day-night s-icon outer-shadow hover-in-shadow">
        <i className="fas fa-sun" />
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        <span className="color-4" onClick={() => setActiveStyle('color-4')} />
        <span className="color-1" onClick={() => setActiveStyle('color-1')} />
        <span className="color-5" onClick={() => setActiveStyle('color-5')} />
        <span className="color-3" onClick={() => setActiveStyle('color-3')} />
        <span className="color-2" onClick={() => setActiveStyle('color-2')} />
      </div>
    </div>
  );
};

export default Switcher;
