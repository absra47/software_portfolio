import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import StatusChip from "./StatusChip";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-b border-line">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading eyebrow="03 — Experience" title="Where I've built" />
        </Reveal>

        <div className="mt-14 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" aria-hidden />

          <div className="space-y-14">
            {experience.map((entry, i) => (
              <Reveal key={`${entry.company}-${entry.start}`} delay={i * 0.05}>
                <div className="relative pl-10">
                  <span
                    className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-[3px] border-2 ${
                      entry.active ? "border-active bg-active/20" : "border-signal-deep bg-ink"
                    }`}
                    aria-hidden
                  />

                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-mist">
                    <span>
                      {entry.start} — {entry.end}
                    </span>
                    <span aria-hidden>·</span>
                    <span>{entry.location}</span>
                    {entry.active ? <StatusChip label="Active" /> : null}
                  </div>

                  <h3 className="mt-3 font-display text-xl font-semibold text-bone">
                    {entry.role}
                  </h3>
                  <p className="font-mono text-sm text-signal">{entry.company}</p>
                  {entry.subtitle ? (
                    <p className="mt-1 text-sm text-mist italic">{entry.subtitle}</p>
                  ) : null}

                  <ul className="mt-4 space-y-2.5">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm text-mist leading-relaxed">
                        <span className="text-signal shrink-0" aria-hidden>
                          –
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
