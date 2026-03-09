'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import DarkModeToggle from './DarkModeToggle';
import { useOrder } from '@/context/OrderContext';

const menuItems = [
  { label: 'Birthday Cakes', href: '/menu/birthday-cakes' },
  { label: 'Wedding Cakes', href: '/menu/wedding-cakes' },
  { label: 'Kids Theme Cakes', href: '/menu/kids-theme-cakes' },
  { label: 'Cupcakes', href: '/menu/cupcakes' },
  { label: 'Chocolate Cakes', href: '/menu/chocolate-cakes' },
  { label: 'Fruit Cakes', href: '/menu/fruit-cakes' },
  { label: 'Custom Design Cakes', href: '/menu/custom-design-cakes' },
  { label: 'Special Occasion Cakes', href: '/menu/special-occasion-cakes' }
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useOrder();

  return (
    <header className="sticky top-0 z-40 border-b border-yellow-100 bg-yellow-50/95 backdrop-blur dark:border-stone-700 dark:bg-stone-900/95">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold text-green-700 dark:text-yellow-300">
          Fairy Cakes
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className={`font-semibold transition-colors ${
              pathname === '/' ? 'text-green-600' : 'text-stone-700 hover:text-green-600 dark:text-stone-200'
            }`}
          >
            Home
          </Link>

          <div className="relative" onMouseEnter={() => setOpenMenu(true)} onMouseLeave={() => setOpenMenu(false)}>
            <button
              type="button"
              className="font-semibold text-stone-700 transition-colors hover:text-green-600 dark:text-stone-200"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              Menu
            </button>
            {openMenu && (
              <div className="absolute left-0 top-full z-50 pt-2">
                <div className="w-64 rounded-2xl bg-white p-3 shadow-lg dark:bg-stone-800">
                  {menuItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-stone-700 transition-colors hover:bg-yellow-50 hover:text-green-600 dark:text-stone-200 dark:hover:bg-stone-700"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-semibold transition-colors ${
                pathname === link.href ? 'text-green-600' : 'text-stone-700 hover:text-green-600 dark:text-stone-200'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/cart"
            aria-label="Cart"
            className="relative rounded-full bg-white px-4 py-2 text-sm font-semibold shadow transition-all duration-300 hover:scale-105 dark:bg-stone-800"
          >
            Cart
            <span className="ml-2 rounded-full bg-green-600 px-2 py-0.5 text-xs font-bold text-white">{cartCount}</span>
          </Link>

          <DarkModeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <DarkModeToggle />
          <button
            type="button"
            aria-label="Open mobile menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-lg bg-white p-2 shadow dark:bg-stone-800"
          >
            <span className="text-sm font-semibold">Menu</span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-yellow-100 bg-white px-4 py-4 md:hidden dark:border-stone-700 dark:bg-stone-900">
          <div className="space-y-2">
            <Link className="block rounded-lg px-3 py-2 hover:bg-yellow-50 dark:hover:bg-stone-800" href="/" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link className="block rounded-lg px-3 py-2 hover:bg-yellow-50 dark:hover:bg-stone-800" href="/menu" onClick={() => setMobileOpen(false)}>
              Menu
            </Link>
            <Link className="block rounded-lg px-3 py-2 hover:bg-yellow-50 dark:hover:bg-stone-800" href="/cart" onClick={() => setMobileOpen(false)}>
              Cart ({cartCount})
            </Link>
            <Link className="block rounded-lg px-3 py-2 hover:bg-yellow-50 dark:hover:bg-stone-800" href="/gallery" onClick={() => setMobileOpen(false)}>
              Gallery
            </Link>
            <Link className="block rounded-lg px-3 py-2 hover:bg-yellow-50 dark:hover:bg-stone-800" href="/about" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link className="block rounded-lg px-3 py-2 hover:bg-yellow-50 dark:hover:bg-stone-800" href="/contact" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
