import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <hr />
          <p className="copy">Todos los Derechos Reservados &copy; {year}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
