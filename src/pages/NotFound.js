import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Désolé cette page n'existe pas !</h3>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          <i className="fas fa-home"></i>
          <span className="item"> Acceuil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
