import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Information = {
  about: {
    summary:
      "Senior Software Engineer with 5 years of experience specializing in Node.js, React, PostgreSQL, AWS cloud technologies, and Salesforce. Experienced in designing and implementing robust APIs, automating complex workflows, and building scalable cloud-based solutions. Proficient in integrating third-party APIs, developing dynamic dashboards, and migrating legacy systems to serverless architectures. Skilled in Git version control, Bitbucket, and agile methodologies. Passionate about leveraging technology to streamline processes, enhance system performance, and deliver impactful business solutions.",
  },
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
    language: "Javascript, Python, SQL, Java, C, Apex",
    frontend: "React.js, HTML/CSS, Tailwind CSS, Bootstrap, Chakra UI",
    backend: "Node.js (Express)",
    database: "PostgreSQL, MySQL, MSSQL",
    cloud:
      "AWS (Lambda, EC2, ECR, SNS, EventBridge, CloudWatch, SES, Kinesis, Fargate, AWS Connect), Vercel",
    devOpsTools: "Git, Docker, Bitbucket, CI/CD (AWS CodePipeline), DigitalOcean, Postman, Jira",
    salesforce:
      "Apex Triggers, SOQL, Salesforce Lightning, Reports & Dashboards",
    analytics: "Tableau, Excel",
    miscellaneous:
      "Web Scraping, Agile methodologies, RESTful APIs, Automation Scripts, Serverless Architectures",
  },
  experience: [
    {
      companyName: "Sciometrix, Royal Oak, MI - Remote",
      designation: "Software Engineer",
      duration: "April 2024 - Present",
      description: [
        "Developed and maintained scalable Node.js scripts integrating third-party APIs, processing device data, and managing business logic for automated database updates.",
        "Designed and optimized PostgreSQL stored procedures and queries, significantly improving system performance and data integrity.",
        "Migrated complex business logic from database-level procedures to Node.js services, leveraging modern JavaScript techniques like filtering, mapping, and reducing datasets.",
        "Integrated Salesforce with PostgreSQL databases using Heroku, ensuring seamless synchronization between CRM and backend systems.",
        "Created and managed Salesforce objects, Apex triggers, scheduled scripts, and reports, automating business workflows.",
        "Developed a comprehensive billing system in Salesforce for the healthcare domain, automating encounter-based invoicing and reducing manual processing time.",
        "Built an automated invoice generation system producing PDF attachments integrated with Salesforce objects using AdvancedMD APIs, increasing operational efficiency.",
        "Implemented Tableau dashboards by connecting directly to PostgreSQL, providing real-time analytics and visualization for stakeholders.",
        "Set up automated scripts on AWS EC2 instances and later transitioned to Dockerized AWS Lambda functions for improved scalability and reduced manual oversight.",
        "Automated AWS deployment pipelines using Docker, AWS ECR, AWS Lambda, and CloudWatch, facilitating continuous integration and deployment upon Bitbucket commits",
        "Integrated AWS services (Kinesis, SNS, EventBridge) to manage live voice-call data and real-time messaging, enhancing customer interaction capabilities.",
        "Developed reusable frontend components and dynamic PDF generation templates using React.js, Tailwind CSS, Bootstrap, and Chakra UI.",
      ],
    },
    {
      companyName: "Innovya Technologies, Pune - Remote",
      designation: "Software Developer",
      duration: "March 2022 – April 2024",
      description: [
        "Worked as a Software Engineer handling projects primarily for the Sciometrix(Currently working here) client, gaining deep domain knowledge in healthcare and data-driven applications.",
        "Conducted web scraping using Python, efficiently extracting and loading data into MySQL databases for backend consumption by PHP applications.",
        "Developed backend solutions using MySQL, ensuring data consistency, integrity, and optimized query performance.",
        "Collaborated with InsightSoftware for six months as Technical Support Manager worked on their product Spreadsheet Server.",
        "Implemented automated data integration workflows between multiple platforms, significantly reducing manual intervention and improving data accuracy.",
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
        "Developed an interactive Rock-Paper-Scissors game using HTML, CSS, and vanilla JavaScript. The application features dynamic UI updates, real-time user interaction, and logic to determine game outcomes.",
    },
  ],
};
