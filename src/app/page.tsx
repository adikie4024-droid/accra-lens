import { HeroStory } from "@/components/herostory";
import { ArticleCard } from "@/components/articlecard";
import { NewsletterForm } from "@/components/newsletterform";
import { getArticles } from "@/data/articles";

export default function HomePage() {
  const stories = getArticles();
  const lead = stories[0];
  const latest = stories.slice(1, 7);

  if (!lead) return null;

  return (
    <div className="space-y-14 sm:space-y-16">
      <HeroStory article={lead} />
      <section aria-labelledby="latest-heading">
        <div className="mb-8 flex items-end justify-between border-b border-black pb-3">
          <h2 id="latest-heading" className="font-serif text-3xl font-bold tracking-tight text-black">
            Latest
          </h2>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-neutral-500 uppercase">Six stories</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <NewsletterForm />
    </div>
  );
}
