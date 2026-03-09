'use client';

import { useTheme } from '@/context/ThemeContext';

export default function DarkModeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full bg-white px-3 py-2 text-sm font-semibold shadow transition-all duration-300 hover:scale-105 dark:bg-stone-800"
      aria-label="Toggle dark mode"
    >
      {darkMode ? 'Light' : 'Dark'}
    </button>
  );
}
