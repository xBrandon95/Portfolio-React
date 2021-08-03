import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactItem = ({ info }) => {
  const { name, icon, link } = info;
  return (
    <div className="contact-item">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="contact-item-inner outer-shadow">
          <FontAwesomeIcon icon={icon} className="contact-icon" />
          <span>{name}</span>
          {/* <p>{content}</p> */}
        </div>
      </a>
    </div>
  );
};

export default ContactItem;
