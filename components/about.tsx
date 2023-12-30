"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After completing my HND in&nbsp;
        <span className="font-medium">Mass Communication</span>, I embarked on a
        journey to follow my passion for programming and creative
        problem-solving. I enrolled in two coding bootcamps to master&nbsp;
        <span className="font-medium">
          full-stack web development and frontend development
        </span>
        . <span className="italic">My favorite aspect of programming</span> is
        the challenge of problem-solving, and I'm passionate about finding
        solutions. My core stack includes&nbsp;
        <span className="font-medium">
          Reactjs, Next.js, Node.js, and MongoDB
        </span>
        . I am also well-versed in TypeScript and continually seek to expand my
        knowledge. Currently, I am actively seeking a&nbsp;
        <span className="font-medium">full-time or internship position</span> as
        a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, my interests
        include reading, watching educational videos, and writing. I also have a
        strong appetite for&nbsp;
        <span className="font-medium">continuous learning</span>. Currently, I
        am enrolled in an&nbsp;
        <span className="font-medium">Agile software development program</span>.
      </p>
    </motion.section>
  );
}
