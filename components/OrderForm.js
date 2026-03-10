'use client';

import { useEffect } from 'react';
import { useOrder } from '@/context/OrderContext';
import generateOrderId from '@/utils/generateOrderId';

export default function OrderForm() {
  const { orderId, setOrderId, formData, updateFormData, cartItems, cartTotal } = useOrder();

  useEffect(() => {
    if (!orderId) {
      setOrderId(generateOrderId());
    }
  }, [orderId, setOrderId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateFormData({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Cake Order - ${orderId}`;
    const body = [
      `Order ID: ${orderId}`,
      `Customer Name: ${formData.customerName}`,
      `Email: ${formData.email}`,
      `Phone Number: ${formData.phone}`,
      `Message on Cake: ${formData.messageOnCake}`,
      `Pickup or Delivery: ${formData.fulfillment}`,
      `Delivery Address: ${formData.fulfillment === 'Delivery' ? formData.deliveryAddress : 'N/A'}`,
      `Pickup Date: ${formData.pickupDate}`,
      `Reference Image (UI only): ${formData.referenceImage || 'Not provided'}`,
      `Cart Summary: ${
        cartItems.length
          ? cartItems
              .map(
                (item) =>
                  `${item.title} x ${item.quantity} @ ${item.price} [size: ${item.customization?.size || 'N/A'}, color: ${
                    item.customization?.color || 'N/A'
                  }, flavor: ${item.customization?.flavor || 'N/A'}, shape: ${item.customization?.shape || 'N/A'}, note: ${
                    item.customization?.note || 'N/A'
                  }]`
              )
              .join(' | ')
          : 'No cart items'
      }`,
      `Estimated Cart Total: $${cartTotal.toFixed(2)}`,
      `Special Instructions: ${formData.specialInstructions || 'None'}`
    ].join('\n');

    window.location.href = `mailto:amilaupendra5@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section-card">
      <div className="mb-6 rounded-xl bg-pink-100 p-4 dark:bg-rose-900/30">
        <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">Order ID</p>
        <p className="text-2xl font-bold">{orderId || 'Generating...'}</p>
      </div>

      {cartItems.length > 0 ? (
        <div className="mb-6 rounded-xl border border-pink-200 bg-white p-4 dark:border-stone-600 dark:bg-stone-800">
          <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">Cart Imported</p>
          <ul className="mt-2 space-y-1 text-sm">
            {cartItems.map((item) => (
              <li key={item.cartKey}>
                {item.title} x {item.quantity} - {item.price} | size: {item.customization?.size || 'N/A'} | color:{' '}
                {item.customization?.color || 'N/A'} | flavor: {item.customization?.flavor || 'N/A'} | shape:{' '}
                {item.customization?.shape || 'N/A'} | note: {item.customization?.note || 'N/A'}
              </li>
            ))}
          </ul>
          <p className="mt-2 font-semibold text-rose-600">Estimated Total: ${cartTotal.toFixed(2)}</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <Field label="Customer Name" name="customerName" value={formData.customerName} onChange={handleChange} required />
        <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        <Field label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />

        <Field
          label="Message on Cake"
          name="messageOnCake"
          value={formData.messageOnCake}
          onChange={handleChange}
          placeholder="Happy Birthday Emma"
        />

        <SelectField
          label="Pickup or Delivery"
          name="fulfillment"
          value={formData.fulfillment}
          onChange={handleChange}
          options={['Pickup', 'Delivery']}
        />

        {formData.fulfillment === 'Delivery' && (
          <div className="md:col-span-2">
            <Field
              label="Delivery Address"
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <Field label="Pickup Date" name="pickupDate" type="date" value={formData.pickupDate} onChange={handleChange} required />

        <Field
          label="Reference Image Upload (UI only)"
          name="referenceImage"
          type="file"
          onChange={(event) => {
            const fileName = event.target.files?.[0]?.name || '';
            updateFormData({ referenceImage: fileName });
          }}
        />

        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-semibold" htmlFor="specialInstructions">
            Special Instructions
          </label>
          <textarea
            id="specialInstructions"
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleChange}
            className="w-full rounded-xl border border-pink-200 bg-white px-4 py-2 shadow-sm outline-none transition focus:border-rose-400 dark:border-stone-600 dark:bg-stone-800"
            rows={4}
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="rounded-full bg-rose-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-rose-600"
          >
            Submit Order via Email
          </button>
        </div>
      </form>
    </section>
  );
}

function Field({ label, name, value, onChange, required, type = 'text', placeholder }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={type === 'file' ? undefined : value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-pink-200 bg-white px-4 py-2 shadow-sm outline-none transition focus:border-rose-400 dark:border-stone-600 dark:bg-stone-800"
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-pink-200 bg-white px-4 py-2 shadow-sm outline-none transition focus:border-rose-400 dark:border-stone-600 dark:bg-stone-800"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
