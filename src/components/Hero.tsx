"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { heroFields, profile } from "@/lib/data";
import FieldStrip from "./FieldStrip";
import StatusChip from "./StatusChip";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 px-6 border-b border-line"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-between gap-4 mb-10"
        >
          <StatusChip label={profile.availability} />
          <div className="flex items-center gap-4 text-mist">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-signal transition-colors"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-signal transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="hover:text-signal transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-semibold text-bone leading-[0.95] text-6xl sm:text-8xl tracking-tight"
        >
          Absra
          <br />
          Girma
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 font-mono text-signal text-sm sm:text-base uppercase tracking-widest"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-mist text-lg leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <FieldStrip fields={heroFields} />
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-signal text-ink font-medium px-5 py-3 rounded hover:brightness-110 transition"
          >
            View my work <ArrowRight size={16} />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 border border-line px-5 py-3 rounded text-bone hover:border-signal hover:text-signal transition-colors"
          >
            Download CV <ArrowDown size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
