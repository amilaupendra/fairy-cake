'use client';

import { useMemo, useState } from 'react';
import GalleryGrid from '@/components/GalleryGrid';
import GalleryModal from '@/components/GalleryModal';

const customerPhotos = [
  {
    id: 1,
    src: '/images/gallery/gallery-1.svg',
    customer: 'Sarah M.',
    occasion: 'Birthday Party',
    caption: 'Absolutely magical! The rose birthday cake was the star of the show. Everyone was speechless!',
    date: 'Feb 2025',
    rating: 5,
    tag: 'Birthdays',
  },
  {
    id: 2,
    src: '/images/gallery/gallery-2.svg',
    customer: 'Emily & James',
    occasion: 'Wedding Day',
    caption: 'Our dream wedding cake. Fairy Cakes made our special day even more perfect.',
    date: 'Jan 2025',
    rating: 5,
    tag: 'Weddings',
  },
  {
    id: 3,
    src: '/images/gallery/gallery-3.svg',
    customer: 'Lisa K.',
    occasion: "Liam's 5th Birthday",
    caption: 'My son was over the moon with his jungle cake. Pure joy on his face all day!',
    date: 'Mar 2025',
    rating: 5,
    tag: 'Kids Parties',
  },
  {
    id: 4,
    src: '/images/gallery/gallery-4.svg',
    customer: 'Rachel T.',
    occasion: 'Baby Shower',
    caption: 'The cupcake tower was a showstopper. Guests kept asking where we ordered from!',
    date: 'Dec 2024',
    rating: 5,
    tag: 'Baby Showers',
  },
  {
    id: 5,
    src: '/images/gallery/gallery-5.svg',
    customer: 'Mark D.',
    occasion: 'Anniversary Dinner',
    caption: 'Rich, indulgent, and beautifully presented. The chocolate cake was divine.',
    date: 'Nov 2024',
    rating: 5,
    tag: 'Anniversaries',
  },
  {
    id: 6,
    src: '/images/gallery/gallery-6.svg',
    customer: 'Priya S.',
    occasion: 'Garden Party',
    caption: 'Light, fresh and stunning. The berry layer cake was a summer dream!',
    date: 'Aug 2024',
    rating: 5,
    tag: 'Celebrations',
  },
  {
    id: 7,
    src: '/images/gallery/gallery-7.svg',
    customer: 'Anna B.',
    occasion: 'Engagement Party',
    caption: 'The floral design was beyond what I imagined. Truly a work of art.',
    date: 'Oct 2024',
    rating: 5,
    tag: 'Celebrations',
  },
  {
    id: 8,
    src: '/images/gallery/gallery-8.svg',
    customer: 'Tom & Claire',
    occasion: '10th Anniversary',
    caption: 'Brought back all the memories of our wedding day. Fairy Cakes are pure magic.',
    date: 'Sep 2024',
    rating: 5,
    tag: 'Anniversaries',
  },
  {
    id: 9,
    src: '/images/gallery/gallery-9.svg',
    customer: 'Mia R.',
    occasion: '30th Birthday',
    caption: 'Pastel perfection! The colours matched my party theme exactly. So talented!',
    date: 'Jul 2024',
    rating: 5,
    tag: 'Birthdays',
  },
  {
    id: 10,
    src: '/images/gallery/gallery-10.svg',
    customer: 'Sophie & Ben',
    occasion: 'Wedding Reception',
    caption: 'Elegant, classic, and delicious. Every guest commented on how beautiful it was.',
    date: 'Jun 2024',
    rating: 5,
    tag: 'Weddings',
  },
  {
    id: 11,
    src: '/images/gallery/gallery-11.svg',
    customer: 'Jessica H.',
    occasion: 'Office Celebration',
    caption: 'The cupcake tower was a massive hit at our office party. Gone in minutes!',
    date: 'May 2024',
    rating: 5,
    tag: 'Celebrations',
  },
  {
    id: 12,
    src: '/images/gallery/gallery-12.svg',
    customer: 'Daniel O.',
    occasion: 'Summer Birthday',
    caption: 'Fresh, fruity and absolutely gorgeous. Fairy Cakes never disappoint!',
    date: 'Apr 2024',
    rating: 5,
    tag: 'Birthdays',
  },
];

const tags = ['All', ...new Set(customerPhotos.map((p) => p.tag))];

export default function GalleryPage() {
  const [activeTag, setActiveTag] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () => (activeTag === 'All' ? customerPhotos : customerPhotos.filter((p) => p.tag === activeTag)),
    [activeTag]
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="section-card text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">Happy Customers</p>
        <h1 className="mt-1 text-4xl font-bold text-rose-700">Our Customer Gallery</h1>
        <p className="mx-auto mt-3 max-w-2xl text-stone-600 dark:text-stone-300">
          Real moments, real smiles — see how Fairy Cakes has made celebrations extra special for our wonderful customers.
        </p>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              activeTag === tag
                ? 'bg-rose-500 text-white shadow-lg scale-105'
                : 'bg-white text-stone-700 shadow hover:scale-105 hover:bg-rose-50 dark:bg-stone-800 dark:text-stone-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </section>

      {/* Photo count */}
      <p className="text-center text-sm text-stone-500 dark:text-stone-400">
        Showing <span className="font-semibold text-rose-500">{filtered.length}</span> customer moments
      </p>

      {/* Gallery */}
      <GalleryGrid items={filtered} onSelect={setSelected} />

      {/* Share CTA */}
      <section className="section-card text-center bg-gradient-to-r from-rose-50 to-amber-50 dark:from-stone-800 dark:to-stone-700">
        <div className="text-4xl mb-3">📸</div>
        <h2 className="text-2xl font-bold text-rose-700">Share Your Moment!</h2>
        <p className="mt-2 max-w-xl mx-auto text-stone-600 dark:text-stone-300">
          Tag us on Instagram <span className="font-semibold text-rose-500">@FairyCakesBakery</span> or send us your photo — we'd love to feature your celebration here!
        </p>
        <a
          href="/contact"
          className="mt-5 inline-block rounded-full bg-rose-500 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-rose-600"
        >
          Send Us Your Photo
        </a>
      </section>

      <GalleryModal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
