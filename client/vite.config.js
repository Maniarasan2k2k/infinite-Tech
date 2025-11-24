import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss({
      config: {
        content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // <- important
        theme: {
          extend: {
            keyframes: {
              slideLeft: {
                "0%": { transform: "translateX(100%)" },
                "100%": { transform: "translateX(-100%)" },
              },
            },
            animation: {
              slideLeft: "slideLeft 15s linear infinite",
            },
          },
        },
      },
    }),
    react(),
  ],
});
