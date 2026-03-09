import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="grid items-center gap-8 rounded-2xl bg-gradient-to-r from-rose-100 via-orange-100 to-emerald-50 p-6 shadow-lg md:grid-cols-2 md:p-10">
      <div className="fade-in-up">
        <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">Welcome to Fairy Cakes</p>
        <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl">Handmade Cakes for Every Sweet Moment.</h1>
        <p className="mt-4 max-w-xl text-stone-700">
          A cozy Perth bakery crafting cakes with love for birthdays, weddings, and all special occasions.
        </p>
        <Link
          href="/order"
          className="mt-6 inline-flex rounded-full bg-rose-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-rose-700"
        >
          Order a Cake
        </Link>
      </div>

      <div className="relative overflow-hidden rounded-2xl shadow-lg fade-in-up stagger-2">
        <Image src="/images/hero/hero-bakery.svg" alt="Bakery cake display" width={900} height={700} className="h-full w-full object-cover" priority />
      </div>
    </section>
  );
}
