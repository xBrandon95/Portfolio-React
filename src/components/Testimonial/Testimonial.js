import { useEffect } from 'react';
import TestiItem from './TestiItem';
import testimonials from './TestiData';
import './Testimonial.css';

const Testimonial = () => {
  useEffect(() => {
    const sliderContainer = document.querySelector('.testi-slider-container');
    const slides = sliderContainer.querySelectorAll('.testi-item');
    const slideWidth = sliderContainer.offsetWidth;
    const prevBtn = document.querySelector('.testi-slider-nav .prev');
    const nextBtn = document.querySelector('.testi-slider-nav .next');
    const activeSlide = sliderContainer.querySelector('.testi-item.active');

    let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(
      activeSlide,
    );

    // set width of all slides
    slides.forEach(slide => {
      // eslint-disable-next-line no-param-reassign
      slide.style.width = `${slideWidth}px`;
    });

    // set width of sliderContainer
    sliderContainer.style.width = `${slideWidth * slides.length}px`;

    function slider() {
      sliderContainer
        .querySelector('.testi-item.active')
        .classList.remove('active');
      // activate new slide
      slides[slideIndex].classList.add('active');
      sliderContainer.style.marginLeft = `${-(slideWidth * slideIndex)}px`;
    }

    nextBtn.addEventListener('click', () => {
      if (slideIndex === slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex += 1;
      }
      slider();
    });

    prevBtn.addEventListener('click', () => {
      if (slideIndex === 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex -= 1;
      }
      slider();
    });

    slider();
  }, []);

  return (
    <div className="testimonial-section section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="testimonial">Client Speak</h2>
          </div>
        </div>
        <div className="row">
          <div className="testi-box">
            <div className="testi-slider outer-shadow">
              <div className="testi-slider-container">
                {testimonials.map(item => (
                  <TestiItem key={item.id} info={item} />
                ))}
              </div>
            </div>
            <div className="testi-slider-nav">
              <span className="prev outer-shadow hover-in-shadow">
                <i className="fas fa-angle-left" />
              </span>
              <span className="next outer-shadow hover-in-shadow">
                <i className="fas fa-angle-right" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
