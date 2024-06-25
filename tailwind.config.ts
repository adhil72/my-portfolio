import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            backgroundColor: {
                primary: "#ffffff",
                secondary: "#222222",
                tint: "#1373D1"
            },
            borderColor: {
                tint: "#1373D1"
            },
            colors: {
                primary: "#ffffff",
                secondary: "#222222",
                tint: "#1373D1"
            }
        },
    },
    plugins: [],
};
export default config;
