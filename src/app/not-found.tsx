import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl py-16 text-center">
      <p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">404</p>
      <h1 className="mt-3 font-serif text-4xl font-bold text-black">This story is not on the desk</h1>
      <p className="mt-4 text-neutral-500">The page may have moved, or the address may be missing a letter.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
      >
        Back to the front page
      </Link>
    </div>
  );
}
