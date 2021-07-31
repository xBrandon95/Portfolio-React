import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dataSocialIcons } from '../../services/aboutData';

const SocialLinks = () => {
  return (
    <div className="row">
      {/* <!-- social links start --> */}
      <div className="social-links">
        {dataSocialIcons.map(({ id, url, icon }) => (
          <a
            key={id}
            href={url}
            className="outer-shadow hover-in-shadow"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>
      {/* <!-- social links end --> */}
    </div>
  );
};

export default SocialLinks;
