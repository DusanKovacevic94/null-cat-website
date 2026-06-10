export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

export type ContactValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; errors: Partial<Record<keyof ContactPayload, string>> };

const projectTypes = new Set([
  "Automation",
  "Web development",
  "AI integration",
  "Data digitalisation",
  "Startup technical partner",
  "Not sure yet",
]);

const budgets = new Set([
  "Under 2k",
  "2k - 5k",
  "5k - 15k",
  "15k+",
  "Need guidance",
]);

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
    budget: clean((source as Record<string, unknown>).budget),
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
  if (!budgets.has(data.budget)) {
    errors.budget = "Choose a budget range.";
  }
  if (data.message.length < 20) {
    errors.message = "Add at least 20 characters about the work.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, data };
}
