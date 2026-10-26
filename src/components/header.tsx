"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/articles";
import { SearchForm } from "@/components/searchform";

function LensMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
      <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="3.2" fill="currentColor" />
    </svg>
  );
}

function linkClass(active: boolean) {
  return `text-[13px] font-medium tracking-[0.14em] uppercase transition-colors ${
    active ? "text-black" : "text-neutral-500 hover:text-black"
  }`;
}

export function Header({ today }: { today: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-black bg-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center justify-between pt-3 text-[11px] tracking-[0.16em] text-neutral-500 uppercase">
            <p>Accra, Ghana</p>
            <p>{today}</p>
          </div>
          <div className="flex items-center gap-4 py-4 lg:gap-8">
            <Link href="/" className="flex items-center gap-2.5 text-black" aria-label="Accra Lens home">
              <LensMark />
              <span className="font-serif text-[1.35rem] font-semibold tracking-[0.12em] sm:text-[1.85rem] sm:tracking-[0.16em]">
                ACCRA LENS
              </span>
            </Link>
            <nav className="ml-auto hidden items-center gap-5 xl:flex" aria-label="Sections">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href} className={linkClass(active)} aria-current={active ? "page" : undefined}>
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <SearchForm id="search-desktop" className="hidden w-52 shrink-0 xl:block" />
            <button
              type="button"
              className="ml-auto inline-flex cursor-pointer items-center justify-center rounded-full border border-neutral-300 p-2 text-black xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
          <div className="pb-4 xl:hidden">
            <SearchForm id="search-mobile" />
          </div>
        </div>
      </header>

      {open ? (
        <div id="mobile-nav" className="fixed inset-0 z-50 overflow-y-auto bg-white xl:hidden">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link href="/" className="flex items-center gap-2 font-serif text-xl font-semibold tracking-[0.14em]">
              <LensMark />
              ACCRA LENS
            </Link>
            <button
              type="button"
              className="cursor-pointer rounded-full border border-neutral-300 p-2"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="mx-auto max-w-6xl px-5 pb-10" aria-label="Mobile sections">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block border-b border-neutral-200 py-4 font-serif text-3xl font-bold ${
                    active ? "text-black" : "text-neutral-700"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </>
  );
}
