import { certificates, education, languages } from "@/lib/data";
import Reveal from "./Reveal";

export default function EducationCerts() {
  return (
    <section className="py-24 px-6 border-b border-line">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="grid sm:grid-cols-[1.2fr_1fr] border border-line rounded bg-panel divide-y sm:divide-y-0 sm:divide-x divide-line">
            <div className="p-8">
              <span className="eyebrow">Education</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-bone">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-mist">{education.school}</p>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-mist">
                {education.start} — {education.end}
              </p>

              <div className="mt-6">
                <span className="font-mono text-xs uppercase tracking-widest text-mist">
                  Languages
                </span>
                <p className="mt-2 text-sm text-bone">{languages.join(" · ")}</p>
              </div>
            </div>

            <div className="p-8">
              <span className="eyebrow">Certificates</span>
              <ul className="mt-3 space-y-2.5">
                {certificates.map((cert) => (
                  <li key={cert} className="flex gap-3 text-sm text-mist leading-relaxed">
                    <span className="text-signal shrink-0" aria-hidden>
                      –
                    </span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
