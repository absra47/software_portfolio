import { ArrowUpRight, Lock } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-b border-line">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="04 — Projects"
            title="Selected builds"
            description="A mix of ERP-adjacent work and full-stack projects, from APIs to storefronts."
          />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05} className="h-full">
              <article className="h-full flex flex-col border border-line rounded bg-panel p-6 hover:border-signal-deep transition-colors">
                <h3 className="font-display text-lg font-semibold text-bone">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-mist leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.65rem] uppercase tracking-wider text-mist">
                  {project.stack.map((tech, idx) => (
                    <span key={tech}>
                      {tech}
                      {idx < project.stack.length - 1 ? (
                        <span className="text-line ml-3" aria-hidden>
                          /
                        </span>
                      ) : null}
                    </span>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-line">
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-signal hover:brightness-110 transition"
                    >
                      View repo <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-mist">
                      <Lock size={12} /> {project.note}
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
