import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/data/articles";
import { categoryLabel, formatDate } from "@/data/articles";

export function HeroStory({ article }: { article: Article }) {
  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="order-2 lg:order-1 lg:col-span-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
          Lead story
          <span aria-hidden="true"> · </span>
          {categoryLabel(article.category)}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-[3.35rem]">
          <Link href={`/article/${article.slug}`} className="underline-offset-4 hover:underline">
            {article.title}
          </Link>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-neutral-500">{article.excerpt}</p>
        <p className="mt-6 text-sm text-neutral-500">
          By <span className="font-medium text-black">{article.author}</span>
          <span aria-hidden="true"> · </span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span aria-hidden="true"> · </span>
          {article.readTime}
        </p>
      </div>
      <Link
        href={`/article/${article.slug}`}
        aria-label={`Open lead story: ${article.title}`}
        className="group order-1 block lg:order-2 lg:col-span-7"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100 shadow-sm sm:aspect-[16/10]">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </Link>
    </article>
  );
}
