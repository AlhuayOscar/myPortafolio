import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mexplorerfront from "@/public/mexplorerfront.png";
import libertapp from "@/public/libertapp.png";
import mexplorerback from "@/public/mexplorerback.png";
import urbanclub from "@/public/urbanclub.png";
import edupluss from "@/public/edupluss.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Buenos Aires, Argentina",
    description:
      "Worked as a front-end developer for 3 years. I was creating web pages and front-end designs for local businesses.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "SoyHenry Graduate (Bootcamp)",
    location: "Buenos Aires, Argentina",
    description:
      "Graduated after 5 months of studying and hard work. By the end of the first week, I was already working as a Full-Stack developer due to my performance. I was recognized by the bootcamp and several of my classmates for my continuous proactivity and positive attitude.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Freelance Full Stack Developer",
    location: "Buenos Aires, Argentina",
    description:
      "From 2023 to the present, I've been working as a freelance Full Stack Developer. I create and design websites for clients abroad and have also contributed to the growth of a local startup. My experience spans from front-end to back-end development. Building Landing pages, E-commerce sites, and Admin Panels are my specialty.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "LibertApp",
    description:
      "Developed the layout, design, components, worked on QA of the entire Front, Landing, Dashboard.",
    tags: [
      "React",
      "Typescript",
      "Tailwind",
      "Git",
      "MUI",
      "Docker",
      "Framer-Motion",
      "Formik",
      "Firebase",
      "AWS S3",
      "AWS Lambda",
      "OCR",
      "DynamoDB",
    ],
    imageUrl: libertapp,
  },
  {
    title: "Edupluss",
    description:
      "Refactored the whole layout, design, forms, and integration with the backend of the entire page.",
    tags: [
      "React",
      "APIs",
      "Typescript",
      "Node.js",
      "SQL",
      "Tailwind",
      "ChartJs",
      "Next.js",
      "Node.js",
      "Sequelize",
      "Postgres",
      "SQL",
      "Firebase",
      "Tailwind",
    ],
    imageUrl: edupluss,
  },
  {
    title: "Mexplorertours",
    description:
      "Developed the layout, design, forms, and integration with the backend of the entire page.",
    tags: [
      "React",
      "Node.js",
      "i18n",
      "nodemailer",
      "Stripe",
      "Next.js",
      "Styled Components",
    ],
    imageUrl: mexplorerfront,
  },
  {
    title: "Mexplorer Admin Panel",
    description:
      "We set up the backend infrastructure and implemented security measures like Anti-XSS, Encryption, and robust Authentication.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Amazon AWS",
      "Next.js",
      "Tailwind",
    ],
    imageUrl: mexplorerback,
  },
  {
    title: "Urbanclub.club",
    description:
      "Developed User Registration and Login, integrated backend for all forms, and designed cards as well as implemented ticket buying and selling.",
    tags: [
      "React",
      "Redux + Toolkit",
      "SQL",
      "phpMyAdmin ",
      "Sequelize",
      "CSS Modules",
      "JWT",
      "Paypal",
    ],
    imageUrl: urbanclub,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Arduino",
  "Boostrap",
  "Swift",
  "SQL",
  "Express",
  "MUI",
  "Docker",
  "Formik",
  "Firebase",
  "AWS S3",
  "AWS Lambda",
  "Styled Components",
  "OCR",
  "DynamoDB",
  "APIs",
  "ChartJs",
  "Sequelize",
  "i18n",
  "nodemailer",
  "Stripe",
  "Redux + Toolkit",
  "JWT",
  "Paypal",
  "PostgreSQL",
  "phpMyAdmin",
  "React Native",
  "Framer Motion",
  "CSS Modules",
  "Material UI",
] as const;
