const SkillItem = ({ name, percentage }) => {
  return (
    <div className="skill-item">
      <p>{name}</p>
      <div className="progress inner-shadow">
        <div
          className="progress-bar"
          style={{ width: `calc(${percentage} - 1.4rem)` }}
        >
          <span>{percentage}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
