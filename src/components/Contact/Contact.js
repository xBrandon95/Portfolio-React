import './Contact.css';
import contactsInfo from './ContactData';
import ContactForm from './ContactForm';
import ContactItem from './ContactItem';

const Contact = () => {
  return (
    <div className="contact-section section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="contact">Get In Touch</h2>
          </div>
        </div>

        <div className="row">
          {contactsInfo.map(item => (
            <ContactItem key={item.id} info={item} />
          ))}
        </div>

        <div className="row">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
