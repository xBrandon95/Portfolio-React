import SkillIcon from './SkillIcon';
// import SkillItem from './SkillItem';

const ListSkills = () => {
  return (
    <div className="row">
      <div className="skills tab-content active">
        <div className="row content-between">
          {/* <SkillItem name="HTML" percentage="90%" />
          <SkillItem name="CSS" percentage="80%" />
          <SkillItem name="Javasript" percentage="82%" />
          <SkillItem name="Bootstrap" percentage="85%" />
          <SkillItem name="React" percentage="80%" />
          <SkillItem name="NodeJS" percentage="85%" /> */}
          <SkillIcon name="HTML" icon="img/skills/html-5.svg" />
          <SkillIcon name="CSS" icon="img/skills/css-3.svg" />
          <SkillIcon name="JAVASCRIPT" icon="img/skills/javascript.svg" />
          <SkillIcon name="REACT" icon="img/skills/react.svg" />
          <SkillIcon name="GIT" icon="img/skills/git-icon.svg" />
          <SkillIcon name="BOOTSTRAP" icon="img/skills/bootstrap.svg" />
        </div>
      </div>
    </div>
  );
};

export default ListSkills;
