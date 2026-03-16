import OrderForm from '@/components/OrderForm';

export const metadata = {
  title: 'Order | Fairy Cakes',
  description: 'Place a custom cake order with Fairy Cakes using our simple online order form.'
};

export default function OrderPage() {
  return (
    <div className="space-y-6">
      <section className="section-card">
        <p className="text-sm font-semibold uppercase tracking-wide text-rose-400">Cake Orders</p>
        <h1 className="text-4xl font-bold">Place Your Cake Order</h1>
        <p className="mt-3 max-w-3xl text-stone-700 dark:text-stone-200">
          Complete the form below and your email app will open with all order details pre-filled.
        </p>
      </section>

      <OrderForm />
    </div>
  );
}
