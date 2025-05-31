import React from "react";

const Experience = (props) => {
  return (
    <div>
      <div className="apart">
        <p className="font-bold">{props.company}</p>
        <p>{props.duration}</p>
      </div>
      <div>
        <p className="font-bold font-italic">{props.designation}</p>
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
