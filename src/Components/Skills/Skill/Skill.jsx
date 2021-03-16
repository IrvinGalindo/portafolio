import "./Skill.css";

const Skill = ({ skill }) => {
  return (
    <div className="skill">
      <img className="skill__img" src={skill?.img} alt={skill?.name} />
      <h2 className="skill__title">{skill?.name}</h2>
    </div>
  );
};

export default Skill;
