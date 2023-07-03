/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    screens: {
      xsm: "480px",
    },
  },
};
export const plugins = [[require("prettier-plugin-tailwindcss")]];
