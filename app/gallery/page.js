'use client';

import { useMemo, useState } from 'react';
import GalleryGrid from '@/components/GalleryGrid';
import GalleryModal from '@/components/GalleryModal';

const galleryItems = [
  { id: 1, src: '/images/gallery/gallery-1.svg', title: 'Rose Birthday Cake', category: 'Birthday Cakes' },
  { id: 2, src: '/images/gallery/gallery-2.svg', title: 'Peach Wedding Tier', category: 'Wedding Cakes' },
  { id: 3, src: '/images/gallery/gallery-3.svg', title: 'Jungle Kids Theme', category: 'Kids Theme Cakes' },
  { id: 4, src: '/images/gallery/gallery-4.svg', title: 'Vanilla Cupcake Set', category: 'Cupcakes' },
  { id: 5, src: '/images/gallery/gallery-5.svg', title: 'Dark Chocolate Luxe', category: 'Chocolate Cakes' },
  { id: 6, src: '/images/gallery/gallery-6.svg', title: 'Berry Fruit Layer', category: 'Fruit Cakes' },
  { id: 7, src: '/images/gallery/gallery-7.svg', title: 'Custom Floral Design', category: 'Custom Design Cakes' },
  { id: 8, src: '/images/gallery/gallery-8.svg', title: 'Anniversary Special', category: 'Special Occasion Cakes' },
  { id: 9, src: '/images/gallery/gallery-9.svg', title: 'Pastel Celebration', category: 'Birthday Cakes' },
  { id: 10, src: '/images/gallery/gallery-10.svg', title: 'Classic White Wedding', category: 'Wedding Cakes' },
  { id: 11, src: '/images/gallery/gallery-11.svg', title: 'Chocolate Cupcake Tower', category: 'Cupcakes' },
  { id: 12, src: '/images/gallery/gallery-12.svg', title: 'Summer Fruit Party', category: 'Fruit Cakes' }
];

const filters = ['All', ...new Set(galleryItems.map((item) => item.category))];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-6">
      <section className="section-card">
        <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">Gallery</p>
        <h1 className="text-4xl font-bold">Our Cake Creations</h1>
        <p className="mt-3 max-w-3xl text-stone-700 dark:text-stone-200">
          Browse our handmade designs and click any image to view a larger preview.
        </p>
      </section>

      <section className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-rose-600 text-white shadow-lg'
                : 'bg-white text-stone-700 shadow hover:scale-105 dark:bg-stone-800 dark:text-stone-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </section>

      <GalleryGrid items={filteredItems} onSelect={setSelectedImage} />
      <GalleryModal item={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
