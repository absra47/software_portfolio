"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "your site"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const inputClasses =
    "w-full bg-ink border border-line rounded px-4 py-3 text-sm text-bone placeholder:text-mist focus-visible:border-signal transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="field-label block mb-2">
            Your name
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
            placeholder="Ada Lovelace"
          />
        </div>
        <div>
          <label htmlFor="email" className="field-label block mb-2">
            Your email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="field-label block mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClasses}
          placeholder="Tell me about the project or role..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-signal text-ink font-medium px-5 py-3 rounded hover:brightness-110 transition"
      >
        Open in email app <Send size={16} />
      </button>
      <p className="font-mono text-xs text-mist">
        Submitting opens your email app with this message pre-filled, addressed to{" "}
        {profile.email}.
      </p>
    </form>
  );
}
