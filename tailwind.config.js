/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        line: "var(--color-line)",
        focus: "var(--color-focus)",
        error: "var(--color-error)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["clamp(2rem, 5vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.035em" }],
        "heading-lg": ["clamp(1.75rem, 3vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.025em" }],
        "heading-md": ["1.25rem", { lineHeight: "1.35", letterSpacing: "-0.015em" }],
        body: ["1rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.55" }],
      },
      maxWidth: {
        page: "72rem",
        reading: "46rem",
      },
      borderRadius: {
        control: "0.625rem",
        card: "1rem",
      },
      boxShadow: {
        subtle: "0 1px 3px rgb(37 54 74 / 0.06), 0 1px 2px rgb(37 54 74 / 0.04)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
