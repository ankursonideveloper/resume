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
    language: "Javascript, Python, Java, SQL, C, Apex",
    technologiesAndTools:
      "ReactJS, NodeJS, PostgreSQL, AWS, Lambda, Kinesis, SNS, SES, Fargate, ECR, CodePipeline,  EC2, S3, DynamoDB, RDS, Postman, Docker, Salesforce, Tableau",
  },
  experience: [
  {
    companyName: "Sciometrix, Royal Oak, MI",
    designation: "Software Engineer",
    duration: "April 2024 - Present",
    description: [
      "Designed and developed RESTful APIs using Node.js (Express) to support the US healthcare SaaS platform (Clinicus.ai).",
      "Integrated third-party APIs for external services, document generation (PDF/Excel), and real-time data flows.",
      "Built full-stack features using React (hooks, dashboard libraries), PostgreSQL, and styled dynamic UI templates with HTML/CSS.",
      "Managed AWS infrastructure with services like Lambda, Fargate, EventBridge, ECR, Kinesis, SNS, and SES.",
      "Scheduled Dockerized scripts on AWS Lambda via ECR to process and automate data workflows.",
      "Built a complete system for capturing medical device readings, storing them in PostgreSQL, and syncing them to Salesforce and Tableau dashboards.",
      "Created Tableau dashboards and Salesforce reports to visualize key healthcare metrics.",
      "Developed invoice generation system with dynamic PDF creation and file attachment to Salesforce objects.",
      "Built Python scripts for data cleaning, Excel processing, and web scraping.",
      "Moved Salesforce Apex triggers and schedulers to AWS Lambda for better scalability and integration.",
      "Used AWS Kinesis to stream live voice call data into the PostgreSQL database.",
    ],
  },
  {
    companyName: "Innovya Technologies, Remote",
    designation: "Software Engineer",
    duration: "March 2022 – April 2024",
    description: [
      "Worked as a dedicated resource for Sciometrix, contributing across backend, frontend, and cloud infrastructure.",
      "Automated PostgreSQL-Salesforce sync via Heroku and implemented custom Salesforce APIs.",
      "Developed Apex classes, triggers, schedulers, process automations, and Salesforce flows.",
      "Created Salesforce dashboards and custom objects to track healthcare operations.",
      "Built complex SQL queries involving joins, CTEs, triggers, and stored procedures for reporting and analytics.",
      "Contributed to AWS infrastructure setup including Lambda, SNS, EventBridge, and SES integration.",
      "Collaborated with cross-functional remote teams to deliver scalable healthcare features aligned with US compliance.",
    ],
  },
],
 education: [
  {
    college: "Institute of Engineering and Technology, Lucknow",
    duration: "July 2014 - June 2018",
    degree: "B.Tech in Electronics and Communication Engineering",
    description:
      "Completed a rigorous curriculum with a solid foundation in programming, data structures, algorithms, and digital systems. Regularly practiced problem-solving on platforms like CodeChef, HackerRank, and HackerEarth, strengthening algorithmic thinking and coding proficiency.",
  },
],
  projects: [
  {
    projectName: "Rock Paper Scissor Game",
    link: "https://ankursonideveloper.github.io/RockPaperScissor/",
    description:
      "Developed an interactive Rock-Paper-Scissors game using HTML, CSS, and vanilla JavaScript. The application features dynamic UI updates, real-time user interaction, and logic to determine game outcomes. Designed with responsive styling to ensure a smooth user experience across devices. This project demonstrates strong fundamentals in DOM manipulation, event handling, and game logic implementation.",
  },
],
};
