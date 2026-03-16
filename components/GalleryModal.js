'use client';

import Image from 'next/image';

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400">★</span>
      ))}
    </div>
  );
}

export default function GalleryModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <Image
            src={item.src}
            alt={item.caption}
            width={1200}
            height={800}
            className="max-h-[55vh] w-full object-cover"
          />
          <span className="absolute top-4 right-4 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white shadow">
            {item.tag}
          </span>
        </div>

        <div className="p-6 space-y-3">
          <StarRating count={item.rating} />
          <p className="text-stone-700 dark:text-stone-200 italic leading-relaxed">
            "{item.caption}"
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-stone-100 dark:border-stone-700">
            <div>
              <p className="font-bold text-rose-600">{item.customer}</p>
              <p className="text-sm text-stone-500 dark:text-stone-400">
                {item.occasion} · {item.date}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-rose-500 px-5 py-2 text-sm font-semibold text-white shadow transition-all hover:scale-105 hover:bg-rose-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
