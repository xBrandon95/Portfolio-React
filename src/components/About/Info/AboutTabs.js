import { listTabs } from '../../../services/aboutData';

const AboutTabs = ({ selected, setSelected }) => {
  return (
    <div className="row">
      <div className="about-tabs">
        {listTabs.map(({ id, title }) => (
          <span
            key={id}
            className={`tab-item ${id === selected && 'outer-shadow active'}`}
            onClick={() => setSelected(id)}
          >
            {title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AboutTabs;
