import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/articlecard";
import { categoryLabel, formatDate, getArticle, getArticles, getRelated } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Story not found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelated(article.slug, 3);

  return (
    <article>
      <header className="mx-auto max-w-3xl">
        <Link
          href={`/category/${article.category}`}
          className="text-[11px] font-semibold tracking-[0.18em] text-neutral-500 uppercase hover:text-black"
        >
          {categoryLabel(article.category)}
        </Link>
        <h1 className="mt-3 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-neutral-500 sm:text-xl">{article.excerpt}</p>
        <div className="mt-6 flex flex-col gap-2 border-y border-neutral-200 py-4 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-medium text-black">{article.author}</span>
            <span className="text-neutral-400">, {article.role}</span>
          </p>
          <p>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span aria-hidden="true"> · </span>
            {article.readTime}
            <span aria-hidden="true"> · </span>
            {article.location}
          </p>
        </div>
      </header>

      <figure className="mx-auto mt-8 max-w-5xl">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-neutral-100">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 960px"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 text-xs text-neutral-400">
          {article.imageAlt}. Photograph: {article.imageCredit}.
        </figcaption>
      </figure>

      <div className="mx-auto mt-10 max-w-3xl space-y-6 font-serif text-lg leading-8 text-neutral-800">
        {article.body.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-16" aria-labelledby="related-heading">
        <div className="mb-8 flex items-end justify-between border-b border-black pb-3">
          <h2 id="related-heading" className="font-serif text-3xl font-bold tracking-tight">
            Related stories
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((story) => (
            <ArticleCard key={story.slug} article={story} />
          ))}
        </div>
      </section>
    </article>
  );
}
