import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.5 },
      { id: 2, value: "Css", xp: 1.5 },
      { id: 3, value: "Php", xp: 1.0 },
      { id: 4, value: "Html", xp: 1.5 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1.5 },
      { id: 2, value: "NestJS", xp: 0.8 },
      { id: 3, value: "NodeJS", xp: 1.5 },
      { id: 4, value: "Bootstrap", xp: 1.0 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          title="frameworks & bibliothèques"
          className="frameworksDisplay"
          languages={frameworks}
        />
      </div>
    );
  }
}

export default Languages;
