import CategoryCard from '@/components/CategoryCard';
import { menuCategories } from '@/data/menuCatalog';

export const metadata = {
  title: 'Menu | Fairy Cakes',
  description: 'Browse Fairy Cakes menu categories including birthday, wedding, cupcakes, and custom cake designs.'
};

export default function MenuPage() {
  return (
    <div className="space-y-6">
      <section className="section-card">
        <p className="text-sm font-semibold uppercase tracking-wide text-rose-400">Our Menu</p>
        <h1 className="text-4xl font-bold">Handmade Cake Categories</h1>
        <p className="mt-3 max-w-3xl text-stone-700 dark:text-stone-200">
          Choose a category to view real cake samples with size, price, and cart actions.
        </p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {menuCategories.map((category) => (
          <CategoryCard key={category.slug} category={{ ...category, href: `/menu/${category.slug}` }} />
        ))}
      </section>
    </div>
  );
}
