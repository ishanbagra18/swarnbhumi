import React from 'react';
import { NavLink } from 'react-router-dom';
import { BuildingIcon, CompassIcon, ShieldIcon } from '../components/Icons';
import { brand, serviceCards } from '../data/siteContent';

const iconMap = {
  compass: CompassIcon,
  shield: ShieldIcon,
  building: BuildingIcon,
};

export function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 md:py-12">
      <section className="grid gap-6 rounded-4xl border border-amber-300/20 bg-slate-950/80 p-6 shadow-2xl lg:grid-cols-2 lg:p-10">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Trusted real estate firm in Rajasthan</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-none text-stone-50 md:text-6xl">
            {brand.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300 md:text-lg">{brand.tagline}</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300">{brand.story}</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300">{brand.mission}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <NavLink
              to="/contact"
              className="rounded-full bg-linear-to-r from-amber-200 to-amber-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(217,164,74,0.28)]"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/photos"
              className="rounded-full border border-amber-300/25 px-5 py-3 text-sm font-bold text-stone-100 transition hover:-translate-y-0.5 hover:bg-white/5"
            >
              View Updates
            </NavLink>
          </div>
        </div>

        <div className="grid gap-4 self-start">
          <div className="rounded-3xl border border-amber-300/15 bg-white/5 p-6">
            <span className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-amber-200">
              24/7 Service
            </span>
            <h2 className="mt-4 font-serif text-3xl text-stone-50">Local expertise with premium presentation.</h2>
            <p className="mt-4 leading-7 text-stone-300">
              We guide buyers toward residential plots, commercial properties, and agricultural land with clarity,
              discretion, and direct access to the Kalwar-Bhambori market.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/4 p-5">
              <strong className="block text-lg text-stone-50">Kalwar-Bhambori</strong>
              <span className="mt-1 block text-sm text-stone-300">Local market focus</span>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/4 p-5">
              <strong className="block text-lg text-stone-50">Legal Support</strong>
              <span className="mt-1 block text-sm text-stone-300">Documentation guidance</span>
            </div>
            
            <div className="rounded-3xl border border-white/10 bg-white/4 p-5">
              <strong className="block text-lg text-stone-50">Rajasthan</strong>
              <span className="mt-1 block text-sm text-stone-300">Strong local expertise</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {serviceCards.map((card) => {
          const Icon = iconMap[card.icon];

          return (
            <article
              key={card.title}
              className="rounded-3xl border border-amber-300/15 bg-slate-950/70 p-6 shadow-xl transition hover:-translate-y-1 hover:border-amber-300/30"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-200">
                <Icon />
              </div>
              <h3 className="font-serif text-2xl text-stone-50">{card.title}</h3>
              <p className="mt-3 leading-7 text-stone-300">{card.text}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
}