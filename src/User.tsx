import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconBrandYoutube, IconBrandLeetcode, IconBrandGmail } from "@tabler/icons-react";

const Info={
    name:"Pritumi Patel",
    stack:["Computer Science Major", "2nd year student", "Software Developer"],
    bio:"I'm a computer science student at York University with an ambition to pursue software development. My mission is to broaden my horizons in this field, promote the essence of technology in my community and connect with others who share the same drive and ambition!"
}

const ProjectInfo = [
    {
        title: "Wildfyre",
        desc: "The Ontario Wildfyre is an application that provides real-time wildfire updates, reporting tools, and a Google Maps visualization for Ontario. It also features an AI-powered forest fire behavior prediction tool for localized queries.",
        image: "wildfyre.jpg",
        live: true,
        technologies: ["Flutter", "Python", "json", "Cohere API", "OpenAI, Google Maps API"],
      //link: "https://code-mars.github.io/Ekart/",
        github: "https://github.com/Pritumi1984/Wildfyre"
    },
    {
        title: "Seasonal Recipes",
        desc: "Seasonal Recipe Collection is a web application created to make eating both enjoyable and eco-friendly. By choosing recipes that use ingredients in season, we get the freshest and most flavorful food while also cutting down on the environmental impact of transporting produce.",
        image: "recipes.png",
        live: false,
        technologies: ["React", "Tailwind", "Flask", "Node.js", "JavaScript", "Python"],
      //  link: "https://github.com/Code-Mars/Facebook-Clone",
        github: "https://github.com/Pritumi1984/Seasonal-Recipes"
    },
    {
        title: "Pramukh Pharmacy",
        desc: "This is a professional pharmaceutical website for our local family pharmacy business in Uganda that sells pharmaceutical products. It is a responsive website created to support marketing efforts.",
        image: "pramukh.png",
        live: false,
        technologies: ["React", "Tailwind", "Node.js", "JavaScript"],
      //  link: "https://github.com/Code-Mars/Spotify-Clone",
        github: "https://github.com/Pritumi1984/Pramukh-Pharmaceutical"
    },
]

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "React JS", "Flutter", "Tailwind CSS", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MySQL", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: ["Python", "Java", "JavaScript", "C", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "AWS", "Azure", "MongoDB Compass", "Jira", "Postman"]
    }
]
const socialLinks=[
    {link:"https://github.com/Pritumi1984", icon:IconBrandGithub},
    {link:"https://www.linkedin.com/in/pritumipatel/", icon:IconBrandLinkedin},
    {link:"https://leetcode.com/u/pritumi1914/", icon:IconBrandLeetcode},
    {link:"mailto:pritumi.patel1984@gmail.com", icon:IconBrandGmail},
    {link:"https://www.instagram.com/pritumii_p/", icon:IconBrandInstagram},
];


const ExperienceInfo = [
    {
        role: "Information Technology Assistant",
        company: "York University",
        date: "May 2024 - Present",
        desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["Azure", "Windows AD", "m365 admin centers", "Powershell Scripting","HaloITSM"]
    },
    {
        role: "Web Developer",
        company: "ElleHacks",
        date: "September 2023 - February 2024",
        desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
        skills: ["React.js", "Tailwind CSS", "JavaScript", "Node.js", "Material UI", "Github"]
    },
    {
        role: "Information Technology Coordinator",
        company: "York Federation of Students",
        date: "March 2023 - Present",
        desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
        skills: ["AWS EC2", "AWS RDS", "Google Workspace", "JIRA", "Confluence", ]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export{Info, ProjectInfo, SkillInfo, socialLinks, ExperienceInfo, Slugs};