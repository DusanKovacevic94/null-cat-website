import type { ContactFormCopy } from "@/components/ContactForm";

export const locales = ["en", "sr"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const dictionaries = {
  en: {
    metadata: {
      title: "Null Cat | IT Automation, Web Development, AI Integration",
      description:
        "Null Cat builds practical IT solutions for startups and SMBs: automation, web platforms, AI integrations, and data digitalisation.",
    },
    nav: {
      services: "Services",
      process: "Process",
      contact: "Contact",
      cta: "Book a Call",
      homeLabel: "Null Cat home",
      languageLabel: "Switch language",
    },
    hero: {
      eyebrow: "IT systems for teams that need execution, not noise.",
      title: "IT systems that remove busywork.",
      copy:
        "Null Cat builds automation, web platforms, AI integrations, and data workflows for startups and SMBs.",
      secondaryCta: "View Services",
      panelEyebrow: "Live delivery map",
      panelTitle: "From broken workflow to shipped system.",
      panelLines: ["Problem intake", "Architecture pass", "Build sprint", "Launch and harden"],
      metrics: [
        { value: "04", label: "Core lanes" },
        { value: "24/7", label: "Automation mindset" },
        { value: "01", label: "Technical partner" },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Broad IT capability, focused around business bottlenecks.",
      consoleEyebrow: "Capability console",
      consoleTitle: "Choose the workstream. Null Cat turns it into a usable system.",
      previewLabel: "Active capability",
      items: [
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
      ],
    },
    process: {
      eyebrow: "How work moves",
      title: "Start with the constraint. Build only what earns its place.",
      copy:
        "Null Cat is built for ambiguous IT problems: the spreadsheet that became a business process, the SaaS tools that do not talk, the AI idea that needs a useful implementation, or the MVP that needs to become real enough for customers.",
      steps: [
        "Map the real workflow and business constraint.",
        "Choose the smallest technical path that solves it.",
        "Build the interface, automation, or integration.",
        "Measure the result and harden what becomes critical.",
      ],
    },
    outcomes: {
      eyebrow: "Example outcomes",
      title: "Work that makes operations faster, clearer, or easier to scale.",
      items: [
        "Internal tools that remove repetitive admin work.",
        "Startup MVPs with room to evolve.",
        "AI-assisted document and data pipelines.",
        "Legacy process cleanup without operational drama.",
        "API integrations between SaaS, CRMs, finance, and custom systems.",
        "Ongoing technical partnership for teams without a full in-house bench.",
      ],
    },
    contact: {
      eyebrow: "Book a call",
      title: "Bring the workflow, product idea, or integration problem.",
      copy:
        "Send the practical details. Null Cat will reply with the next step: a discovery call, a technical audit, or a scoped build proposal.",
    },
    footer: "Automation, web development, AI integration, and data digitalisation.",
    form: {
      name: "Name",
      email: "Email",
      company: "Company",
      projectType: "Project type",
      message: "Message",
      selectPlaceholder: "Select one",
      messagePlaceholder: "What should be built, automated, integrated, or repaired?",
      submit: "Book a Call",
      submitting: "Sending...",
      fallbackError: "Could not send the message.",
      validationError: "Check the form and try again.",
      success: "Message sent. Null Cat will reply with the next practical step.",
      projectTypes: {
        automation: "Automation",
        web_development: "Web development",
        ai_integration: "AI integration",
        data_digitalisation: "Data digitalisation",
        startup_partner: "Startup technical partner",
        not_sure: "Not sure yet",
      },
    } satisfies ContactFormCopy,
  },
  sr: {
    metadata: {
      title: "Null Cat | IT automatizacija, web razvoj, AI integracije",
      description:
        "Null Cat razvija praktična IT rešenja za startape i mala i srednja preduzeća: automatizaciju procesa, web platforme, AI integracije i digitalizaciju podataka.",
    },
    nav: {
      services: "Usluge",
      process: "Proces",
      contact: "Kontakt",
      cta: "Zakaži poziv",
      homeLabel: "Null Cat početna",
      languageLabel: "Promeni jezik",
    },
    hero: {
      eyebrow: "IT sistemi za timove kojima treba konkretna isporuka, ne prazna priča.",
      title: "IT sistemi koji uklanjaju suvišan rad.",
      copy:
        "Null Cat razvija automatizacije, web platforme, AI integracije i tokove podataka za startape i mala i srednja preduzeća.",
      secondaryCta: "Pogledaj usluge",
      panelEyebrow: "Plan isporuke",
      panelTitle: "Od neuređenog procesa do stabilnog sistema.",
      panelLines: ["Analiza problema", "Tehničko rešenje", "Razvojni sprint", "Puštanje u rad i stabilizacija"],
      metrics: [
        { value: "04", label: "Oblasti rada" },
        { value: "24/7", label: "Procesni pristup" },
        { value: "01", label: "Tehnički partner" },
      ],
    },
    services: {
      eyebrow: "Usluge",
      title: "Širok IT kapacitet usmeren na zastoje u poslovanju.",
      consoleEyebrow: "Pregled usluga",
      consoleTitle: "Izaberite oblast rada. Null Cat je pretvara u upotrebljivo rešenje.",
      previewLabel: "Odabrana usluga",
      items: [
        {
          title: "Automatizacija procesa",
          copy: "Zamenite ručni rad pouzdanim automatizacijama, internim alatima i integracijama koje smanjuju operativno opterećenje.",
        },
        {
          title: "Web razvoj",
          copy: "Razvijte održive web sajtove, aplikacije, dashboarde, portale i korisničke interfejse sa zdravom tehničkom osnovom.",
        },
        {
          title: "AI integracije",
          copy: "Uvedite AI tamo gde donosi realnu vrednost: asistente za podršku, obradu dokumenata, tokove za sadržaj i izvlačenje podataka.",
        },
        {
          title: "Digitalizacija podataka",
          copy: "Pretvorite tabele, PDF dokumente, inboxe i papirne procese u strukturisane podatke i sisteme koje tim zaista koristi.",
        },
      ],
    },
    process: {
      eyebrow: "Način rada",
      title: "Krećemo od stvarnog problema. Gradimo samo ono što ima jasnu svrhu.",
      copy:
        "Null Cat rešava nejasne IT probleme: tabelu koja je prerasla u poslovni proces, SaaS alate koji nisu povezani, AI ideju kojoj treba korisna primena ili MVP koji treba dovesti do prvih korisnika.",
      steps: [
        "Mapiramo stvarni tok rada i poslovni problem.",
        "Biramo najkraći tehnički put do rešenja.",
        "Razvijamo interfejs, automatizaciju ili integraciju.",
        "Merimo rezultat i stabilizujemo ono što postane važno za rad.",
      ],
    },
    outcomes: {
      eyebrow: "Primeri rezultata",
      title: "Rešenja koja ubrzavaju rad, uvode red i olakšavaju rast.",
      items: [
        "Interni alati koji uklanjaju ponavljajući administrativni posao.",
        "MVP rešenja za startape, postavljena tako da mogu da rastu.",
        "AI tokovi za obradu dokumenata i podataka.",
        "Sređivanje zastarelih procesa bez prekida u radu.",
        "API integracije između SaaS alata, CRM sistema, finansija i prilagođenih aplikacija.",
        "Stalna tehnička podrška za timove bez kompletnog internog IT tima.",
      ],
    },
    contact: {
      eyebrow: "Zakaži poziv",
      title: "Pošaljite proces, ideju za proizvod ili problem sa integracijom.",
      copy:
        "Pošaljite konkretne detalje. Null Cat će odgovoriti predlogom sledećeg koraka: uvodnim pozivom, tehničkom analizom ili okvirnim obimom rada.",
    },
    footer: "Automatizacija procesa, web razvoj, AI integracije i digitalizacija podataka.",
    form: {
      name: "Ime",
      email: "Email",
      company: "Kompanija",
      projectType: "Tip projekta",
      message: "Poruka",
      selectPlaceholder: "Izaberi",
      messagePlaceholder: "Šta treba razviti, automatizovati, povezati ili srediti?",
      submit: "Zakaži poziv",
      submitting: "Slanje...",
      fallbackError: "Poruka nije mogla da se pošalje.",
      validationError: "Proverite formu i pokušajte ponovo.",
      success: "Poruka je poslata. Null Cat će odgovoriti sa konkretnim sledećim korakom.",
      projectTypes: {
        automation: "Automatizacija procesa",
        web_development: "Web razvoj",
        ai_integration: "AI integracija",
        data_digitalisation: "Digitalizacija podataka",
        startup_partner: "Tehnički partner za startap",
        not_sure: "Nisam siguran",
      },
    } satisfies ContactFormCopy,
  },
};
