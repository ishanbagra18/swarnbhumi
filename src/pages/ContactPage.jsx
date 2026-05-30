import React from 'react';
import { ClockIcon, MailIcon, MapIcon, PhoneIcon } from '../components/Icons';
import { address, contactItems } from '../data/siteContent';

const iconMap = {
  map: MapIcon,
  clock: ClockIcon,
  phone: PhoneIcon,
  mail: MailIcon,
};

export function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 md:py-12">
      <section className="rounded-4xl border border-amber-300/20 bg-slate-950/80 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] md:p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Get in touch</p>
        <h1 className="mt-4 font-serif text-4xl text-stone-50 md:text-6xl">Contact Swarnbhoomi Properties</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300 md:text-lg">
          Call, email, or visit us for premium property guidance around Jaipur and the surrounding belt.
        </p>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-4 md:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <article
                key={item.label}
                className="rounded-[1.75rem] border border-amber-300/15 bg-slate-950/75 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-amber-200">
                    <Icon />
                  </span>
                  {item.badge ? (
                    <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
                      Open 24 Hours
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-4 font-serif text-2xl text-stone-50">{item.label}</h3>

                {Array.isArray(item.value) ? (
                  <div className="mt-4 grid gap-2">
                    {item.value.map((entry) => (
                      <a
                        key={entry}
                        href={item.label === 'Phone' ? `tel:${entry}` : `mailto:${entry}`}
                        className="text-sm font-medium text-stone-300 transition hover:text-amber-200"
                      >
                        {entry}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-sm leading-7 text-stone-300">{item.value}</p>
                )}
              </article>
            );
          })}

          <article className="rounded-[1.75rem] border border-amber-300/15 bg-slate-950/75 p-6 md:col-span-2">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Address</p>
            <h3 className="mt-3 font-serif text-2xl text-stone-50">Bhambori Rd, Deendayal Nagar</h3>
            <p className="mt-3 text-sm leading-7 text-stone-300">{address}</p>
          </article>
        </div>

        <article className="overflow-hidden rounded-4xl border border-amber-300/15 bg-slate-950/75 shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
          <div className="border-b border-amber-300/10 p-6">
            <h3 className="font-serif text-2xl text-stone-50">Find us on Google Maps</h3>
            <p className="mt-2 text-sm leading-7 text-stone-300">Bhambori Rd, Deendayal Nagar, Kalwar, Bhambori, Rajasthan 303706</p>
          </div>
          <div className="min-h-105">
            <iframe
              title="Swarnbhoomi Properties map"
              src="https://www.google.com/maps?q=Swarnbhoomi+Properties,+Kalwar+Road,+Bhambori,+Jaipur&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full min-h-105 border-0"
            />
          </div>
        </article>
      </section>
    </div>
  );
}