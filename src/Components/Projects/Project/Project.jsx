import "./Project.css";

import reactImg from "../../../assets/images/technologies/react.svg";
import firebaseImg from "../../../assets/images/technologies/firebase.svg";
import nodeImg from "../../../assets/images/technologies/nodejs.svg";
import angularImg from "../../../assets/images/technologies/angular.svg";

const Project = ({ project, props }) => {
  return (
    <a className="project" href={project?.url} target="_blank" rel="noreferrer">
      <img src={project?.logo} alt={project?.name} />
      <div className="project__info">
        <h2>{project?.name}</h2>
        <p>{project?.description}</p>
      </div>
      <div className="project__technologies">
        {project?.technologies.map(
          (name) =>
            (name === "react" && (
              <img
                key={`${project?.name}-react`}
                src={reactImg}
                alt={`${project?.name}-react`}
              />
            )) ||
            (name === "angular" && (
              <img
                key={`${project?.name}-angular`}
                src={angularImg}
                alt={`${project?.name}-angular`}
              />
            )) ||
            (name === "node" && (
              <img key={`${name}-node`} src={nodeImg} alt={`${name}-node`} />
            )) ||
            (name === "firebase" && (
              <img
                key={`${name}-firebase`}
                src={firebaseImg}
                alt={`${name}-firebase`}
              />
            ))
        )}
      </div>
    </a>
  );
};

export default Project;
