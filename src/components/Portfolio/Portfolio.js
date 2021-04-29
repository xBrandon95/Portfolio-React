import { useEffect } from 'react';
import Filter from './Filter/Filter';
import './Portfolio.css';
import PortfolioItem from './PortfolioItems/PortfolioItem';

import portfolioData from './PortfolioItems/PortfolioData';
import PortfolioPopup from './PortfolioItems/PortfolioPopup';

const Portfolio = () => {
  useEffect(() => {
    const portfolioItemsContainer = document.querySelector('.portfolio-items');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const popup = document.querySelector('.portfolio-popup');
    const prevBtn = popup.querySelector('.pp-prev');
    const nextBtn = popup.querySelector('.pp-next');
    const closeBtn = popup.querySelector('.pp-close');
    const projectDetailsContainer = popup.querySelector('.pp-details');
    const projectDetailsBtn = popup.querySelector('.pp-project-details-btn');
    const filterContainer = document.querySelector('.portfolio-filter');

    let itemIndex;
    let slideIndex;
    let screenshots;

    function bodyScrollingToggle() {
      document.body.classList.toggle('hidden-scrolling');
    }

    const popupToggle = () => {
      popup.classList.toggle('open');
      bodyScrollingToggle();
    };

    const popupSlidesShow = () => {
      const imgSrc = screenshots[slideIndex];
      const popupImg = popup.querySelector('.pp-img');
      // activate loader until the popupImg loaded
      popup.querySelector('.pp-loader').classList.add('active');
      popupImg.src = imgSrc;
      popupImg.onload = () => {
        // deactivate loader after the popupImg loaded
        popup.querySelector('.pp-loader').classList.remove('active');
      };
      popup.querySelector('.pp-counter').innerHTML = `${slideIndex + 1} de ${
        screenshots.length
      }`;
    };

    const popupDetailsToggle = () => {
      if (projectDetailsContainer.classList.contains('active')) {
        projectDetailsBtn.querySelector('i').classList.remove('fa-minus');
        projectDetailsBtn.querySelector('i').classList.add('fa-plus');
        projectDetailsContainer.classList.remove('active');
        projectDetailsContainer.style.maxHeight = `${0}px`;
      } else {
        projectDetailsBtn.querySelector('i').classList.remove('fa-plus');
        projectDetailsBtn.querySelector('i').classList.add('fa-minus');
        projectDetailsContainer.classList.add('active');
        projectDetailsContainer.style.maxHeight = `${projectDetailsContainer.scrollHeight}px`;
        popup.scrollTo(0, projectDetailsContainer.offsetTop);
      }
    };

    // next slide
    nextBtn.addEventListener('click', () => {
      if (slideIndex === screenshots.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex += 1;
      }
      popupSlidesShow();
    });

    // prev slide
    prevBtn.addEventListener('click', () => {
      if (slideIndex === 0) {
        slideIndex = screenshots.length - 1;
      } else {
        slideIndex -= 1;
      }
      popupSlidesShow();
    });

    const popupDetails = () => {
      // if portfolio-item-details not exists
      if (!portfolioItems[itemIndex].querySelector('.portfolio-item-details')) {
        projectDetailsBtn.style.display = 'none';
        return; /* end function execution */
      }
      projectDetailsBtn.style.display = 'block';
      // get the project details
      const details = portfolioItems[itemIndex].querySelector(
        '.portfolio-item-details',
      ).innerHTML;
      // set the project details
      popup.querySelector('.pp-project-details').innerHTML = details;
      // get the project title
      const title = portfolioItems[itemIndex].querySelector(
        '.portfolio-item-title',
      ).innerHTML;
      // set the project title
      popup.querySelector('.pp-title h2').innerHTML = title;
      // get the project category
      const category = portfolioItems[itemIndex].getAttribute('data-category');
      popup.querySelector('.pp-project-category').innerHTML = ` - ${category}`;
    };

    projectDetailsBtn.addEventListener('click', () => {
      popupDetailsToggle();
    });

    filterContainer.addEventListener('click', e => {
      if (
        e.target.classList.contains('filter-item') &&
        !e.target.classList.contains('active')
      ) {
        // desactivate existing active 'filter-item
        filterContainer
          .querySelector('.active')
          .classList.remove('outer-shadow', 'active');

        // active new 'Filter item'
        e.target.classList.add('active', 'outer-shadow');
        const target = e.target.getAttribute('data-target');
        portfolioItems.forEach(item => {
          if (
            target === item.getAttribute('data-category') ||
            target === 'all'
          ) {
            item.classList.remove('hide');
            item.classList.add('show');
          } else {
            item.classList.remove('show');
            item.classList.add('hide');
          }
        });
      }
    });

    portfolioItemsContainer.addEventListener('click', e => {
      if (e.target.closest('.portfolio-item-inner')) {
        const portfolioItem = e.target.closest('.portfolio-item-inner')
          .parentElement;

        // get the portfolioItem index
        itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(
          portfolioItem,
        );

        screenshots = portfolioItems[itemIndex]
          .querySelector('.portfolio-item-img img')
          .getAttribute('data-screenshots');

        // convert screenshots into array
        screenshots = screenshots.split(',');
        if (screenshots.length === 1) {
          prevBtn.style.display = 'none';
          nextBtn.style.display = 'none';
        } else {
          prevBtn.style.display = 'block';
          nextBtn.style.display = 'block';
        }
        slideIndex = 0;
        popupToggle();
        popupSlidesShow();
        popupDetails();
      }
    });

    closeBtn.addEventListener('click', () => {
      popupToggle();
      if (projectDetailsContainer.classList.contains('active')) {
        popupDetailsToggle();
      }
    });
  }, []);

  return (
    <>
      <section className="portfolio-section section">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2 data-heading="portfolio">Lastest Works</h2>
            </div>
          </div>
          <div className="row">
            <Filter />
          </div>

          <div className="row portfolio-items content-between">
            {portfolioData.map(item => (
              <PortfolioItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      </section>
      <PortfolioPopup />
    </>
  );
};

export default Portfolio;
