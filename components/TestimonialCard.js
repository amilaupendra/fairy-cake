export default function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-lg dark:bg-stone-800">
      <div className="flex gap-0.5 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < testimonial.rating ? 'text-amber-400' : 'text-stone-300'}>
            &#9733;
          </span>
        ))}
      </div>
      <p className="text-sm text-stone-700 dark:text-stone-200 italic">"{testimonial.review}"</p>
      <div className="mt-3 border-t border-stone-100 dark:border-stone-700 pt-3">
        <h3 className="text-sm font-bold text-rose-600">{testimonial.name}</h3>
        <p className="text-xs text-stone-500 dark:text-stone-400">{testimonial.event}</p>
      </div>
    </article>
  );
}
