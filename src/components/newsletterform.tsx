"use client";

import { FormEvent, useId, useState } from "react";

export function NewsletterForm({ variant = "panel" }: { variant?: "panel" | "inline" }) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Enter a valid email address.");
      setDone("");
      return;
    }
    setError("");
    setDone(value);
    setEmail("");
  }

  if (variant === "inline") {
    return (
      <div>
        <h2 className="font-serif text-xl font-bold text-black">The briefing</h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500">
          Weekday notes from the Accra desk, short enough to read with coffee.
        </p>
        {done ? (
          <p className="mt-4 text-sm text-black" role="status">
            {done} is on the list. Welcome to the briefing.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-4 space-y-2">
            <label htmlFor={id} className="sr-only">
              Email address
            </label>
            <input
              id={id}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              autoComplete="email"
              className="w-full rounded-full border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-black"
            />
            {error ? <p className="text-sm text-red-700">{error}</p> : null}
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <section className="rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-10 sm:px-10">
      <p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">Newsletter</p>
      <h2 className="mt-2 max-w-xl font-serif text-3xl font-bold tracking-tight text-black sm:text-4xl">
        The morning briefing
      </h2>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-500">
        One weekday email. The stories that moved Accra and the rest of Ghana, written without the noise.
      </p>
      {done ? (
        <p className="mt-6 max-w-xl text-base text-black" role="status">
          Thank you. {done} is signed up for the Accra Lens briefing.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
          <label htmlFor={id} className="sr-only">
            Email address
          </label>
          <input
            id={id}
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            autoComplete="email"
            className="w-full rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm outline-none focus:border-black"
          />
          <button
            type="submit"
            className="cursor-pointer rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Subscribe
          </button>
        </form>
      )}
      {error ? <p className="mt-3 text-sm text-red-700">{error}</p> : null}
    </section>
  );
}
