import { notFound } from 'next/navigation';
import CategorySamples from '@/components/CategorySamples';
import { cakeSamplesByCategory, getCategoryBySlug, menuCategories } from '@/data/menuCatalog';

export function generateStaticParams() {
  return menuCategories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return {
      title: 'Category Not Found | Fairy Cakes'
    };
  }

  return {
    title: `${category.title} | Fairy Cakes`,
    description: `Explore ${category.title} at Fairy Cakes with sample designs, sizes, and pricing.`
  };
}

export default function MenuCategoryPage({ params }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const samples = cakeSamplesByCategory[params.slug] || [];

  return (
    <div className="space-y-6">
      <section className="section-card">
        <p className="text-sm font-semibold uppercase tracking-wide text-yellow-500">Menu Category</p>
        <h1 className="text-4xl font-bold">{category.title}</h1>
        <p className="mt-3 max-w-3xl text-stone-700 dark:text-stone-200">{category.description}</p>
      </section>

      <CategorySamples categoryTitle={category.title} samples={samples} />
    </div>
  );
}
