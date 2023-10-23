/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            screens: {
                xs: "400px",
            },
            fontFamily: {
                main: ["Raleway", "sans-serif"],
                headlines: ["Cinzel", " serif"],
            },
            colors: {
                primaryColor: "#efe5d9",
                secondaryColor: "#bda571",
                
            },
        },
    },
    plugins: [],
};
