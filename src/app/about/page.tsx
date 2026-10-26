import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/articles";

export const metadata: Metadata = {
  title: "About",
  description: "Accra Lens is a Ghanaian digital magazine reported from Accra.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">The newsroom</p>
      <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-black sm:text-5xl">
        A magazine for the Ghana that is actually happening
      </h1>
      <div className="mt-8 space-y-6 font-serif text-lg leading-8 text-neutral-800">
        <p>
          Accra Lens is an online magazine in the city that sets the temperature for the country. We cover the
          cedi and the cocoa season, the mobile-money kiosk and the bill in Parliament, the table in Osu and the
          district that is still waiting on a signature from Accra.
        </p>
        <p>
          The desk is small on purpose. We would rather publish a finished story than a pile of headlines that
          forget the place they came from. Our standard is simple: name the town, name the institution, and write
          so a reader in Tamale and a reader in East Legon can both recognise the country.
        </p>
        <p>
          Business, technology, lifestyle and politics are not four separate Ghanas. A farmgate price shows up in
          a chop bar. A fibre cut shows up in a classroom. A court order shows up in whether anyone believes the
          next budget speech. We follow the thread.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="rounded-2xl border border-neutral-200 p-5 transition hover:shadow-md"
          >
            <h2 className="font-serif text-2xl font-bold text-black">{category.label}</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
