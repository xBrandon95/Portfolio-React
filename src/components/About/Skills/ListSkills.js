import SkillItem from './SkillItem';

const ListSkills = () => {
  return (
    <div className="row">
      <div className="skills tab-content active">
        <div className="row content-between">
          <SkillItem name="HTML" percentage="90%" />
          <SkillItem name="CSS" percentage="80%" />
          <SkillItem name="Javasript" percentage="80%" />
          <SkillItem name="Bootstrap" percentage="55%" />
          <SkillItem name="React" percentage="65%" />
          <SkillItem name="NodeJS" percentage="85%" />
        </div>
      </div>
    </div>
  );
};

export default ListSkills;
