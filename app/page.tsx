import { ContactForm } from "@/components/ContactForm";
import { Logo } from "@/components/Logo";

const services = [
  {
    title: "Automation",
    copy: "Replace brittle manual workflows with reliable scripts, internal tools, and integrations that save operator time.",
  },
  {
    title: "Web development",
    copy: "Ship fast, maintainable marketing sites, dashboards, portals, and product interfaces with clean foundations.",
  },
  {
    title: "AI integration",
    copy: "Add useful AI where it fits: support assistants, document processing, content workflows, and data extraction.",
  },
  {
    title: "Data digitalisation",
    copy: "Turn scattered spreadsheets, PDFs, inboxes, and paper processes into structured systems your team can use.",
  },
];

const process = [
  "Map the real workflow and business constraint.",
  "Choose the smallest technical path that solves it.",
  "Build the interface, automation, or integration.",
  "Measure the result and harden what becomes critical.",
];

const outcomes = [
  "Internal tools that remove repetitive admin work.",
  "Startup MVPs with room to evolve.",
  "AI-assisted document and data pipelines.",
  "Legacy process cleanup without operational drama.",
  "API integrations between SaaS, CRMs, finance, and custom systems.",
  "Ongoing technical partnership for teams without a full in-house bench.",
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" aria-label="Null Cat home">
          <Logo compact />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-steel md:flex">
          <a className="transition hover:text-frost" href="#services">
            Services
          </a>
          <a className="transition hover:text-frost" href="#process">
            Process
          </a>
          <a className="transition hover:text-frost" href="#contact">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden min-h-10 items-center rounded-md border border-pine-400/40 px-4 text-sm font-semibold text-pine-300 transition hover:border-pine-300 hover:bg-pine-400/10 sm:inline-flex"
        >
          Book a Call
        </a>
      </header>

      <section id="top" className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-pine-400/25 bg-pine-400/10 px-4 py-2 text-sm font-semibold text-pine-300">
            IT systems for teams that need execution, not noise.
          </p>
          <h1 className="text-balance max-w-4xl text-4xl font-semibold tracking-normal text-frost sm:text-6xl lg:text-7xl">
            Practical automation, web platforms, AI integrations, and data systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
            Null Cat helps startups and SMBs turn messy technical needs into working software: shipped websites,
            internal tools, connected apps, and workflows that stop leaking time.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-pine-400 px-6 text-sm font-bold text-ink transition hover:bg-pine-300"
            >
              Book a Call
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/12 px-6 text-sm font-bold text-frost transition hover:border-pine-300/60 hover:bg-white/[0.04]"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-[31rem] items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 shadow-glow">
          <div className="absolute inset-6 rounded-[1.5rem] border border-pine-400/10" aria-hidden="true" />
          <Logo className="flex-col gap-5 text-center" />
        </div>
      </section>

      <section id="services" className="border-y border-white/8 bg-white/[0.025]">
        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-pine-300">Services</p>
            <h2 className="mt-4 text-3xl font-semibold text-frost sm:text-4xl">
              Broad IT capability, focused around business bottlenecks.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="rounded-lg border border-white/10 bg-coal/70 p-6">
                <div className="mb-5 h-1 w-12 rounded-full bg-pine-400" />
                <h3 className="text-xl font-semibold text-frost">{service.title}</h3>
                <p className="mt-4 leading-7 text-steel">{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-pine-300">How work moves</p>
          <h2 className="mt-4 text-3xl font-semibold text-frost sm:text-4xl">
            Start with the constraint. Build only what earns its place.
          </h2>
          <p className="mt-5 leading-8 text-steel">
            Null Cat is built for ambiguous IT problems: the spreadsheet that became a business process, the SaaS
            tools that do not talk, the AI idea that needs a useful implementation, or the MVP that needs to become
            real enough for customers.
          </p>
        </div>
        <div className="grid gap-4">
          {process.map((item, index) => (
            <div key={item} className="flex gap-5 rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-pine-400/12 text-sm font-bold text-pine-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="self-center text-lg font-medium text-frost">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-frost text-ink">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-pine-700">Example outcomes</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Work that makes operations faster, clearer, or easier to scale.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <div key={outcome} className="rounded-lg border border-ink/10 bg-white p-5 text-base font-medium">
                {outcome}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.86fr_1.14fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-pine-300">Book a call</p>
          <h2 className="mt-4 text-3xl font-semibold text-frost sm:text-4xl">
            Bring the workflow, product idea, or integration problem.
          </h2>
          <p className="mt-5 leading-8 text-steel">
            Send the practical details. Null Cat will reply with the next step: a discovery call, a technical audit, or
            a scoped build proposal.
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-7">
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <Logo compact />
          <p>Automation, web development, AI integration, and data digitalisation.</p>
        </div>
      </footer>
    </main>
  );
}
