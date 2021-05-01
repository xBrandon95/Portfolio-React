const ContactItem = ({ info }) => {
  const { name, icon, content } = info;
  return (
    <div className="contact-item">
      <div className="contact-item-inner outer-shadow">
        <i className={icon} />
        <span>{name}</span>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ContactItem;
