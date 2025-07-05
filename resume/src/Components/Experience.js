import React from "react";

const Experience = (props) => {
  const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
  return (
    <div className="experience-content" id={props.id}>
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
          {props.points.map((point, index) => {
            return <li key={index}>{point}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
