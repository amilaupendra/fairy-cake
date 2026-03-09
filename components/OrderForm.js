'use client';

import { useEffect } from 'react';
import { useOrder } from '@/context/OrderContext';
import generateOrderId from '@/utils/generateOrderId';

const categories = [
  'Birthday Cakes',
  'Wedding Cakes',
  'Kids Theme Cakes',
  'Cupcakes',
  'Chocolate Cakes',
  'Fruit Cakes',
  'Custom Design Cakes',
  'Special Occasion Cakes'
];

const sizes = ['6 inch', '8 inch', '10 inch', '2 Tier', '3 Tier'];
const flavors = ['Vanilla', 'Chocolate', 'Red Velvet', 'Strawberry', 'Black Forest', 'Lemon'];

export default function OrderForm() {
  const { orderId, setOrderId, formData, updateFormData } = useOrder();

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
      `Cake Category: ${formData.cakeCategory}`,
      `Cake Size: ${formData.cakeSize}`,
      `Flavor: ${formData.flavor}`,
      `Message on Cake: ${formData.messageOnCake}`,
      `Pickup or Delivery: ${formData.fulfillment}`,
      `Delivery Address: ${formData.fulfillment === 'Delivery' ? formData.deliveryAddress : 'N/A'}`,
      `Pickup Date: ${formData.pickupDate}`,
      `Reference Image (UI only): ${formData.referenceImage || 'Not provided'}`,
      `Special Instructions: ${formData.specialInstructions || 'None'}`
    ].join('\n');

    window.location.href = `mailto:fairycakes@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section-card">
      <div className="mb-6 rounded-xl bg-rose-100 p-4 dark:bg-rose-900/30">
        <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">Order ID</p>
        <p className="text-2xl font-bold">{orderId || 'Generating...'}</p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <Field label="Customer Name" name="customerName" value={formData.customerName} onChange={handleChange} required />
        <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        <Field label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />

        <SelectField label="Cake Category" name="cakeCategory" value={formData.cakeCategory} onChange={handleChange} options={categories} />
        <SelectField label="Cake Size" name="cakeSize" value={formData.cakeSize} onChange={handleChange} options={sizes} />
        <SelectField label="Flavor" name="flavor" value={formData.flavor} onChange={handleChange} options={flavors} />

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
            className="w-full rounded-xl border border-rose-200 bg-white px-4 py-2 shadow-sm outline-none transition focus:border-rose-400 dark:border-stone-600 dark:bg-stone-800"
            rows={4}
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="rounded-full bg-rose-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-rose-700"
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
        className="w-full rounded-xl border border-rose-200 bg-white px-4 py-2 shadow-sm outline-none transition focus:border-rose-400 dark:border-stone-600 dark:bg-stone-800"
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
        className="w-full rounded-xl border border-rose-200 bg-white px-4 py-2 shadow-sm outline-none transition focus:border-rose-400 dark:border-stone-600 dark:bg-stone-800"
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
