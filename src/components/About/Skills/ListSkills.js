import SkillIcon from './SkillIcon';
import { listSkills } from '../../../services/aboutData';
// import SkillItem from './SkillItem';

const ListSkills = () => {
  return (
    <div className="row">
      <div className="skills tab-content">
        <div className="row content-between">
          {listSkills.map(({ id, name, icon }) => (
            <SkillIcon key={id} name={name} icon={icon} />
          ))}
          {/* <SkillItem name="HTML" percentage="90%" /> */}
        </div>
      </div>
    </div>
  );
};

export default ListSkills;
