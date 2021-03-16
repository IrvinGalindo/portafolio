import Skill from "./Skill/Skill";
import Section from "../Section/Section";

import "./Skills.css";

import teamPlayer from "../../assets/images/skills/teamplayer.svg";
import communication from "../../assets/images/skills/communication.svg";
import proactive from "../../assets/images/skills/proactive.svg";
import analitical from "../../assets/images/skills/analitical.svg";
import leadership from "../../assets/images/skills/leadership.svg";
import problemsolving from "../../assets/images/skills/problemsolving.svg";

const skills = [
  {
    name: "Team Player",
    img: teamPlayer,
  },
  {
    name: "Communication",
    img: communication,
  },
  {
    name: "Leadership",
    img: leadership,
  },
  {
    name: "Problem Solving",
    img: problemsolving,
  },
  {
    name: "proactive",
    img: proactive,
  },
  {
    name: "Analitical",
    img: analitical,
  },
];

const Skills = () => {
  return (
    <Section
      title="Who I am"
      description=" I am a passionate Front-End web developer from Mexico who loves to
    align his skills to create cool stuffs."
      className="skills"
    >
      {skills.map((skill) => (
        <Skill key={skill?.name} skill={skill} />
      ))}
    </Section>
  );
};

export default Skills;
