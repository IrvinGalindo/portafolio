import WhatsApp from "../../assets/images/medias/whatsapp.svg";
import LinkedIn from "../../assets/images/medias/linkedin.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__media">
        <img src={WhatsApp} alt="whatsapp-icon" />
        <img src={LinkedIn} alt="linkedin-icon" />
      </div>
    </div>
  );
};

export default Footer;
