/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                cyan: "#E8F7FF",
                BStart: "#0039A6",
                BMiddle: "#274D96",
                BEnd: "#011F59",
                LStart: "#FBE5CB",
                LMiddle: "#F4EBCE",
            },
            backgroundImage: {
                navbarGradient:
                    "linear-gradient(to right, #FBE5CB 0%, #F4EBCE 9%, #F4EBCE 91%, #FBE5CB 100%)",
            },
        },
    },
    plugins: [],
};
