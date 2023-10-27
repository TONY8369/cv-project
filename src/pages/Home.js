import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Carvin Anthony</h1>
          <h2>Développeur Front-end / Back-end </h2>
          <div className="pdf">
            <a
              href={`${require("../PDF/cv-AnthonyCarvinDeveloppeurWeb-2023F.pdf")}`}
              download
              target="_blank"
              rel="noreferrer"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
