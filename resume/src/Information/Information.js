import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Information = {
  downloadLink:
    "https://drive.google.com/uc?export=download&id=1bQwRYIZV5K548DejAfwGQGE5peiZBUKj",
  about: {
    summary:
      "Senior Full Stack Developer with about 4 years of experience building scalable, data-driven applications and cloud-native platforms using JavaScript (React, Node.js), PostgreSQL, and AWS. Proven track record in developing RESTful APIs, optimizing relational databases, and designing secure, production-grade web applications. Experienced in Agile development, DevOps, and CI/CD workflows. Adept at leading end-to-end feature delivery and collaborating with cross-functional teams in fast-paced environments.",
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
    language: "JavaScript, Python, SQL, Java, C, Apex",
    frontend: "React, Redux, HTML/CSS, Tailwind CSS, Bootstrap, Chakra UI",
    backend: "Node.js (Express), Spring Boot (learning)",
    database: "PostgreSQL, MySQL, MSSQL, MongoDB",
    cloud:
      "AWS (Lambda, EC2, ECR, SNS, EventBridge, CloudWatch, SES, Kinesis, Fargate, Connect, S3)",
    devOpsTools:
      "Git, Docker, Bitbucket, Jenkins, CI/CD (AWS CodePipeline), DigitalOcean, Postman, Jira, Confluence",
    salesforce:
      "Apex Triggers, SOQL, Salesforce Lightning, Reports & Dashboards",
    analytics: "Tableau, Microsoft Excel",
    miscellaneous:
      "Web scraping, Agile methodologies, RESTful APIs, Automation Scripts, Serverless Architecture, Unit & Integration Testing",
  },
  experience: [
    {
      companyName: <span><a href="https://www.sciometrix.com/" target="_blank">Sciometrix, Royal Oak, MI - Remote</a></span>,
      designation: "Software Engineer",
      duration: "April 2024 - Present",
      id: "sciometrix-exp",
      description: [
        <span>Led development of reusable frontend components and interactive dashboards for a MERN stack application <a href="https://clinicus.ai/sign-in" target="_blank"><b>Clinicus.ai</b></a>, and built dynamic PDF templates using React.js, Tailwind CSS, Bootstrap, and Chakra UI.</span>,
        <span>Architected and deployed multiple RESTful APIs using Node.js (Express) and PostgreSQL, powering critical backend functionality for <a href="https://clinicus.ai/sign-in" target="_blank"><b>Clinicus.ai</b></a>.</span>,
        "Engineered scalable Node.js scripts to integrate third-party APIs, process device data, and automate data pipelines.",
        "Refactored legacy EC2 scripts into Dockerized AWS Lambda microservices, significantly improving scalability and fault tolerance.",
        "Implemented a fully automated CI/CD pipeline using Docker, AWS ECR, Lambda, and CloudWatch, triggered by Bitbucket commits.",
        "Built a real-time call data ingestion system using AWS Kinesis and Lambda, syncing missed call data from Amazon Connect with Salesforce and PostgreSQL.",
        "Integrated AWS services (SNS, EventBridge, Pinpoint, Lambda) with Salesforce to enable real-time two-way SMS and voice-call data synchronization.",
        "Migrated Salesforce Apex triggers to modular AWS Lambda functions invoked through the Clinicus backend, enhancing maintainability.",
        "Designed and developed an automated invoicing system generating PDFs and Excel reports, integrating with Salesforce via Bulk APIs.",
        "Optimized PostgreSQL performance by designing stored procedures, triggers, views, and complex CTE-based queries.",
        "Reimplemented core business logic from database procedures into modular Node.js services for greater flexibility and testability.",
        "Integrated PostgreSQL (on Heroku) with Salesforce CRM to maintain real-time sync between backend and frontend layers.",
        "Maintained and enhanced Salesforce objects, Apex triggers, jobs, and dashboards to support automated workflows.",
        "Developed Tableau dashboards powered by PostgreSQL to deliver real-time insights to business stakeholders."
      ],
    },
    {
      companyName: <span><a href="https://www.innovyatech.com/" target="_blank">Innovya Technologies, Pune - Remote</a></span>,
      designation: "Software Developer",
      duration: "March 2022 – April 2024",
      description: [
        <span>Worked exclusively on projects for <a href="#sciometrix-exp"><b>Sciometrix</b></a>, serving as a core contributor in developing scalable, cloud-native full-stack applications and automation systems.</span>,
        "Led backend development using MySQL and Node.js, delivering high-performance data services and ensuring data consistency across systems.",
        "Implemented custom data pipelines and integrations using Python, including web scraping routines feeding MySQL databases consumed by PHP services.",
        "Built secure RESTful APIs and internal tools to support data analysis, synchronization, and dashboarding workflows.",
        "Collaborated closely with product managers, QA engineers, and analysts to iteratively ship new features using Agile and Kanban methodologies.",
        "Initiated early adoption of containerization and AWS-based automation within the team, driving foundational DevOps practices.",
        <span>Contributed to cross-company coordination during a six-month collaboration with <a href="https://insightsoftware.com/" target="_blank"><b>InsightSoftware</b></a> as a Technical Support Manager, supporting enhancements and troubleshooting for the Spreadsheet Server product.</span>,
        "Engineered cross-platform data synchronization workflows that reduced manual effort and improved operational accuracy across platforms."
      ]
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
      projectName: "Real-Time Event-Driven Call Data Processing",
      description:
        "Built a real-time AWS Kinesis and Lambda pipeline to capture missed calls from Amazon Connect, sync with PostgreSQL and Salesforce, and enhance patient engagement via live dashboards.",
    },
    {
      projectName: "CI/CD Automation for Containerized Lambda Functions",
      description:
        "Designed and implemented a CI/CD pipeline using Bitbucket, AWS CodePipeline, Docker, and Lambda, replacing EC2 cron jobs with reliable serverless functions monitored via CloudWatch.",
    },
    {
      projectName: "Remote Patient Monitoring Alert System",
      description:
        "Developed a real-time RPM alert system to analyze multi-device patient vitals using Node.js and PostgreSQL, syncing alerts to Salesforce for proactive care.",
    },
    {
      projectName: "End-to-End Automated Invoicing System",
      description:
        "Created a complete invoicing solution processing billing data, applying custom pricing rules, and generating PDF/Excel invoices with React templates, directly integrated into Salesforce.",
    }
  ],
};
