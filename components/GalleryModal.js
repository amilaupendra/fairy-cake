'use client';

import Image from 'next/image';

export default function GalleryModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div
        className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-stone-900"
        onClick={(event) => event.stopPropagation()}
      >
        <Image src={item.src} alt={item.title} width={1200} height={800} className="h-[70vh] w-full object-cover" />
        <div className="flex items-center justify-between p-4">
          <div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-stone-600 dark:text-stone-300">{item.category}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
