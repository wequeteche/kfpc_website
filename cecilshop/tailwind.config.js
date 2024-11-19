/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./shop/templates/**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
 safelist: [
  'bg-[#210458e5]'
]

}

