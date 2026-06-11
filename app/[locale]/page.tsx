import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { Logo } from "@/components/Logo";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ServiceConsole } from "@/components/ServiceConsole";
import { dictionaries, isLocale, locales, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = dictionaries[locale];

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        sr: "/sr",
      },
    },
  };
}

export default async function LocaleHome({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = dictionaries[locale];
  const alternateLocale: Locale = locale === "en" ? "sr" : "en";

  return (
    <main className="relative isolate overflow-hidden" lang={locale}>
      <div className="site-bg-image" aria-hidden="true" />
      <header className="sticky top-0 z-30 border-b border-white/8 bg-ink/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href={`/${locale}#top`} aria-label={dictionary.nav.homeLabel}>
          <Logo compact />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-steel md:flex">
          <a className="transition hover:text-frost" href="#services">
            {dictionary.nav.services}
          </a>
          <a className="transition hover:text-frost" href="#process">
            {dictionary.nav.process}
          </a>
          <a className="transition hover:text-frost" href="#contact">
            {dictionary.nav.contact}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`/${alternateLocale}`}
            aria-label={dictionary.nav.languageLabel}
            className="inline-flex min-h-10 items-center rounded-md border border-white/10 px-3 text-sm font-semibold text-steel transition hover:border-pine-300/60 hover:text-frost"
          >
            {alternateLocale.toUpperCase()}
          </a>
          <a
            href="#contact"
            className="hidden min-h-10 items-center rounded-md border border-pine-400/40 px-4 text-sm font-semibold text-pine-300 transition hover:border-pine-300 hover:bg-pine-400/10 sm:inline-flex"
          >
            {dictionary.nav.cta}
          </a>
        </div>
        </div>
      </header>

      <section
        id="top"
        className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.04fr_0.96fr]"
      >
        <ScrollReveal className="max-w-5xl">
          <p className="mb-5 inline-flex rounded-full border border-pine-400/30 bg-pine-400/12 px-4 py-2 text-sm font-semibold text-pine-300 shadow-[0_0_28px_rgba(19,185,158,0.16)]">
            {dictionary.hero.eyebrow}
          </p>
          <h1 className="text-balance max-w-5xl text-5xl font-semibold tracking-normal text-frost sm:text-7xl lg:text-8xl">
            {dictionary.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">{dictionary.hero.copy}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-pine-400 px-6 text-sm font-bold text-ink transition hover:bg-pine-300"
            >
              {dictionary.nav.cta}
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/12 px-6 text-sm font-bold text-frost transition hover:border-pine-300/60 hover:bg-white/[0.04]"
            >
              {dictionary.hero.secondaryCta}
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="system-card relative overflow-hidden rounded-lg border border-white/10 bg-coal/72 p-5 shadow-glow backdrop-blur-xl">
            <div className="scan-line" aria-hidden="true" />
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine-300">
                  {dictionary.hero.panelEyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-frost">{dictionary.hero.panelTitle}</h2>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-pine-300/30 bg-pine-400/10">
                <span className="h-2.5 w-2.5 rounded-full bg-pine-300 shadow-[0_0_20px_rgba(48,212,180,0.9)]" />
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {dictionary.hero.panelLines.map((line, index) => (
                <div key={line} className="flex items-center gap-4 rounded-md border border-white/8 bg-white/[0.035] p-4">
                  <span className="text-sm font-semibold text-pine-300">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-medium text-frost">{line}</span>
                  <span className="ml-auto h-1.5 w-16 overflow-hidden rounded-full bg-white/8">
                    <span className="block h-full rounded-full bg-pine-300" style={{ width: `${52 + index * 12}%` }} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {dictionary.hero.metrics.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={index * 80}>
              <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
                <p className="text-3xl font-semibold text-frost">{metric.value}</p>
                <p className="mt-2 text-sm font-medium text-steel">{metric.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="services" className="border-y border-white/8 bg-white/[0.025]">
        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <ScrollReveal className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-pine-300">
              {dictionary.services.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-frost sm:text-4xl">{dictionary.services.title}</h2>
          </ScrollReveal>
          <ScrollReveal className="mt-10" delay={120}>
            <ServiceConsole
              services={dictionary.services.items}
              eyebrow={dictionary.services.consoleEyebrow}
              title={dictionary.services.consoleTitle}
              previewLabel={dictionary.services.previewLabel}
            />
          </ScrollReveal>
        </div>
      </section>

      <section
        id="process"
        className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]"
      >
        <ScrollReveal>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-pine-300">
            {dictionary.process.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-frost sm:text-4xl">{dictionary.process.title}</h2>
          <p className="mt-5 leading-8 text-steel">{renderMarkedText(dictionary.process.copy)}</p>
        </ScrollReveal>
        <div className="grid gap-4">
          {dictionary.process.steps.map((item, index) => (
            <ScrollReveal key={item} delay={index * 90}>
            <div className="group flex gap-5 rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-pine-300/35 hover:bg-pine-400/8">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-pine-400/12 text-sm font-bold text-pine-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="self-center text-lg font-medium text-frost">{item}</p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-y border-white/8 bg-ink/76 text-frost backdrop-blur-xl">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-pine-300">
              {dictionary.outcomes.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{dictionary.outcomes.title}</h2>
          </ScrollReveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {dictionary.outcomes.items.map((outcome, index) => (
              <ScrollReveal key={outcome} delay={index * 55}>
              <div className="min-h-28 rounded-lg border border-white/10 bg-white/[0.045] p-5 text-base font-medium text-frost transition hover:border-pine-300/35 hover:bg-pine-400/8">
                {outcome}
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.86fr_1.14fr]"
      >
        <ScrollReveal>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-pine-300">
            {dictionary.contact.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-frost sm:text-4xl">{dictionary.contact.title}</h2>
          <p className="mt-5 leading-8 text-steel">{dictionary.contact.copy}</p>
        </ScrollReveal>
        <ScrollReveal delay={120} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-7">
          <ContactForm copy={dictionary.form} />
        </ScrollReveal>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <Logo compact />
          <p>{dictionary.footer}</p>
        </div>
      </footer>
    </main>
  );
}

function renderMarkedText(text: string) {
  return text.split(/(\*[^*]+\*)/g).map((part) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <strong key={part} className="font-bold text-pine-300">
          {part.slice(1, -1)}
        </strong>
      );
    }

    return part;
  });
}
