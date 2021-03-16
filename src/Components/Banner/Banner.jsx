import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h2 className="banner__title size-3">Hello world 🌎</h2>

        <div className="banner__skills">
          <p>
            I am
            <span className="banner__skill-item">Passionate</span>
            <span className="banner__skill-item">Self Learning</span>
            <span className="banner__skill-item">Team Player</span>
            <span className="banner__skill-item">Proactive</span>
            <span className="banner__skill-item">Irvin Galindo</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
