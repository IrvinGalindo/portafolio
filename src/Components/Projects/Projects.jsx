import Project from "./Project/Project";
import Section from "../Section/Section";

import "./Projects.css";
import { getWhatsAppLink } from "../../Constants/Links";

import mexicoEnCasa from "../../assets/images/logos/mexicoencasa.svg";
import encanchate from "../../assets/images/logos/encanchate.svg";
import covidTracker from "../../assets/images/logos/covidtracker.png";
import netflix from "../../assets/images/logos/netflix.png";
import plus from "../../assets/images/page-icons/plus.svg";

const Projects = () => {
  const projects = [
    {
      url: "https://www.mexicoencasa.mx",
      name: "Mexico En Casa",
      description:
        "Responsive platform where Informal business can sell and manage their food products and customers can obtain informal business information like geo-location easily.",
      logo: mexicoEnCasa,
      technologies: ["react", "node", "firebase"],
    },
    {
      url: "https://encanchate-7699e.web.app/",
      name: "Encanchate",
      description:
        "Web Page of an organization which promotes the physical and mental well-being through sport.",
      logo: encanchate,
      technologies: ["angular", "firebase"],
    },
    {
      url: "https://covid-19-tracker-145af.web.app/",
      name: "Covid Tracker",
      description:
        "Intuitive user experience website that helps to track the total number of deaths, recovered and cases of covid from a selected country which displays charts and covid pointers on a map.",
      logo: covidTracker,
      technologies: ["react", "firebase"],
    },
    {
      url: "https://netflix-clone-1fe75.web.app/",
      name: "Netflix Clone",
      description:
        "Netflix clone web application that differents categories and trailers of movies and popular series.",
      logo: netflix,
      technologies: ["react", "firebase"],
    },
    {
      url: getWhatsAppLink("Hi, Irvin. I am ready for creating cool stuff ;)"),
      name: "Are you ready for creating cool stuff?",
      description:
        "Working together, we can transform your idea digitally, reducing times in daily processes and more clients can see your business. In no time, you will see the results of your investment.",
      logo: plus,
      technologies: ["react", "node", "firebase"],
    },
  ];

  return (
    <Section
      title="Cool projects"
      description="I had the opportunity to evolve in these amazing projects."
    >
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </Section>
  );
};

export default Projects;
