import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-yellow-100 bg-yellow-100/80 dark:border-stone-700 dark:bg-stone-950">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-xl font-bold text-green-700 dark:text-yellow-300">Fairy Cakes</h3>
          <p className="mt-2 text-sm text-stone-700 dark:text-stone-300">Handmade Cakes for Every Sweet Moment.</p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <div className="mt-2 space-y-1 text-sm">
            <Link className="block hover:text-green-600" href="/">
              Home
            </Link>
            <Link className="block hover:text-green-600" href="/menu">
              Menu
            </Link>
            <Link className="block hover:text-green-600" href="/gallery">
              Gallery
            </Link>
            <Link className="block hover:text-green-600" href="/order">
              Order
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <div className="mt-2 space-y-1 text-sm text-stone-700 dark:text-stone-300">
            <p>0422329792</p>
            <p>0489875673</p>
            <a className="hover:text-green-600" href="mailto:fairycakes@gmail.com">
              fairycakes@gmail.com
            </a>
            <p>U 8, 19 Bradford Pl, Marangaroo, WA</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Social</h4>
          <div className="mt-3 flex gap-2">
            <a
              href="https://instagram.com/fairycakes"
              className="rounded-full bg-white px-3 py-2 text-xs font-semibold shadow transition-all hover:scale-105 dark:bg-stone-800"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              className="rounded-full bg-white px-3 py-2 text-xs font-semibold shadow transition-all hover:scale-105 dark:bg-stone-800"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-yellow-200 py-4 text-center text-sm text-stone-600 dark:border-stone-700 dark:text-stone-300">
        Copyright {new Date().getFullYear()} Fairy Cakes. All rights reserved.
      </div>
    </footer>
  );
}
