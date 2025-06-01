import React from "react";

const Experience = (props) => {
  return (
    <div>
      <div className="apart">
        <p className="font-bold content-inside-space company-font">
          {props.company}
        </p>
        <p>{props.duration}</p>
      </div>
      <div>
        <p className="font-bold font-italic content-inside-space">
          {props.designation}
        </p>
      </div>
      <div>
        <ul>
          {props.points.map((point) => {
            return <li>{point}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
