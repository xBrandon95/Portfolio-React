/* eslint-disable react/jsx-no-comment-textnodes */
const AboutTabs = () => {
  // About section tabs
  const handleClickTab = e => {
    const aboutSection = document.querySelector('.about-section');
    const tabsContainer = document.querySelector('.about-tabs');

    if (
      e.target.classList.contains('tab-item') &&
      !e.target.classList.contains('active')
    ) {
      const target = e.target.getAttribute('data-target');

      // deactivate existing active 'tab-item
      tabsContainer
        .querySelector('.active')
        .classList.remove('outer-shadow', 'active');

      // activate new tab-item
      e.target.classList.add('active', 'outer-shadow');

      // deactivate existing active 'tab-content
      aboutSection
        .querySelector('.tab-content.active')
        .classList.remove('active');

      // activate new 'tab-content
      aboutSection.querySelector(target).classList.add('active');
    }
  };

  return (
    <div className="row">
      <div className="about-tabs" onClick={handleClickTab}>
        <span className="tab-item outer-shadow active" data-target=".skills">
          Skills
        </span>
        <span className="tab-item" data-target=".experience">
          Experiencia
        </span>
        <span className="tab-item" data-target=".education">
          Educación
        </span>
      </div>
    </div>
  );
};

export default AboutTabs;
