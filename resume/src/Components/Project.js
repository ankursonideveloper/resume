import React from "react";

const Project = (props) => {
  return (
    <div>
      <div>
        <ul>
          <li>
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
