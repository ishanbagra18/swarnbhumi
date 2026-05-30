import React from 'react';
import { clientNotes, galleryItems, updates } from '../data/siteContent';

export function PhotosPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 md:py-12">
      <section className="rounded-4xl border border-amber-300/20 bg-slate-950/80 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] md:p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Live feed</p>
        <h1 className="mt-4 font-serif text-4xl text-stone-50 md:text-6xl">Photos &amp; Updates</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300 md:text-lg">
          A polished snapshot of current listings, site visits, and property announcements.
        </p>
      </section>

      <section className="mt-6 grid auto-rows-[220px] gap-4 md:grid-cols-2 xl:grid-cols-4 xl:auto-rows-[240px]">
        {galleryItems.map((item) => (
          <article
            key={item.title}
            className={`group relative overflow-hidden rounded-[1.75rem] border border-amber-300/15 bg-slate-950/75 shadow-[0_18px_50px_rgba(0,0,0,0.25)] ${item.size}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs uppercase tracking-[0.32em] text-amber-200">Property Update</p>
              <h3 className="mt-2 font-serif text-2xl text-stone-50">{item.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-7 text-stone-200/90">{item.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-8">
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Updates</p>
          <h2 className="mt-3 font-serif text-3xl text-stone-50">Latest property updates</h2>
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          {updates.map((update) => (
            <article
              key={update}
              className="rounded-[1.75rem] border border-amber-300/15 bg-slate-950/75 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.25)]"
            >
              <span className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
                New
              </span>
              <p className="mt-4 leading-7 text-stone-300">{update}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Comments</p>
          <h2 className="mt-3 font-serif text-3xl text-stone-50">Client comments and notes</h2>
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          {clientNotes.map((note) => (
            <article
              key={note.name}
              className="rounded-[1.75rem] border border-amber-300/15 bg-slate-950/75 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl text-stone-50">{note.name}</h3>
                  <a href={`tel:${note.phone}`} className="mt-2 block text-sm font-semibold text-amber-200 transition hover:text-amber-100">
                    {note.phone}
                  </a>
                </div>
                <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
                  Verified call
                </span>
              </div>
              <p className="mt-4 leading-7 text-stone-300">{note.note}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}