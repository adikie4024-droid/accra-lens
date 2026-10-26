import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/data/articles";
import { categoryLabel, formatDate } from "@/data/articles";

export function ArticleCard({
  article,
  variant = "card",
}: {
  article: Article;
  variant?: "card" | "feature";
}) {
  const feature = variant === "feature";

  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:shadow-md">
      <Link
        href={`/article/${article.slug}`}
        className={`flex h-full flex-col ${feature ? "md:grid md:grid-cols-2" : ""}`}
      >
        <div
          className={`relative overflow-hidden bg-neutral-100 ${
            feature ? "aspect-[16/10] md:aspect-auto md:min-h-[320px]" : "aspect-[3/2]"
          }`}
        >
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes={
              feature
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
            className="object-cover transition duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className={`flex flex-1 flex-col ${feature ? "justify-center p-6 sm:p-8" : "p-5"}`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
            {categoryLabel(article.category)}
          </p>
          <h3
            className={`mt-2 font-serif font-bold leading-tight text-black ${
              feature ? "text-3xl sm:text-4xl" : "text-[1.35rem]"
            }`}
          >
            {article.title}
          </h3>
          <p
            className={`mt-3 leading-relaxed text-neutral-500 ${
              feature ? "text-base" : "line-clamp-3 text-sm"
            }`}
          >
            {article.excerpt}
          </p>
          <p className="mt-4 text-xs text-neutral-500">
            {article.author}
            <span aria-hidden="true"> · </span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </p>
        </div>
      </Link>
    </article>
  );
}
