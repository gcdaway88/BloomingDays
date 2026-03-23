"use client";

import { useState } from "react";

interface InquiryFormProps {
  prefilledArrangement?: string;
}

export default function InquiryForm({ prefilledArrangement = "" }: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 rounded-xl bg-surface-container text-center flex flex-col items-center gap-4">
        <span className="material-symbols-outlined text-5xl text-primary">check_circle</span>
        <h3 className="font-headline text-2xl font-bold text-on-surface">Message Sent!</h3>
        <p className="text-on-surface-variant">
          Thank you! We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-primary font-bold text-sm mt-2 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot anti-spam field */}
      <input
        type="text"
        name="_gotcha"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="border border-outline-variant rounded-lg px-4 py-3 bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="border border-outline-variant rounded-lg px-4 py-3 bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">
          Phone (optional)
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="+63 912 345 6789"
          className="border border-outline-variant rounded-lg px-4 py-3 bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">
          Arrangement (optional)
        </label>
        <input
          type="text"
          name="arrangement"
          defaultValue={prefilledArrangement}
          placeholder="Which arrangement are you interested in?"
          className="border border-outline-variant rounded-lg px-4 py-3 bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about the occasion, your preferences, and any special requests..."
          className="border border-outline-variant rounded-lg px-4 py-3 bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-error text-sm">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex items-center justify-center gap-2 primary-gradient text-on-primary font-bold px-8 py-4 rounded-xl editorial-shadow hover:opacity-90 transition-opacity disabled:opacity-60 cursor-pointer"
      >
        {status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            Send Inquiry{" "}
            <span className="material-symbols-outlined">send</span>
          </>
        )}
      </button>
    </form>
  );
}
