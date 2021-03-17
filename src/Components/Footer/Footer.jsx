import WhatsApp from "../../assets/images/medias/whatsapp.svg";
import LinkedIn from "../../assets/images/medias/linkedin.svg";

import "./Footer.css";
import { getWhatsAppLink } from "../../Constants/Links";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__media">
        <a
          target="_blank"
          rel="noreferrer"
          href={`${getWhatsAppLink(
            "Hi,%20Irvin.%20I%20have%20reviewed%20your%20portfolio,%20please%20let%20me%20know%20when%20you%20can%20meet%20me"
          )}`}
        >
          <img src={WhatsApp} alt="whatsapp-icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/irvinomargalindobecerra/"
        >
          <img src={LinkedIn} alt="linkedin-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
