import Image from 'next/image';

export default function CakeCard({ cake }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 dark:bg-stone-800">
      <Image src={cake.image} alt={cake.title} width={600} height={450} className="h-52 w-full object-cover" />
      <div className="space-y-2 p-4">
        <h3 className="text-xl font-bold">{cake.title}</h3>
        <p className="text-sm text-stone-600 dark:text-stone-300">{cake.description}</p>
        {cake.price ? <p className="font-semibold text-rose-600">Starting at {cake.price}</p> : null}
      </div>
    </article>
  );
}
