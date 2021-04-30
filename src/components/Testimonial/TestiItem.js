const TestiItem = ({ info }) => {
  const { name, commentary } = info;
  return (
    <div className="testi-item active">
      <i className="fas fa-quote-left left" />
      <i className="fas fa-quote-right right" />
      <p>{commentary}</p>
      <img src="img/testimonial/1.png" alt="testimonial" />
      <span>{name}</span>
    </div>
  );
};

export default TestiItem;
