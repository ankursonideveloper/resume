import React from "react";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Title from "./Title";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Divider from "./Divider";
import Data from "./Data";
import { Information } from "../Information/Information";
import Header from "./Header";
import Section from "./Section";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./Project";

const Resume = () => {
  return (
    <div className="Resume">
      <Header>
        <Title titleName="Ankur Soni" />
        <Header1 />
        <Header2 />
      </Header>
      <Section name="Skills">{<Skills />}</Section>
      <Section name="Experience">
        {Information.experience.map((experience) => {
          return (
            <Experience
              company={experience.companyName}
              designation={experience.designation}
              duration={experience.duration}
              points={experience.description}
            />
          );
        })}
      </Section>
      <Section name="Education">
        {Information.education.map((education) => {
          return (
            <Education
              college={education.college}
              duration={education.duration}
              degree={education.degree}
              description={education.description}
            />
          );
        })}
      </Section>
      <Section name="Projects">
        {Information.projects.map((project) => {
          return (
            <Project
              projectName={project.projectName}
              link={project.link}
              description={project.description}
            />
          );
        })}
      </Section>
    </div>
  );
};

export default Resume;
