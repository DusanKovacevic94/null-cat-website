"use client";

import { useState } from "react";

type Service = {
  title: string;
  copy: string;
};

type ServiceConsoleProps = {
  services: Service[];
  eyebrow: string;
  title: string;
  previewLabel: string;
};

export function ServiceConsole({ services, eyebrow, title, previewLabel }: ServiceConsoleProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-lg border border-white/10 bg-ink/70 p-3 backdrop-blur-xl">
        {services.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={service.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`group flex w-full items-center gap-4 rounded-md border px-4 py-4 text-left transition ${
                isActive
                  ? "border-pine-300/60 bg-pine-400/12 text-frost"
                  : "border-transparent text-steel hover:border-white/10 hover:bg-white/[0.04] hover:text-frost"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                  isActive ? "bg-pine-300 text-ink" : "bg-white/8 text-pine-300"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block text-base font-semibold">{service.title}</span>
                <span className="mt-1 block text-sm leading-6 text-steel">{service.copy}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="console-panel relative overflow-hidden rounded-lg border border-pine-300/20 bg-coal/78 p-6 shadow-glow backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pine-300 to-transparent" />
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-pine-300">{eyebrow}</p>
        <h3 className="mt-5 max-w-xl text-3xl font-semibold text-frost sm:text-4xl">{title}</h3>

        <div className="mt-8 rounded-lg border border-white/10 bg-black/25 p-5">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-steel">{previewLabel}</span>
            <span className="h-2.5 w-2.5 rounded-full bg-pine-300 shadow-[0_0_18px_rgba(48,212,180,0.85)]" />
          </div>
          <h4 className="mt-5 text-2xl font-semibold text-frost">{active.title}</h4>
          <p className="mt-4 max-w-2xl leading-7 text-steel">{active.copy}</p>

          <div className="mt-7 grid gap-3">
            {[76, 54, 88].map((width, index) => (
              <div key={`${active.title}-${width}`} className="h-2 overflow-hidden rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-pine-700 via-pine-400 to-pine-300 transition-all duration-500"
                  style={{ width: `${Math.max(22, width - activeIndex * 5 + index * activeIndex * 3)}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
