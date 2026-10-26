import type { Metadata } from "next";
import { ArticleCard } from "@/components/articlecard";
import { SearchForm } from "@/components/searchform";
import { getArticles, searchArticles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Search",
  description: "Search Accra Lens stories by word, place, author or section.",
};

type Props = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams;
  const raw = params.q;
  const query = (Array.isArray(raw) ? raw[0] : raw ?? "").trim();
  const results = query ? searchArticles(query) : getArticles();

  return (
    <div>
      <header className="max-w-3xl">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">Search</p>
        <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-black sm:text-5xl">
          {query ? `Results for “${query}”` : "Search the newsroom"}
        </h1>
        <p className="mt-4 text-neutral-500">
          {query
            ? `${results.length} ${results.length === 1 ? "story matches" : "stories match"} your search.`
            : "Try cocoa, Accra, Parliament, cedi or mobile money."}
        </p>
        <SearchForm id="search-page" defaultValue={query} className="mt-6 max-w-xl" />
      </header>

      {results.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="mt-10 rounded-2xl border border-neutral-200 px-6 py-10 text-neutral-500">
          No stories match “{query}”. Try a section name, a city, or a word from a headline.
        </p>
      )}
    </div>
  );
}
