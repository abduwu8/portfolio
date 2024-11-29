import company1 from "../../public/c1.jpeg";
import company2 from "../../public/c2.jpeg";
import company3 from "../../public/c3.jpeg";
import company4 from "../../public/c4.jpeg";

import project1 from "../../public/calculator-app.png";
import project2 from "../../public/ss.png";
import project3 from "../../public/project3.jpeg";
import project4 from "../../public/project4.jpeg";

export const PROFILE = {
  name: "Abdullah Khan",
  city: "Mumbai , India",
  greet: "Hey There!",
};

export const PROJECTS = [
  {
    name: "Project 1",
    image: project1,
    url: "https://github.com/abduwu8/Calculator.",
  },
  {
    name: "Project 2",
    image: project2,
    url: "https://github.com/abduwu8/shawarmasubway",
  },
  
];

export const SKILLS = [
  "Frontend Development: React.js, Angular, Next.js, Tailwind CSS, HTML, CSS, Figma",
  "Backend Development: Node.js, Express.js, Django, Python, .NET",
  "Web3 Development: Web3.js, Ethereum, Smart Contracts",
  "Database Technologies: MySQL, NumPy",
  "Cloud Services: AWS (Amazon Web Services)",
  "Programming Languages: JavaScript, TypeScript, Python, C++",
  "Other Technologies: Vite, Next.js, Figma",
];

export const EXPERIENCES = [
  {
    img: company1,
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    img: company2,
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    img: company3,
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    img: company4,
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];
