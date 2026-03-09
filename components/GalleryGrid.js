import Image from 'next/image';

export default function GalleryGrid({ items, onSelect }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item)}
          className="group relative overflow-hidden rounded-2xl bg-white text-left shadow-lg transition-all duration-300 hover:scale-105 dark:bg-stone-800"
        >
          <Image src={item.src} alt={item.title} width={500} height={500} className="h-60 w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="text-xs text-rose-100">{item.category}</p>
          </div>
        </button>
      ))}
    </section>
  );
}
