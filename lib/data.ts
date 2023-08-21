import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mexplorerfront from "@/public/mexplorerfront.png";
import mexplorerback from "@/public/mexplorerback.png";
import urbanclub from "@/public/urbanclub.png";

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
      "I worked as a front-end developer for 3 years. I was creating web pages and front-end designs for local businesses.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "SoyHenry Graduate (Bootcamp)",
    location: "Buenos Aires, Argentina",
    description:
      "I graduated after 5 months of studying and hard work. By the end of the first week, I was already working as a Full-Stack developer due to my performance. I was recognized by the bootcamp and several of my classmates for my continuous proactivity and positive attitude.",
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
    title: "Mexplorertours",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: mexplorerfront,
  },
  {
    title: "Mexplorer Admin Panel",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: mexplorerback,
  },
  {
    title: "Urbanclub.club",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
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
  "Express",
  "PostgreSQL",
  "React Native",
  "Framer Motion",
] as const;
