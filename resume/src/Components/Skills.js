import React from "react";
import { Information } from "../Information/Information";

const Skills = () => {
  return (
    <div className="skill-content">
      <p className="content-inside-space">
        <span className="font-bold ">Languages: </span>
        <span>{Information.skills.language}</span>
      </p>
      <p className="content-inside-space">
        <span className="font-bold">Frontend: </span>
        <span>{Information.skills.frontend}</span>
      </p>
      <p className="content-inside-space">
        <span className="font-bold">Backend: </span>
        <span>{Information.skills.backend}</span>
      </p>

      <p className="content-inside-space">
        <span className="font-bold">Databases: </span>
        <span>{Information.skills.database}</span>
      </p>
      <p className="content-inside-space">
        <span className="font-bold">Cloud Technologies: </span>
        <span>{Information.skills.cloud}</span>
      </p>
      <p className="content-inside-space">
        <span className="font-bold">DevOps & Tools: </span>
        <span>{Information.skills.devOpsTools}</span>
      </p>
      <p className="content-inside-space">
        <span className="font-bold">Salesforce: </span>
        <span>{Information.skills.salesforce}</span>
      </p>
      <p className="content-inside-space">
        <span className="font-bold">Analytics & Reporting: </span>
        <span>{Information.skills.analytics}</span>
      </p>
      <p className="content-inside-space">
        <span className="font-bold">Miscellaneous: </span>
        <span>{Information.skills.miscellaneous}</span>
      </p>
    </div>
  );
};

export default Skills;
