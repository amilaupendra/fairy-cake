'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useOrder } from '@/context/OrderContext';

export default function CartPage() {
  const { cartItems, addToCart, removeCartItem, cartTotal, applyCartToOrderForm } = useOrder();
  const router = useRouter();

  const handleContinue = () => {
    applyCartToOrderForm();
    router.push('/order');
  };

  return (
    <div className="space-y-6">
      <section className="section-card">
        <p className="text-sm font-semibold uppercase tracking-wide text-yellow-500">Your Cart</p>
        <h1 className="text-4xl font-bold">Selected Cakes</h1>
        <p className="mt-3 text-stone-700 dark:text-stone-200">Review your cake selections before proceeding to order.</p>
      </section>

      {cartItems.length === 0 ? (
        <section className="section-card text-center">
          <p className="text-lg font-semibold">Your cart is empty.</p>
          <Link
            href="/menu"
            className="mt-4 inline-flex rounded-full bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-700"
          >
            Browse Menu
          </Link>
        </section>
      ) : (
        <>
          <section className="grid gap-4">
            {cartItems.map((item) => (
              <article
                key={item.cartKey}
                className="grid gap-4 rounded-2xl bg-white p-4 shadow-lg transition dark:bg-stone-800 sm:grid-cols-[140px_1fr_auto]"
              >
                <Image src={item.image} alt={item.title} width={280} height={180} className="h-28 w-full rounded-xl object-cover" />
                <div>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-sm text-stone-600 dark:text-stone-300">{item.category}</p>
                  <p className="text-sm font-medium">Base Size: {item.size}</p>
                  <p className="text-sm">Chosen Size: {item.customization?.size || 'N/A'}</p>
                  <p className="text-sm">Color: {item.customization?.color || 'N/A'}</p>
                  <p className="text-sm">Flavor: {item.customization?.flavor || 'N/A'}</p>
                  <p className="text-sm">Shape: {item.customization?.shape || 'N/A'}</p>
                  <p className="text-sm">Note: {item.customization?.note || 'N/A'}</p>
                  <p className="font-semibold text-green-600">Price: {item.price}</p>
                </div>
                <div className="flex items-center gap-2 self-center">
                  <button
                    type="button"
                    onClick={() => removeCartItem(item.cartKey)}
                    className="rounded-full border border-yellow-300 px-3 py-1 text-sm font-semibold hover:bg-yellow-100"
                  >
                    -
                  </button>
                  <span className="min-w-8 text-center font-bold">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => addToCart(item)}
                    className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    +
                  </button>
                </div>
              </article>
            ))}
          </section>

          <section className="section-card flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-stone-600 dark:text-stone-300">Estimated Total</p>
              <p className="text-3xl font-bold text-green-700">${cartTotal.toFixed(2)}</p>
            </div>
            <button
              type="button"
              onClick={handleContinue}
              className="rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Continue to Order Form
            </button>
          </section>
        </>
      )}
    </div>
  );
}
