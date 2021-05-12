const SkillIcon = ({ icon, name }) => {
  return (
    <div className="skill-item">
      <div className="skill-box">
        <img src={icon} alt={name} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default SkillIcon;
