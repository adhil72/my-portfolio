import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,lgx}",
        "./src/**/*.{js,ts,jsx,tsx,lgx}"
    ],
    theme: {
        extend: {
            backgroundColor: {
                primary: "#000000",
                secondary: "#121212",
                "secondary-light": "#1E1E1E",
                tint: "#1373D1",
                "tint-alt": "#9A33FF"
            },
            borderColor: {
                tint: "#1373D1",
                "tint-alt": "#9A33FF"
            },
            colors: {
                primary: "#ffffff",
                secondary: "#6b6b6b",
                tint: "#1373D1",
                "tint-alt": "#9A33FF"
            },
            width:{
                120: "35rem"
            }
        },
    },
    plugins: [],
};
export default config;
