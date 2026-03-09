import Image from 'next/image';
import TestimonialCard from '@/components/TestimonialCard';
import testimonials from '@/data/testimonials';

export const metadata = {
  title: 'About | Fairy Cakes',
  description: 'Learn about Fairy Cakes, a friendly family-style bakery crafting handmade cakes in Perth.'
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="section-card grid items-center gap-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">About Fairy Cakes</p>
          <h1 className="text-4xl font-bold">Handmade Cakes for Every Sweet Moment.</h1>
          <p className="mt-4 text-stone-700 dark:text-stone-200">
            Fairy Cakes is a warm mom-and-pop style bakery based in Perth, Western Australia. We create cakes with
            heart, using quality ingredients and custom decoration tailored for your celebrations.
          </p>
          <p className="mt-3 text-stone-700 dark:text-stone-200">
            From birthdays to weddings, we love helping families, friends, and communities celebrate life with
            beautiful handmade cakes.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <Image src="/images/hero/hero-bakery.svg" alt="Fairy Cakes bakery" width={900} height={700} className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="section-card">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">What Customers Say</p>
        <h2 className="text-3xl font-bold">Loved Across Perth</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
}
