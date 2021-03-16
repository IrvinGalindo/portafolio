import "./Section.css";

const Section = ({ title, description, children, className }) => {
  return (
    <div className={`section ${className ? className : ""}`}>
      <h2 className="section__title size-3">{title}</h2>
      <p className="section__description">
        <q>{description}</q>
      </p>
      <div className="grid">{children ? children : <></>}</div>
    </div>
  );
};

export default Section;
