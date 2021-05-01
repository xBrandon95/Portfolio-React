const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="form">
        <form>
          <div className="row">
            <div className="w-50">
              <div className="input-group outer-shadow hover-in-shadow">
                <input
                  type="text"
                  placeholder="Name"
                  className="input-control"
                />
              </div>
              <div className="input-group outer-shadow hover-in-shadow">
                <input
                  type="email"
                  placeholder="Email"
                  className="input-control"
                />
              </div>
              <div className="input-group outer-shadow hover-in-shadow">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input-control"
                />
              </div>
            </div>
            <div className="w-50">
              <div className="input-group outer-shadow hover-in-shadow">
                <textarea className="input-control" placeholder="Message" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="submit-btn">
              <button
                type="submit"
                className="btn-1 outer-shadow hover-in-shadow"
              >
                Enviar Mensaje
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
