'use client';

import { createContext, useContext, useMemo, useState } from 'react';

const initialFormData = {
  customerName: '',
  email: '',
  phone: '',
  cakeCategory: 'Birthday Cakes',
  cakeSize: '6 inch',
  flavor: 'Vanilla',
  messageOnCake: '',
  fulfillment: 'Pickup',
  deliveryAddress: '',
  pickupDate: '',
  referenceImage: '',
  specialInstructions: ''
};

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orderId, setOrderId] = useState('');
  const [formData, setFormData] = useState(initialFormData);

  const updateFormData = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const value = useMemo(
    () => ({ orderId, setOrderId, formData, updateFormData, setFormData, initialFormData }),
    [orderId, formData]
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used inside OrderProvider');
  }
  return context;
}
