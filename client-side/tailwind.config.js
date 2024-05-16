/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js', 'node_modules/preline/dist/*.js',
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        qs:"'Quicksand','sans-serif'"
      }
    },
  },
  plugins: [
   require('flowbite/plugin'), require('preline/plugin'),require('daisyui'),require("tailgrids/plugin")
  ],
});
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     'node_modules/flowbite-react/lib/esm/**/*.js', 'node_modules/preline/dist/*.js',
//   ],
//   theme: {
//     extend: {
//       fontFamily:{
//         qs:"'Quicksand','sans-serif'"
//       }
//     },
//   },
//   plugins: [
//     require('daisyui'), require('flowbite/plugin'), require('preline/plugin'),
//   ],
// }