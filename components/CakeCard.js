'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';

export default function CakeCard({ cake, showCartActions = false, quantity = 0, onAdd, onRemove }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [customization, setCustomization] = useState({
    size: cake.size || '8 inch',
    color: 'Yellow',
    flavor: 'Vanilla',
    shape: 'Round',
    note: ''
  });

  const previewImages = useMemo(() => {
    if (cake.galleryImages?.length) {
      return cake.galleryImages;
    }
    return [cake.image];
  }, [cake.galleryImages, cake.image]);

  const openPreview = () => {
    setActiveIndex(0);
    setIsOpen(true);
  };

  const openCustomizeModal = () => {
    setCustomization({
      size: cake.size || '8 inch',
      color: 'Yellow',
      flavor: 'Vanilla',
      shape: 'Round',
      note: ''
    });
    setIsCustomizeOpen(true);
  };

  return (
    <>
      <article
        className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 dark:bg-stone-800"
        role="button"
        tabIndex={0}
        onClick={openPreview}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openPreview();
          }
        }}
      >
        <Image src={cake.image} alt={cake.title} width={600} height={450} className="h-52 w-full object-cover" />
      <div className="space-y-2 p-4">
        <h3 className="text-xl font-bold">{cake.title}</h3>
        <p className="text-sm text-stone-600 dark:text-stone-300">{cake.description}</p>
        {cake.price ? <p className="font-semibold text-green-600">Price: {cake.price}</p> : null}
        {cake.size ? <p className="text-sm font-medium text-stone-700 dark:text-stone-200">Size: {cake.size}</p> : null}
        {showCartActions ? (
          <div className="mt-3 flex items-center gap-2" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={onRemove}
              className="rounded-full border border-yellow-300 px-3 py-1 text-sm font-semibold text-stone-700 transition hover:bg-yellow-100 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-700"
            >
              Remove
            </button>
            <button
              type="button"
              onClick={openCustomizeModal}
              className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Add
            </button>
            <span className="ml-auto rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-green-700 dark:bg-stone-700 dark:text-yellow-300">
              In Cart: {quantity}
            </span>
          </div>
        ) : null}
      </div>
      </article>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setIsOpen(false)}>
          <div
            className="w-full max-w-3xl rounded-2xl bg-white p-4 shadow-lg dark:bg-stone-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={previewImages[activeIndex]}
                alt={`${cake.title} preview`}
                width={1200}
                height={900}
                className="h-[60vh] w-full object-cover"
              />
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto">
              {previewImages.map((src, index) => (
                <button
                  key={`${src}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`overflow-hidden rounded-lg border-2 ${
                    activeIndex === index ? 'border-green-600' : 'border-transparent'
                  }`}
                >
                  <Image src={src} alt={`Thumbnail ${index + 1}`} width={120} height={90} className="h-16 w-24 object-cover" />
                </button>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <h4 className="text-lg font-bold">{cake.title}</h4>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isCustomizeOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setIsCustomizeOpen(false)}>
          <div
            className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-lg dark:bg-stone-900"
            onClick={(event) => event.stopPropagation()}
          >
            <h4 className="text-2xl font-bold">Customize {cake.title}</h4>
            <p className="mt-1 text-sm text-stone-600 dark:text-stone-300">Set details before adding to cart.</p>

            <div className="mt-4 grid gap-3">
              <Field label="Size">
                <input
                  value={customization.size}
                  onChange={(event) => setCustomization((prev) => ({ ...prev, size: event.target.value }))}
                  className="w-full rounded-xl border border-yellow-200 px-3 py-2 outline-none focus:border-green-400"
                />
              </Field>

              <Field label="Color">
                <input
                  value={customization.color}
                  onChange={(event) => setCustomization((prev) => ({ ...prev, color: event.target.value }))}
                  className="w-full rounded-xl border border-yellow-200 px-3 py-2 outline-none focus:border-green-400"
                />
              </Field>

              <Field label="Flavor">
                <select
                  value={customization.flavor}
                  onChange={(event) => setCustomization((prev) => ({ ...prev, flavor: event.target.value }))}
                  className="w-full rounded-xl border border-yellow-200 px-3 py-2 outline-none focus:border-green-400"
                >
                  {['Vanilla', 'Chocolate', 'Red Velvet', 'Strawberry', 'Black Forest', 'Lemon'].map((flavor) => (
                    <option key={flavor} value={flavor}>
                      {flavor}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Shape">
                <select
                  value={customization.shape}
                  onChange={(event) => setCustomization((prev) => ({ ...prev, shape: event.target.value }))}
                  className="w-full rounded-xl border border-yellow-200 px-3 py-2 outline-none focus:border-green-400"
                >
                  {['Round', 'Square', 'Heart', 'Rectangle'].map((shape) => (
                    <option key={shape} value={shape}>
                      {shape}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Note">
                <textarea
                  value={customization.note}
                  onChange={(event) => setCustomization((prev) => ({ ...prev, note: event.target.value }))}
                  rows={3}
                  className="w-full rounded-xl border border-yellow-200 px-3 py-2 outline-none focus:border-green-400"
                />
              </Field>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsCustomizeOpen(false)}
                className="rounded-full border border-yellow-300 px-4 py-2 text-sm font-semibold hover:bg-yellow-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  onAdd?.(customization);
                  setIsCustomizeOpen(false);
                }}
                className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function Field({ label, children }) {
  return (
    <label className="block text-sm font-semibold">
      <span className="mb-1 block">{label}</span>
      {children}
    </label>
  );
}
