"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-bone"
        >
          {profile.firstName}
          <span className="text-signal">.</span>
          {profile.lastName}
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-mist">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-bone transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            download
            className="font-mono text-xs uppercase tracking-widest border border-line px-4 py-2 rounded hover:border-signal hover:text-signal transition-colors"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
