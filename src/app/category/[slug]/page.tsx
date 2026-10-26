import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/articlecard";
import { categories, getByCategory, getCategory } from "@/data/articles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Section not found" };
  return {
    title: category.label,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const stories = getByCategory(category.slug);
  const [feature, ...rest] = stories;

  return (
    <div>
      <header className="max-w-3xl border-b border-black pb-6">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">Section</p>
        <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-black sm:text-5xl">{category.label}</h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-500">{category.description}</p>
      </header>

      <div className="mt-10 space-y-8">
        {feature ? <ArticleCard article={feature} variant="feature" /> : null}
        {rest.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
