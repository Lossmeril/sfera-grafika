import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        drevo: "var(--drevo)",
        kov: "var(--kov)",
        grafika: "var(--grafika)",
        textil: "var(--textil)",
        chemie: "var(--chemie)",
        prirodopis: "var(--prirodopis)",
        fyzika: "var(--fyzika)",
        it: "var(--it)",
        sos: "var(--sos)",
        hriste: "var(--hriste)",
        tabory: "var(--tabory)",
        kreativniuceni: "var(--kreativniuceni)",
      },
      fontFamily: {
        youth: ["var(--youth)"],
      },
    },
  },
  plugins: [],
};
export default config;
