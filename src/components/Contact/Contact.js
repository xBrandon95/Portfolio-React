import './Contact.css';
import ContactItem from './ContactItem';

import contactInfo from '../../services/contactData';
// import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="contact-section section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="Contáctame">Trabajemos Juntos</h2>
          </div>
        </div>

        <div className="row content-between">
          {contactInfo.map(item => (
            <ContactItem key={item.id} info={item} />
          ))}
        </div>

        {/* <div className="row">
          <ContactForm />
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
