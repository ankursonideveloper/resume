import React from "react";

const Project = (props) => {
  return (
    <div className="project-content">
      <div>
        <ul>
          <li className="content-inside-space">
            <a href={props.link} target="_blank">
              <span className="font-bold">{props.projectName}: </span>
            </a>
            <span>{props.description}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
