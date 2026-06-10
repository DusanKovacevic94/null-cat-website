"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ContactPayload } from "@/lib/contact";

const projectTypes = [
  "Automation",
  "Web development",
  "AI integration",
  "Data digitalisation",
  "Startup technical partner",
  "Not sure yet",
];

const budgets = ["Under 2k", "2k - 5k", "5k - 15k", "15k+", "Need guidance"];

const emptyForm: ContactPayload = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

type Status =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(emptyForm);
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(
    () =>
      form.name.trim() &&
      form.email.trim() &&
      form.projectType &&
      form.budget &&
      form.message.trim().length >= 20,
    [form],
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Check the form and try again.");
      }

      setForm(emptyForm);
      setStatus({
        type: "success",
        message: "Message sent. Null Cat will reply with the next practical step.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Could not send the message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" value={form.name} onChange={setForm} required />
        <Field label="Email" name="email" type="email" value={form.email} onChange={setForm} required />
      </div>
      <Field label="Company" name="company" value={form.company} onChange={setForm} />
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="Project type"
          name="projectType"
          value={form.projectType}
          options={projectTypes}
          onChange={setForm}
        />
        <SelectField label="Budget range" name="budget" value={form.budget} options={budgets} onChange={setForm} />
      </div>
      <label className="grid gap-2 text-sm font-medium text-frost">
        Message
        <textarea
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          rows={6}
          required
          minLength={20}
          placeholder="What should be built, automated, integrated, or repaired?"
          className="min-h-36 resize-y rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-base text-frost outline-none transition placeholder:text-steel/60 focus:border-pine-300 focus:ring-4 focus:ring-pine-400/10"
        />
      </label>
      <button
        type="submit"
        disabled={!canSubmit || isSubmitting}
        className="inline-flex min-h-12 items-center justify-center rounded-md bg-pine-400 px-6 text-sm font-bold text-ink transition hover:bg-pine-300 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-steel"
      >
        {isSubmitting ? "Sending..." : "Book a Call"}
      </button>
      {status.message ? (
        <p
          className={`text-sm ${
            status.type === "success" ? "text-pine-300" : "text-red-300"
          }`}
          role="status"
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  name: keyof ContactPayload;
  value: string;
  onChange: (value: ContactPayload | ((current: ContactPayload) => ContactPayload)) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-frost">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={(event) => onChange((current) => ({ ...current, [name]: event.target.value }))}
        className="h-12 rounded-md border border-white/10 bg-white/[0.04] px-4 text-base text-frost outline-none transition placeholder:text-steel/60 focus:border-pine-300 focus:ring-4 focus:ring-pine-400/10"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  options,
  onChange,
}: {
  label: string;
  name: keyof ContactPayload;
  value: string;
  options: string[];
  onChange: (value: ContactPayload | ((current: ContactPayload) => ContactPayload)) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-frost">
      {label}
      <select
        name={name}
        value={value}
        required
        onChange={(event) => onChange((current) => ({ ...current, [name]: event.target.value }))}
        className="h-12 rounded-md border border-white/10 bg-white/[0.04] px-4 text-base text-frost outline-none transition focus:border-pine-300 focus:ring-4 focus:ring-pine-400/10"
      >
        <option value="" className="bg-coal text-frost">
          Select one
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-coal text-frost">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
