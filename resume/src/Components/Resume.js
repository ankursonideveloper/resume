import { IoMdDownload } from "react-icons/io";
import Title from "./Title";
import Header1 from "./Header1";
import Header2 from "./Header2";
import { Information } from "../Information/Information";
import Header from "./Header";
import Section from "./Section";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./Project";
import About from "./About";
import { downloadPdf } from "../utils/downloadReactComponent";

const Resume = () => {
  const handleDownload = async() => {
    await downloadPdf("Resume");
  };
  return (
    <div className="Resume" id="Resume">
      <div className="Download">
        <button onClick={handleDownload}>
          <IoMdDownload size={25} />
        </button>
      </div>

      <Header>
        <Title titleName="Ankur Soni" />
        <Header1 />
        <Header2 />
      </Header>
      <Section name="About">{<About />}</Section>
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
      
    </div>
  );
};

export default Resume;
