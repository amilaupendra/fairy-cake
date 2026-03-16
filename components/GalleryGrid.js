import Image from 'next/image';

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-xs">★</span>
      ))}
    </div>
  );
}

export default function GalleryGrid({ items, onSelect }) {
  return (
    <section className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item)}
          className="group break-inside-avoid w-full overflow-hidden rounded-2xl bg-white text-left shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-stone-800"
        >
          <div className="relative overflow-hidden">
            <Image
              src={item.src}
              alt={item.caption}
              width={500}
              height={500}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-3 right-3 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white shadow">
              {item.tag}
            </div>
          </div>
          <div className="p-4 space-y-2">
            <StarRating count={item.rating} />
            <p className="text-sm text-stone-700 dark:text-stone-200 italic leading-relaxed line-clamp-2">
              "{item.caption}"
            </p>
            <div className="flex items-center justify-between pt-1">
              <div>
                <p className="text-sm font-bold text-rose-600">{item.customer}</p>
                <p className="text-xs text-stone-500 dark:text-stone-400">{item.occasion}</p>
              </div>
              <span className="text-xs text-stone-400">{item.date}</span>
            </div>
          </div>
        </button>
      ))}
    </section>
  );
}
