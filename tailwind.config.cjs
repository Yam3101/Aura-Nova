/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "rgb(var(--brand-bg) / <alpha-value>)",
          fg: "rgb(var(--brand-fg) / <alpha-value>)",
          muted: "rgb(var(--brand-muted) / <alpha-value>)",
          card: "rgb(var(--brand-card) / <alpha-value>)",
          border: "rgb(var(--brand-border) / <alpha-value>)",
          primary: "rgb(var(--brand-primary) / <alpha-value>)",
          primaryFg: "rgb(var(--brand-primary-fg) / <alpha-value>)",
          accent: "rgb(var(--brand-accent) / <alpha-value>)"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};

