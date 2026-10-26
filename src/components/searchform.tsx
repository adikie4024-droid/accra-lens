export function SearchForm({
  defaultValue = "",
  id,
  className = "",
}: {
  defaultValue?: string;
  id: string;
  className?: string;
}) {
  return (
    <form action="/search" method="get" role="search" className={className}>
      <label htmlFor={id} className="sr-only">
        Search news
      </label>
      <div className="relative">
        <input
          id={id}
          name="q"
          type="search"
          defaultValue={defaultValue}
          placeholder="Search news"
          className="w-full rounded-full border border-neutral-300 bg-white py-2.5 pr-11 pl-4 text-sm text-black outline-none placeholder:text-neutral-400 focus:border-black"
        />
        <button
          type="submit"
          aria-label="Search"
          className="absolute top-1/2 right-1.5 -translate-y-1/2 cursor-pointer rounded-full p-1.5 text-neutral-500 hover:text-black"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.75" />
            <path d="M16 16.5L20 20.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </form>
  );
}
