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
        After completing my Higher National Diploma (HND) in <span className="font-medium">Mass Communication</span>,
         I pivoted to pursue my passion for programming and creative problem-solving. I immersed myself in two intensive coding bootcamps, where I honed my skills in <span className="font-medium">
        full-stack web development and frontend development</span>. 
        <span className="italic">What excites me most about programming</span> is the intellectual challenge of solving complex problems, and I thrive on finding innovative solutions. 
        My core technical stack includes <span className="font-medium">React.js, Next.js, Node.js, MongoDB, PostgreSQL, and Prisma</span>, 
        with a strong command of TypeScript. I’m always eager to learn and grow my skill set. I’m currently looking for a 
        <span className="font-medium">full-time or internship position</span> as a software developer, 
        where I can contribute to impactful projects and continue my growth in the field.
      </p>


      <p>
        <span className="italic">When I'm not coding</span>, my interests
        include reading, watching educational videos, and writing. 
      </p>
    </motion.section>
  );
}
