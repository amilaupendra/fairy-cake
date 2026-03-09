import CategoryCard from '@/components/CategoryCard';

const menuCategories = [
  { title: 'Birthday Cakes', image: '/images/cakes/cake-1.svg', description: 'Fun and vibrant cakes for every age.' },
  { title: 'Wedding Cakes', image: '/images/cakes/cake-2.svg', description: 'Elegant tiers made for your special day.' },
  { title: 'Kids Theme Cakes', image: '/images/cakes/cake-3.svg', description: 'Character and color-packed party cakes.' },
  { title: 'Cupcakes', image: '/images/cakes/cake-4.svg', description: 'Hand-piped cupcakes in assorted flavors.' },
  { title: 'Chocolate Cakes', image: '/images/cakes/cake-5.svg', description: 'Rich cocoa cakes with smooth ganache.' },
  { title: 'Fruit Cakes', image: '/images/cakes/cake-6.svg', description: 'Light and fresh cakes with fruit layers.' },
  { title: 'Custom Design Cakes', image: '/images/cakes/cake-7.svg', description: 'Custom creations tailored to your vision.' },
  { title: 'Special Occasion Cakes', image: '/images/cakes/cake-8.svg', description: 'Perfect cakes for milestones and holidays.' }
];

export const metadata = {
  title: 'Menu | Fairy Cakes',
  description: 'Browse Fairy Cakes menu categories including birthday, wedding, cupcakes, and custom cake designs.'
};

export default function MenuPage() {
  return (
    <div className="space-y-6">
      <section className="section-card">
        <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">Our Menu</p>
        <h1 className="text-4xl font-bold">Handmade Cake Categories</h1>
        <p className="mt-3 max-w-3xl text-stone-700 dark:text-stone-200">
          Every cake is handcrafted to order with premium ingredients and a personal touch.
        </p>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {menuCategories.map((category) => (
          <CategoryCard key={category.title} category={category} />
        ))}
      </section>
    </div>
  );
}
