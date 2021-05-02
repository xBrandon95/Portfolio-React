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

    dayNight.addEventListener('click', () => {
      dayNight.querySelector('i').classList.toggle('fa-sun');
      dayNight.querySelector('i').classList.toggle('fa-moon');
      document.body.classList.toggle('dark');
    });

    window.addEventListener('load', () => {
      if (!document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-moon');
      } else {
        dayNight.querySelector('i').classList.add('fa-sun');
      }
    });
  }, []);

  // theme colors
  const setActiveStyle = color => {
    const alternateStyles = document.querySelectorAll('.alternate-style');
    alternateStyles.forEach(style => {
      if (color === style.getAttribute('title')) {
        style.removeAttribute('disabled');
      } else {
        style.setAttribute('disabled', 'true');
      }
    });
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
        <span className="color-1" onClick={() => setActiveStyle('color-1')} />
        <span className="color-2" onClick={() => setActiveStyle('color-2')} />
        <span className="color-3" onClick={() => setActiveStyle('color-3')} />
        <span className="color-4" onClick={() => setActiveStyle('color-4')} />
        <span className="color-5" onClick={() => setActiveStyle('color-5')} />
      </div>
    </div>
  );
};

export default Switcher;
