import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid items-center gap-8 p-6 shadow-lg rounded-2xl bg-gradient-to-r from-yellow-100 via-green-100 to-green-50 md:grid-cols-2 md:p-10">
      <div className="fade-in-up">
        <p className="text-sm font-semibold tracking-wide text-green-600 uppercase">
          Welcome to Fairy Cakes
        </p>
        <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl">
          Handmade Cakes for Every Sweet Moment.
        </h1>
        <p className="max-w-xl mt-4 text-stone-700">
          A cozy Perth bakery crafting cakes with love for birthdays, weddings,
          and all special occasions.
        </p>
        <Link
          href="/order"
          className="inline-flex px-6 py-3 mt-6 font-semibold text-white transition-all duration-300 bg-green-600 rounded-full hover:scale-105 hover:bg-green-700"
        >
          Order a Cake
        </Link>
      </div>

      <div className="relative overflow-hidden shadow-lg rounded-2xl fade-in-up stagger-2">
        <Image
          src="/images/hero/hero-bakery.JPG"
          alt="Bakery cake display"
          width={900}
          height={700}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </section>
  );
}
