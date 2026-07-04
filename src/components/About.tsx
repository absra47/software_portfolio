import { focusAreas, profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-b border-line">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-16">
        <Reveal>
          <SectionHeading eyebrow="01 — About" title="Systems-minded developer" />
          <p className="mt-6 text-mist leading-relaxed">{profile.summary}</p>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-signal">
            {profile.currentlyLine}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.08}>
              <div className="h-full border border-line rounded bg-panel p-6 hover:border-signal-deep transition-colors">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-signal">
                  {area.tag}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-bone">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-mist leading-relaxed">
                  {area.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
