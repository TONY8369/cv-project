import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img
            src={`${require("../media/Design sans titre(3).png")}`}
            alt="profil-cv"
            className="profil-img"
          />
          <h3>Carvin Anthony</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li className="items">
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              <i className="fas fa-home"></i>
              <span className="item">Acceuil</span>
            </NavLink>
          </li>
          <li className="items">
            <NavLink
              to="/competence"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              <i className="fas fa-mountain"></i>
              <span className="item">Compétences</span>
            </NavLink>
          </li>
          <li className="items">
            <NavLink
              to="/portfolio"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              <i className="fas fa-images"></i>
              <span className="item">Projets</span>
            </NavLink>
          </li>
          <li className="items">
            <NavLink
              to="/contact"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              <i className="fas fa-address-book"></i>
              <span className="item">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/anthony-carvin-developpeurweb-webmobile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="discordapp.com/users/881899524434587708"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-discord"></i>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Carvin - 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
