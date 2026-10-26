import Link from "next/link";
import { categories } from "@/data/articles";
import { NewsletterForm } from "@/components/newsletterform";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-black">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-semibold tracking-[0.14em]">ACCRA LENS</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-500">
            A modern Ghanaian magazine. Reported from Accra, read wherever the cedi has a signal.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-neutral-500 uppercase">Sections</p>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/category/${category.slug}`} className="text-neutral-700 hover:text-black">
                  {category.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/about" className="text-neutral-700 hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-neutral-700 hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <NewsletterForm variant="inline" />
      </div>
      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Accra Lens. All rights reserved.</p>
          <p>Photography via Unsplash. Stories written for the Accra desk.</p>
        </div>
      </div>
    </footer>
  );
}
