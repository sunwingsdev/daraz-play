/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Add 'Poppins' or your preferred font
      },
      colors: {
        customWhite: "#fff",
        customGreenPrimary: "#117c44",
        customGreenSecondary: "#074625",
        customGreenHeading: "#042d18",
        customGreenText: "#1fc970",
        customGreen: "#18b779",
        customYellow: "#ffe90f",
        customBlack: "#212529",
        customYellowHeading: "rgb(255, 233, 15)",
        customAccent: "#488286", // Add a custom name for your color
      },
      boxShadow: {
        customShadow: "0 2px 2px 2px #00000025",
        customHeadingShadow: "0px 0px 26px 0px #00000080",
        customBoxGreenShadow: "0px 2px 12px 2px #00000040", // Your custom box-shadow
      },
      zIndex: {
        1060: "1060", // Custom z-index value
      },
      fontSize: {
        heading: "2.625rem", // Custom font size for heading
      },
      spacing: {
        30: "30px", // Custom padding value
      },
      backgroundImage: {
        customGradient: "linear-gradient(180deg, #1a9756 0%, #0f5f35 100%)", // Gradient 1
        "custom-gradient": "linear-gradient(45deg, #61e2ca 0%, #85faa4 45%)",
        customGradient1: "linear-gradient(45deg, #f0cec3 0%, #f1cec7 45%)",
        backgroundImageRed: " linear-gradient(0deg, #700402 0%, #e31210 100%)",
        // Gradient 2 (renamed)
      },
    },
  },
  plugins: [import("daisyui"), require("@tailwindcss/typography")],
};
