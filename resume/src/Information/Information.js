import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Information = {
  downloadLink: "https://drive.google.com/uc?export=download&id=1pNI0b-ZXrN46zcXrS7sV9vDBG1jSo5Cu",
  about: {
    summary:
      "Software Engineer over 3 years of experience specializing in Node.js, React, PostgreSQL, AWS cloud technologies, and Salesforce. Experienced in designing and implementing robust APIs, automating complex workflows, and building scalable cloud-based solutions. Proficient in integrating third-party APIs, developing dynamic dashboards, and migrating legacy systems to serverless architectures. Skilled in Git version control, Bitbucket, and agile methodologies. Passionate about leveraging technology to streamline processes, enhance system performance, and deliver impactful business solutions.",
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
    frontend: "React.js, HTML/CSS, Tailwind CSS, Bootstrap, Chakra UI",
    backend: "Node.js (Express)",
    database: "PostgreSQL, MySQL, MSSQL, MongoDB",
    cloud:
      "AWS (Lambda, EC2, ECR, SNS, EventBridge, CloudWatch, SES, Kinesis, Fargate, Connect), Vercel",
    devOpsTools: "Git, Docker, Bitbucket, CI/CD (AWS CodePipeline), DigitalOcean, Postman, Jira",
    salesforce:
      "Apex Triggers, SOQL, Salesforce Lightning, Reports & Dashboards",
    analytics: "Tableau, Microsoft Excel",
    miscellaneous:
      "Web scraping, Agile methodologies, RESTful APIs, Automation Scripts, Serverless Architecture",
  },
  experience: [
    {
      companyName: <span><a href="https://www.sciometrix.com/" target="_blank">Sciometrix, Royal Oak, MI - Remote</a></span>,
      designation: "Software Engineer",
      duration: "April 2024 - Present",
      id: "sciometrix-exp",
      description: [
          <span>Developed reusable frontend components and dashboard tiles for a MERN stack application <a href="https://clinicus.ai/sign-in" target="_blank"><b>Clinicus.ai</b></a> and created dynamic PDF generation templates using React.js, Tailwind CSS, Bootstrap, and Chakra UI.</span>,
          <span>Designed and deployed multiple RESTful APIs with Node.js (Express) and PostgreSQL to support <a href="https://clinicus.ai/sign-in" target="_blank"><b>Clinicus.ai</b></a> backend services.</span>,
          "Maintained scalable Node.js scripts integrating third-party APIs, processing device data, and automating business logic for efficient database updates.",
          "Transitioned automated scripts from AWS EC2 instances to Dockerized AWS Lambda functions, improving scalability and reducing manual maintenance.",
          "Automated AWS deployment pipelines using Docker, AWS ECR, Lambda, and CloudWatch, enabling continuous integration and delivery triggered by Bitbucket commits.",
          "Built a real-time call data pipeline leveraging AWS Kinesis and Lambda to capture missed calls from Amazon Connect, syncing with Salesforce and PostgreSQL; improved appointment scheduling and customer engagement via automated follow-ups and live dashboards.",
          "Integrated Salesforce with AWS services (SNS, EventBridge, Pinpoint, Lambda) to enable real-time two-way SMS communication and voice-call data management, enhancing patient engagement and automated interactions.",
          "Migrated complex Salesforce Apex triggers to AWS Lambda, invoking them through Clinicus.ai backend services to improve scalability and maintainability.",
          "Developed an automated invoice generation system producing PDF attachments and formatted Excel reports integrated with Salesforce using Salesforce bulk APIs, boosting operational efficiency.",
          "Designed and optimized PostgreSQL stored procedures, triggers, views, CTEs and queries, significantly enhancing system performance and ensuring data integrity.",
          "Migrated critical business logic from database stored procedures to Node.js services, leveraging modern JavaScript methods (e.g., filter, map, reduce) to enhance maintainability and flexibility.",
          "Integrated Salesforce CRM with PostgreSQL databases hosted on Heroku, ensuring seamless synchronization between front-end and backend systems.",
          "Created and maintained Salesforce objects, Apex triggers, scheduled jobs, and reports to automate core business workflows.",
          "Developed Tableau dashboards connected directly to PostgreSQL, delivering real-time analytics and visual insights for business stakeholders."
        ],
    },
    {
      companyName: <span><a href="https://www.innovyatech.com/" target="_blank">Innovya Technologies, Pune - Remote</a></span>,
      designation: "Software Developer",
      duration: "March 2022 – April 2024",
      description: [
      <span>
        Worked as a Software Engineer handling projects primarily for the{" "}
        <a  href="sciometrix-exp" >
          <b>Sciometrix</b>
        </a >{" "}
        client, gaining deep domain knowledge in healthcare and data-driven applications.
      </span>,
      "Conducted web scraping using Python, efficiently extracting and loading data into MySQL databases for backend consumption by PHP applications.",
      "Developed backend solutions using MySQL, ensuring data consistency, integrity, and optimized query performance.",
      <span>Collaborated with <a href="https://insightsoftware.com/" target="_blank"><b>InsightSoftware</b></a> for six months as Technical Support Manager working on their Spreadsheet Server product.</span>,
      "Implemented automated data integration workflows between multiple platforms, significantly reducing manual intervention and improving data accuracy.",
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
    projectName: "Real-Time Missed Call Processing Pipeline",
    description:
      "Designed and implemented a real-time AWS Kinesis and Lambda pipeline to capture missed calls from Amazon Connect, sync data with PostgreSQL and Salesforce, enhancing appointment scheduling and patient engagement with live dashboards.",
  },
  {
    projectName: "Automated CI/CD Pipeline for Containerized AWS Lambda Scripts",
    description:
      "Built and deployed a fully automated CI/CD pipeline using Bitbucket, AWS CodePipeline, Docker, and Lambda, replacing EC2 cron jobs with scalable, event-driven Lambda executions monitored by CloudWatch and integrated with failure alerts.",
  },
  {
    projectName: "Remote Patient Monitoring Alert System",
    description:
      "Developed a scalable RPM alert system integrating multi-device patient vitals, analyzing data via Node.js and PostgreSQL, and synchronizing with Salesforce to provide real-time clinical risk alerts for proactive healthcare interventions.",
  },
  {
    projectName: "Healthcare Facility Automated Invoicing System",
    description:
      "Created an end-to-end invoicing solution that processes AdvancedMD billing data, applies dynamic rate logic, generates PDF and Excel invoices with React and Tailwind templates, and integrates outputs directly into Salesforce for operational efficiency.",
  }
],

};
