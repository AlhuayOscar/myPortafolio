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
          I'm a Developer with a strong
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
    </motion.section>
  );
}
