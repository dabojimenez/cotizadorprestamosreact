/** @type {import('tailwindcss').Config} */
export default {
  // colocarmeos que arhcivos o donde vamos a escribir clases de tailwincss
  content: [
    "./index.html", //Aqui escribiremos algunas clases de tailwind
    "./src/**/*.{js,ts,jsx,tsx}", // aqui definimos que todos los archivos de todas las carpetas que esten en src, que busque las extenciones definidas, podran tener una clase definida de tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

