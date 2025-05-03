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
    title: "Backend Developer",
    location: "Remote",
    description:
      "Worked as a Backend Developer at CVSPAN, where I was responsible for designing and implementing RESTful APIs, managing authentication systems, and collaborating with frontend developers to ensure seamless integration.",
    icon: React.createElement(FaReact),
    date: "July 2024 - December 2024",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "Served as a Front-End Developer Intern at HerTechTrail, where I actively contributed to building and refining responsive user interfaces and also collaborated with designers and product managers to translate Figma prototypes into functional components.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2023 - November 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "Worked as a Full-Stack Developer Intern at LuTA, where I contributed to the development of web applications from frontend to backend. I built dynamic user interfaces with React, Next.js, TypeScript, and Tailwind CSS, and developed backend functionalities using Node.js and MongoDB.",
    icon: React.createElement(FaReact),
    date: "February 2023 - December 2023",
  }
] as const;

export const projectsData = [
  {
    title: "Webbie",
    description:
      "Currently in production, Webbie is an organization-facing platform where I served as a Backend Developer. I implemented secure, scalable RESTful APIs, integrated third-party authentication.", 
    tags: ["Node.js", "TypeScript", "Prisma", "Chai", "REST API", "OAuth", "Production App"],
    liveLink: "https://webbie.io",
    src: "/Webbie.png",
    alt: "Webbie Platform",
  },
  {
    title: "Wallet System",
    description:
      "As a Fullstack Developer, I built this web-based wallet system over a two-month period. The application enables users to securely send and receive funds, view transaction history, and manage their account activities.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Framer Motion", "CSS"],
    liveLink: "https://estie-wallet-system.vercel.app/",
    src: "/EstieWallet.png",
    alt: "Wallet System",
  },
  {
    title: "Chat App",
    description:
      "I developed this real-time chat application over the course of one month, focusing on the frontend interface and user experience.",
    tags: ["HTML", "CSS", "JavaScript", "React.Js", "Firebase"],
    liveLink: "https://chat-app-self-chi.vercel.app/",
    src: "/EstieChat.png",
    alt: "Chat App",
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
  "Figma",
  "JavaScript",
  "TypeScript",
  "React Js",
  "Next Js",
  "Node Js",
  "Git/GitHub",
  "Tailwind CSS",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "Postgre",
  "Prisma",
] as const;
