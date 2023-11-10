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
      "I worked as a full-stack developer on this project for 2 months. Users can give public feedback.",
    tags: ["React Js", "Node Js", "Express", "MongoDB", "Framer-motion", "CSS"],
    src: '/walletapp.png', alt: 'Wallet System',
  },
  {
    title: "Responsive Website",
    description:
      "I worked as a frontend developer on this project for 1 month. Users can give public feedback.",
    tags: ["HTML", "CSS"],
    src: '/responsiveweb.png', alt: 'Responsive Website',
  },
  {
    title: "Cloned Hotelng",
    description:
      "I worked as a frontend developer on this project for 1 month. Users can give public feedback.",
    tags: ["HTML", "CSS", "Javascript"],
    src: '/hotelng.png', alt: 'Hotelng',
  },
  {
    title: "Weather App",
    description:
      "I worked as a frontend developer on this project for 1 month. It has features like filtering, sorting and pagination.",
    tags: ["React Js", "CSS", "Javascript"],
    src: '/weatherapp.png', alt: 'Weather App',
    
  },
  {
    title: "Yelp Camp",
    description:
      "A public web app project within a 1 week time frame. I worked as a Frontend developer.",
    tags: ["HTML", "Tailwind CSS", "Javascript"],
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
