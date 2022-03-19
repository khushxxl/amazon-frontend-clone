module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  image: {
    domains: ['images-eu.ssl-images-amazon.com'],
  },
  theme: {
    extend: {},
  },
  plugins: [require('tw-elements/dist/plugin')],
}
