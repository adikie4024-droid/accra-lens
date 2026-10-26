"use client";

import { FormEvent, useState } from "react";

const topics = ["News tip", "Correction", "Partnership", "General"] as const;

type Fields = {
  name: string;
  email: string;
  topic: (typeof topics)[number];
  message: string;
};

const empty: Fields = {
  name: "",
  email: "",
  topic: "General",
  message: "",
};

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Partial<Record<keyof Fields, string>> = {};
    if (fields.name.trim().length < 2) next.name = "Tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (fields.message.trim().length < 12) {
      next.message = "Write a message of at least a sentence.";
    }
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8" role="status">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">Message received</p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-black">Thank you, {fields.name.trim()}.</h2>
        <p className="mt-3 leading-relaxed text-neutral-500">
          The desk has your note about {fields.topic.toLowerCase()}. We read every message sent to the newsroom.
        </p>
        <button
          type="button"
          className="mt-6 cursor-pointer text-sm font-medium text-black underline underline-offset-4"
          onClick={() => {
            setSent(false);
            setFields(empty);
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm text-black outline-none focus:border-black";

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-neutral-200 p-6 sm:p-8" noValidate>
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-black">
            Name
          </label>
          <input
            id="name"
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            autoComplete="name"
            className={fieldClass}
          />
          {errors.name ? <p className="mt-2 text-sm text-red-700">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-black">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            autoComplete="email"
            className={fieldClass}
          />
          {errors.email ? <p className="mt-2 text-sm text-red-700">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="topic" className="mb-2 block text-sm font-medium text-black">
            Topic
          </label>
          <select
            id="topic"
            value={fields.topic}
            onChange={(event) => update("topic", event.target.value as Fields["topic"])}
            className={fieldClass}
          >
            {topics.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-black">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            value={fields.message}
            onChange={(event) => update("message", event.target.value)}
            className={fieldClass}
          />
          {errors.message ? <p className="mt-2 text-sm text-red-700">{errors.message}</p> : null}
        </div>
        <button
          type="submit"
          className="cursor-pointer rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
