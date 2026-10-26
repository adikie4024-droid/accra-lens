import type { Metadata } from "next";
import { ContactForm } from "@/components/contactform";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to the Accra Lens newsroom with a tip, a correction or a question.",
};

export default function ContactPage() {
  return (
    <div className="grid items-start gap-12 lg:grid-cols-5">
      <header className="lg:col-span-2">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">Contact</p>
        <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Write to the desk
        </h1>
        <p className="mt-4 leading-relaxed text-neutral-500">
          Tips, corrections and letters from readers all land in the same newsroom. Tell us what we missed, and
          where.
        </p>
        <dl className="mt-8 space-y-5 text-sm">
          <div>
            <dt className="font-medium text-black">Newsroom</dt>
            <dd className="mt-1 text-neutral-500">
              Accra Lens
              <br />
              Airport City
              <br />
              Accra, Ghana
            </dd>
          </div>
          <div>
            <dt className="font-medium text-black">Email</dt>
            <dd className="mt-1 text-neutral-500">newsroom@accralens.com</dd>
          </div>
          <div>
            <dt className="font-medium text-black">Desk hours</dt>
            <dd className="mt-1 text-neutral-500">Monday to Friday, 8:00 to 18:00 GMT</dd>
          </div>
        </dl>
      </header>
      <div className="lg:col-span-3">
        <ContactForm />
      </div>
    </div>
  );
}
