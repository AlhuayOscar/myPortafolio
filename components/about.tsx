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
      <div>
        <p className="mb-3">
          Hey there! My name is Oscar. I'm a Full Stack developer with a strong
          desire to experiment, progress, and share experiences in the vast
          world of technology. Since I was a kid, I've been interested in being
          an inventor of some robot, machinery, or technology that everyone uses
          everywhere. Now, I believe I have the opportunity thanks to
          programming ❤️.
        </p>
      </div>
      <div>
        <p className="mb-3">
          I create layouts, prototypes, and wireframes for digital businesses. I
          integrate these technologies with the server and database, and I also
          build Back-End systems to handle your data seamlessly.
        </p>
      </div>
      <div>
        <p>
          My current goal is to develop all my knowledge and create projects
          that have an impact on my environment and the whole world. You can
          easily reach me here:
        </p>
        <div>
          <p>Email -{">"} oscar_alhuay2001@hotmail.com</p>
          <p>Github -{">"} github.com/AlhuayOscar</p>
        </div>
      </div>
    </motion.section>
  );
}
