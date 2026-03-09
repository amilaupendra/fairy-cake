export const metadata = {
  title: 'Contact | Fairy Cakes',
  description: 'Contact Fairy Cakes in Marangaroo, Western Australia for cake orders and custom design inquiries.'
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <section className="section-card">
        <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">Contact Us</p>
        <h1 className="text-4xl font-bold">We Would Love to Hear From You</h1>
        <p className="mt-3 text-stone-700 dark:text-stone-200">
          Reach out for custom cake requests, event planning, and pickup or delivery inquiries.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="section-card space-y-4">
          <h2 className="text-2xl font-bold">Contact Details</h2>
          <p>
            <span className="font-semibold">Phone:</span> 0422329792 / 0489875673
          </p>
          <p>
            <span className="font-semibold">Email:</span>{' '}
            <a href="mailto:fairycakes@gmail.com" className="text-rose-600 hover:underline">
              fairycakes@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Instagram:</span> @fairycakes
          </p>
          <p>
            <span className="font-semibold">Facebook:</span> Fairy Cakes
          </p>
          <p>
            <span className="font-semibold">Address:</span> U 8, 19 Bradford Pl, Marangaroo, Western Australia
          </p>
        </div>

        <div className="section-card">
          <h2 className="text-2xl font-bold">Location Map</h2>
          <div className="mt-4 flex h-72 items-center justify-center rounded-2xl border-2 border-dashed border-rose-300 bg-rose-50 text-center text-stone-600 dark:border-rose-700 dark:bg-stone-800 dark:text-stone-200">
            Google Maps Placeholder
          </div>
        </div>
      </section>
    </div>
  );
}
