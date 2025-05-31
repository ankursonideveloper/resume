import React from "react";

const Project = (props) => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <span>{props.projectName}: </span>
            <span>{props.description}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
