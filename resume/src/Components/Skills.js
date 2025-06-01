import React from "react";
import { Information } from "../Information/Information";

const Skills = () => {
  return (
    <div>
      <p className="content-inside-space">
        <span className="font-bold ">Languages: </span>
        <span>{Information.skills.language}</span>
      </p>
      <p className="content-inside-space">
        <span className="font-bold">Technologies & Tools: </span>
        <span>{Information.skills.technologiesAndTools}</span>
      </p>
    </div>
  );
};

export default Skills;
