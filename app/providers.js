'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import { OrderProvider } from '@/context/OrderContext';

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <OrderProvider>{children}</OrderProvider>
    </ThemeProvider>
  );
}
