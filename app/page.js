import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CategorySlider from '@/components/CategorySlider';
import CakeCard from '@/components/CakeCard';
import TestimonialCard from '@/components/TestimonialCard';
import testimonials from '@/data/testimonials';
import { menuCategories } from '@/data/menuCatalog';

const categories = menuCategories.map((c) => ({ ...c, href: `/menu/${c.slug}` }));

const featured = [
  {
    title: 'Blush Berry Celebration',
    description: 'Vanilla sponge, fresh cream, and berry compote.',
    price: '$85',
    image: '/images/cakes/cake-5.jpg'
  },
  {
    title: 'Classic Chocolate Delight',
    description: 'Rich chocolate layers with silky ganache finish.',
    price: '$78',
    image: '/images/cakes/cake-6.jpg'
  },
  {
    title: 'Mint Garden Wedding Cake',
    description: 'Elegant three-tier cake with handmade floral details.',
    price: '$240',
    image: '/images/cakes/cake-7.jpg'
  }
];

const galleryPreview = ['/images/gallery/gallery-1.svg', '/images/gallery/gallery-2.svg', '/images/gallery/gallery-3.svg', '/images/gallery/gallery-4.svg'];

export default function HomePage() {
  return (
    <div className="space-y-14">
      <Hero />

      <section className="section-card">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-rose-400">Featured Cakes</p>
            <h2 className="text-3xl font-bold">Fresh Favorites from Our Bakery</h2>
          </div>
          <Link href="/menu" className="text-sm font-semibold text-rose-500 hover:text-rose-600">
            View Full Menu
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((cake) => (
            <CakeCard key={cake.title} cake={cake} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">Cake Categories</p>
          <h2 className="text-3xl font-bold">Something Sweet for Every Occasion</h2>
        </div>
        <CategorySlider categories={categories} />
      </section>

      <section className="section-card">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-rose-400">Happy Customers</p>
          <h2 className="text-3xl font-bold">Customer Reviews</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-rose-400">Gallery Preview</p>
            <h2 className="text-3xl font-bold">Handmade Beauty in Every Slice</h2>
          </div>
          <Link href="/gallery" className="text-sm font-semibold text-rose-500 hover:text-rose-600">
            Explore Gallery
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryPreview.map((src) => (
            <div
              key={src}
              className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Image src={src} alt="Cake gallery preview" width={500} height={500} className="h-56 w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="section-card grid items-center gap-6 bg-gradient-to-r from-pink-100 via-rose-50 to-pink-50 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">Instagram Preview</p>
          <h2 className="mt-1 text-3xl font-bold">@fairycakes</h2>
          <p className="mt-3 text-stone-700 dark:text-stone-200">
            Follow our latest cake creations, decorating behind-the-scenes, and customer celebration highlights.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {['/images/gallery/gallery-5.svg', '/images/gallery/gallery-6.svg', '/images/gallery/gallery-7.svg'].map((src) => (
            <Image key={src} src={src} alt="Instagram cake" width={300} height={300} className="h-28 rounded-xl object-cover" />
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-rose-100 p-8 text-center shadow-lg dark:bg-rose-900/40">
        <h2 className="text-3xl font-bold">Ready to Plan Your Cake?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-stone-700 dark:text-stone-200">
          Tell us about your event and we will craft a handmade cake designed for your sweet moment.
        </p>
        <Link
          href="/order"
          className="mt-5 inline-flex rounded-full bg-rose-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-rose-600"
        >
          Order a Cake
        </Link>
      </section>
    </div>
  );
}
