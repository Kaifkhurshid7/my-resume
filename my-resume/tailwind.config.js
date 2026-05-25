/**
 * @file tailwind.config.js
 * @description Tailwind CSS v4 configuration.
 *
 * Tailwind v4 handles most configuration via CSS (@import "tailwindcss"),
 * so this file is minimal. Kept for compatibility with tooling that
 * expects a config file (IDE extensions, linters).
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
