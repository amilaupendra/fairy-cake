'use client';

import { createContext, useContext, useMemo, useState } from 'react';

const initialFormData = {
  customerName: '',
  email: '',
  phone: '',
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
  const [cartItems, setCartItems] = useState([]);

  const updateFormData = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const addToCart = (cake) => {
    const customization = cake.customization || {};
    const cartKey =
      cake.cartKey ||
      [
        cake.id,
        customization.size || '',
        customization.color || '',
        customization.flavor || '',
        customization.shape || '',
        customization.note || ''
      ].join('__');

    setCartItems((prev) => {
      const existing = prev.find((item) => item.cartKey === cartKey);
      if (existing) {
        return prev.map((item) => (item.cartKey === cartKey ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prev, { ...cake, baseId: cake.id, cartKey, quantity: 1 }];
    });
  };

  const removeCartItem = (cartKey) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.cartKey === cartKey);
      if (!existing) return prev;
      if (existing.quantity <= 1) {
        return prev.filter((item) => item.cartKey !== cartKey);
      }
      return prev.map((item) => (item.cartKey === cartKey ? { ...item, quantity: item.quantity - 1 } : item));
    });
  };

  const removeFromCartByBaseId = (baseId) => {
    const target = cartItems.find((item) => item.baseId === baseId);
    if (!target) return;
    removeCartItem(target.cartKey);
  };

  const getItemQuantity = (baseId) =>
    cartItems.filter((item) => item.baseId === baseId).reduce((sum, item) => sum + item.quantity, 0);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = cartItems.reduce((sum, item) => {
    const numericPrice = Number(String(item.price).replace(/[^0-9.]/g, '')) || 0;
    return sum + numericPrice * item.quantity;
  }, 0);

  const applyCartToOrderForm = () => {
    if (cartItems.length === 0) return;

    const cartSummary = cartItems
      .map((item) => {
        const custom = item.customization || {};
        return `${item.title} | ${item.price} x ${item.quantity} | size: ${custom.size || item.size || 'N/A'} | color: ${
          custom.color || 'N/A'
        } | flavor: ${custom.flavor || 'N/A'} | shape: ${custom.shape || 'N/A'} | note: ${custom.note || 'N/A'}`;
      })
      .join('\n');

    setFormData((prev) => ({
      ...prev,
      specialInstructions: prev.specialInstructions
        ? `${prev.specialInstructions}\n\nCart Items:\n${cartSummary}`
        : `Cart Items:\n${cartSummary}`
    }));
  };

  const value = useMemo(
    () => ({
      orderId,
      setOrderId,
      formData,
      updateFormData,
      setFormData,
      initialFormData,
      cartItems,
      addToCart,
      removeCartItem,
      removeFromCartByBaseId,
      getItemQuantity,
      cartCount,
      cartTotal,
      applyCartToOrderForm
    }),
    [orderId, formData, cartItems, cartCount, cartTotal]
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
