const tailwindcss = require("tailwindcss");

module.exports = {
    style: {
        postcss: {
            plugins: [
                tailwindcss("./config/tailwind.config.js"),
                require("autoprefixer"),
            ],
        },
    },
}