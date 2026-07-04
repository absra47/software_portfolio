import { contactChannels } from "@/lib/data";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-b border-line">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="05 — Contact"
            title="Let's build something"
            description="Open to ERP/Odoo engagements, full-stack roles, and interesting freelance work. Reach out directly, or use the form."
          />

          <div className="mt-10 border border-line rounded divide-y divide-line overflow-hidden bg-panel">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between gap-4 px-5 py-4 group hover:bg-panel-2 transition-colors"
              >
                <span className="field-label mb-0">{channel.label}</span>
                <span className="font-mono text-sm text-bone group-hover:text-signal transition-colors">
                  {channel.value}
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="border border-line rounded bg-panel p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
