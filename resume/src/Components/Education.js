import React from "react";

const Education = (props) => {
  return (
    <div>
      <div className="apart">
        <p>{props.college}</p>
        <p>{props.duration}</p>
      </div>
      <div>
        <p>{props.degree}</p>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Education;
