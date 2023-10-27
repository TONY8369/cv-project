import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Provence-Alpes-Côte d'Azur</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0681941192">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06 81 94 11 92
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="acarvin14@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  acarvin14@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/anthony-carvin-developpeurweb-webmobile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
            <a
              href="discordapp.com/users/881899524434587708"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Discord</h4>
              <i className="fab fa-discord"></i>
            </a>
            <a
              href="https://codepen.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Codepen</h4>
              <i className="fab fa-codepen"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
