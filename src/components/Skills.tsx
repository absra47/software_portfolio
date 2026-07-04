import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-b border-line">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="02 — Skills"
            title="Tools of the trade"
            description="From Odoo internals to the modern web stack around it."
          />
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-mist mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-bone bg-panel border border-line rounded px-3 py-1.5 hover:border-signal-deep hover:text-signal transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
