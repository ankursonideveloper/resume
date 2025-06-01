import React from "react";

const Education = (props) => {
  return (
    <div>
      <div className="apart">
        <p className="font-bold college-font">{props.college}</p>
        <p>{props.duration}</p>
      </div>
      <div className="degree">
        <p>{props.degree}</p>
      </div>
      <div className="degree-description">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Education;
