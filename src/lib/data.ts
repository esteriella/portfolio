import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

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
    location: "Remote",
    description:
      "I worked as a front-end developer intern at HerTechTrail for 3 months.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2023 - Nov 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack developer intern at LuTA, working as a code contributor. My stack includes React, Next.js, TypeScript, Tailwind, Nodejs and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "February 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Wallet System",
    description:
      "I served as a full-stack developer for a duration of two months on this project.",
    tags: ["React Js", "Node Js", "Express", "MongoDB", "Framer-motion", "CSS"],
    liveLink: "https://estie-wallet-system.vercel.app/",
    src: '/walletapp.png', alt: 'Wallet System',
  },
  {
    title: "Responsive Website",
    description:
      "I served as a frontend developer for a period of one month on this project, implemented necessary features.",
    tags: ["HTML", "CSS"],
    liveLink: "https://esteriella.github.io/Responsive-Website",
    src: '/responsiveweb.png', alt: 'Responsive Website',
  },
  {
    title: "Cloned Hotelng",
    description:
      "I assumed the role of a Frontend Developer for a duration of one month in the execution of this project, implemented necessary features. ",
    tags: ["HTML", "CSS", "Javascript"],
    liveLink: "https://esteriella.github.io/project_ng",
    src: '/hotelng.png', alt: 'Hotelng',
  },
  {
    title: "Weather App",
    description:
      "I served as a Frontend Developer on this project for a duration of one month. The application boasts features characteristic of a weather app.",
    tags: ["React Js", "CSS", "Javascript"],
    liveLink: "https://weather-app-esteriella.vercel.app",
    src: '/weatherapp.png', alt: 'Weather App',
    
  },
  {
    title: "Yelp Camp",
    description:
      "I contributed to the development of a public web application project within a concise one-week timeframe.",
    tags: ["HTML", "Tailwind CSS", "Javascript"],
    liveLink: "https://esteriella.github.io/yelp-camp",
    src: '/yelpcamp.png', alt: 'Yelp Camp',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React Js",
  "Next Js",
  "Node Js",
  "Git/GitHub",
  "Tailwind CSS",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Framer Motion",
] as const;
