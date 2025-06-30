import React from "react";
import { Information } from "../Information/Information";

const About = () => {
  return (
    <div className="skill-content">
      <p className="content-inside-space">{Information.about.summary}</p>
    </div>
  );
};

export default About;
