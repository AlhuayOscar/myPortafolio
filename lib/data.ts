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
      "Trabajé como desarrollador front-end durante 3 años. Estuve creando páginas web y diseños front-end para comercios locales",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Graduado de SoyHenry (Bootcamp)",
    location: "Buenos Aires, Argentina",
    description:
      "Me gradué después de 5 meses de estudio y esfuerzo. Al cabo de la primera semana me encontraba trabajando como desarrollador Full-Stack por mi desempeño.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full Stack Developer Autónomo",
    location: "Buenos Aires, Argentina",
    description:
      "Desde 2023 hasta el presente, trabajo como Full Stack Developer autónomo. Proponiendo y diseñando páginas a clientes del exterior y también he contribuido al crecimiento de una startup local. Mi experiencia abarca desde el desarrollo front-end hasta el back-end. Desarrollar Landings, E-commerce y Paneles de Administración son mi especialidad",
    icon: React.createElement(FaReact), // Agrega el icono deseado
    date: "2023 - presente",
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
