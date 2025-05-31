import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Information = {
  email: { emailId: "ankursoni2974@gmail.com", emailIcon: <MdEmail /> },
  phone: { phoneNumber: "+919305463385", phoneIcon: <IoMdPhonePortrait /> },
  gitHub: {
    link: "https://github.com/ankursonideveloper",
    gitHubIcon: <FaGithub />,
  },
  linkedIn: {
    link: "https://www.linkedin.com/in/ankursoni2974",
    linkedInIcon: <FaLinkedin />,
  },
  skills: {
    language: "Javascript, Python, Java, SQL, Apex, C, Matlab",
    technologiesAndTools:
      "ReactJS, NodeJS, PostgreSQL, AWS, Lambda, Kinesis, SNS, SES, Fargate, ECR, CodePipeline,  EC2, S3, DynamoDB, Postman, Docker, Salesforce, Tableau",
  },
  experience: [
    {
      companyName: "Sciometrix",
      designation: "Software Engineer",
      duration: "March 2022 - Present",
      description: [
        "Designed and developed RESTful APIs and integrated third-party services to power a US healthcare SaaS product (Clinicus.ai).",
        "Built scalable backend systems using Node.js (Express) and PostgreSQL, leveraging advanced features like CTEs, triggers, stored procedures, and complex joins.",
        "Led AWS infrastructure automation using Lambda, Fargate, EventBridge, ECR, SNS, SES, and Kinesis for real-time voice data processing.",
        "Created Dockerized scripts and scheduled them via Lambda + ECR, optimizing long-running job execution.",
        "Built full-stack features in React (hooks, dashboard libraries) and implemented dynamic UI templates with HTML/CSS and data bindings.",
        "Integrated Salesforce with AWS to send dynamic SMS templates via SNS; built Apex classes, flows, and process automations.",
        "Delivered powerful visualizations and reports by integrating data with Tableau dashboards and Salesforce reports.",
      ],
    },
  ],
  education: [
    {
      college: "Institute of Engineering and Technology, Lucknow",
      duration: "July 2014 - June 2018",
      degree: "B.Tech in Electronics and Communication Engineering",
      description:
        "Graduated with a strong foundation in programming, data structures, and digital systems. Active in coding clubs and technical events.",
    },
  ],
  projects: [
    {
      projectName: "Rock Paper Scissor Game",
      link: "https://ankursonideveloper.github.io/RockPaperScissor/",
      description:
        "This is a traditional game built on HTML, CSS and Javascript.",
    },
  ],
};
