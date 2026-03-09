export default function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-lg dark:bg-stone-800">
      <p className="text-sm text-stone-600 dark:text-stone-300">{testimonial.event}</p>
      <h3 className="mt-1 text-lg font-bold">{testimonial.name}</h3>
      <p className="mt-2 text-sm text-stone-700 dark:text-stone-200">{testimonial.review}</p>
      <p className="mt-3 text-yellow-500">{'â˜…'.repeat(testimonial.rating)}{'â˜†'.repeat(5 - testimonial.rating)}</p>
    </article>
  );
}
