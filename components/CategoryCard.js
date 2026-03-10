import Link from 'next/link';
import Image from 'next/image';

export default function CategoryCard({ category }) {
  return (
    <Link
      href={category.href || '/menu'}
      className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 dark:bg-stone-800"
    >
      <Image src={category.image} alt={category.title} width={500} height={400} className="h-44 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold transition-colors group-hover:text-rose-500">{category.title}</h3>
        {category.description ? (
          <p className="mt-1 text-sm text-stone-600 dark:text-stone-300">{category.description}</p>
        ) : null}
      </div>
    </Link>
  );
}
