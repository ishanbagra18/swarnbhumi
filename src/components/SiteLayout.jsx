import React from 'react';
import { NavLink } from 'react-router-dom';
import { address, brand, emails, phones } from '../data/siteContent';

const linkClass = ({ isActive }) =>
  [
    'rounded-full px-4 py-2 text-sm font-medium transition duration-200',
    isActive ? 'bg-amber-300 text-slate-950 shadow-[0_10px_30px_rgba(217,164,74,0.24)]' : 'text-stone-300 hover:bg-white/5 hover:text-stone-50',
  ].join(' ');

export function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(217,164,74,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(97,124,167,0.16),_transparent_30%),linear-gradient(180deg,#07101b_0%,#0b1625_52%,#08111d_100%)] text-stone-100">
      <header className="sticky top-0 z-30 border-b border-amber-300/15 bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
          <NavLink to="/about" end className="flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-amber-200 to-amber-500 text-sm font-black tracking-[0.18em] text-slate-950 shadow-[0_16px_35px_rgba(217,164,74,0.3)]">
              SB
            </span>
            <span>
              <strong className="block text-base tracking-wide text-stone-50">{brand.name}</strong>
              <small className="block text-xs uppercase tracking-[0.3em] text-stone-400">Premium Rajasthan Real Estate</small>
            </span>
          </NavLink>

          <div className="flex flex-wrap items-center gap-2">
            <NavLink to="/about" className={linkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
            <NavLink to="/photos" className={linkClass}>
              Photos &amp; Updates
            </NavLink>
          </div>
        </nav>
      </header>

      {children}

      <footer className="mx-auto w-full max-w-7xl px-4 pb-8 pt-4 md:px-6">
        <div className="grid gap-6 rounded-[2rem] border border-amber-300/15 bg-slate-950/80 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] md:grid-cols-3">
          <div>
            <strong className="block text-lg text-stone-50">{brand.name}</strong>
            <p className="mt-3 max-w-sm text-sm leading-7 text-stone-300">{address}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-amber-300">Phones</p>
            <div className="mt-3 grid gap-2 text-sm">
              {phones.map((phone) => (
                <a key={phone} className="text-stone-200 transition hover:text-amber-200" href={`tel:${phone}`}>
                  {phone}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-amber-300">Emails</p>
            <div className="mt-3 grid gap-2 text-sm">
              {emails.map((email) => (
                <a key={email} className="text-stone-200 transition hover:text-amber-200" href={`mailto:${email}`}>
                  {email}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}