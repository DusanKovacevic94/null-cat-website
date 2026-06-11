export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

export type ContactValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; errors: Partial<Record<keyof ContactPayload, string>> };

export const projectTypeValues = [
  "automation",
  "web_development",
  "ai_integration",
  "data_digitalisation",
  "startup_partner",
  "not_sure",
] as const;

export type ProjectTypeValue = (typeof projectTypeValues)[number];

export const projectTypeEmailLabels: Record<ProjectTypeValue, string> = {
  automation: "Automation",
  web_development: "Web development",
  ai_integration: "AI integration",
  data_digitalisation: "Data digitalisation",
  startup_partner: "Startup technical partner",
  not_sure: "Not sure yet",
};

const projectTypes = new Set<string>(projectTypeValues);

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactPayload(input: unknown): ContactValidationResult {
  const source = input && typeof input === "object" ? input : {};
  const data = {
    name: clean((source as Record<string, unknown>).name),
    email: clean((source as Record<string, unknown>).email),
    company: clean((source as Record<string, unknown>).company),
    projectType: clean((source as Record<string, unknown>).projectType),
    message: clean((source as Record<string, unknown>).message),
  };

  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (!data.name) errors.name = "Add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Use a valid email address.";
  }
  if (!projectTypes.has(data.projectType)) {
    errors.projectType = "Choose a project type.";
  }
  if (data.message.length < 20) {
    errors.message = "Add at least 20 characters about the work.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data };
}
