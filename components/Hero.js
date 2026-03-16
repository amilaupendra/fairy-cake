'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const slides = [
  { src: '/images/hero/hero-1.jpg', alt: 'Beautiful birthday cake' },
  { src: '/images/hero/hero-2.jpg', alt: 'Elegant wedding cake' },
  { src: '/images/hero/hero-3.jpg', alt: 'Custom designed cake' },
  { src: '/images/hero/hero-4.jpg', alt: 'Delicious celebration cake' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="grid items-center gap-8 p-6 shadow-lg rounded-2xl bg-gradient-to-r from-pink-100 via-rose-50 to-pink-50 md:grid-cols-2 md:p-10 h-[calc(100vh-8rem)] overflow-hidden">
      <div className="flex flex-col justify-center fade-in-up">
        <p className="text-sm font-semibold tracking-wide text-rose-500 uppercase">
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
          className="inline-flex px-6 py-3 mt-6 font-semibold text-white transition-all duration-300 bg-rose-500 rounded-full hover:scale-105 hover:bg-rose-600 self-start"
        >
          Order a Cake
        </Link>
      </div>

      {/* Slideshow */}
      <div className="relative h-full min-h-[250px] overflow-hidden shadow-lg rounded-2xl fade-in-up stagger-2">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
            style={{ opacity: index === current ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === current ? 'w-6 bg-rose-500' : 'w-2 bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
