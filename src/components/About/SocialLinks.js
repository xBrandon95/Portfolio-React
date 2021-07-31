const SocialLinks = () => {
  return (
    <div className="row">
      {/* <!-- social links start --> */}
      <div className="social-links">
        <a
          href="https://wa.me/59177703553?text=Buenas, me interesa sus servcios!!"
          className="outer-shadow hover-in-shadow"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-whatsapp" />
        </a>
        <a
          href="mailto:jbticona2@gmail.com"
          className="outer-shadow hover-in-shadow"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-envelope" />
        </a>
        <a
          href="https://www.facebook.com/xBrandon95"
          className="outer-shadow hover-in-shadow"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          href="https://www.linkedin.com/in/john-brandon-ticona-apaza-09a738189/"
          className="outer-shadow hover-in-shadow"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
      </div>
      {/* <!-- social links end --> */}
    </div>
  );
};

export default SocialLinks;
