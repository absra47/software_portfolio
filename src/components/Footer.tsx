import { Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export default function Footer() {
  return (
    <footer className="px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-mist">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-signal transition-colors">
            <GithubIcon size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-signal transition-colors">
            <LinkedinIcon size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-signal transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
