// See https://tailwindcss.com/docs/guides/create-react-app
//REF to deploy on heroku: https://github.com/mars/create-react-app-buildpack#usage

module.exports = {
    purge: {
        content: ['./src/**/*.{js,jsx}', './public/index.html']
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                // configure color palette here
                red: {
                    DEFAULT: "#A41912",
                },
                gold: {
                    DEFAULT: "#AE9A65",
                }
            },
            height: {
                "2vh": "2vh",
                "5vh": "5vh",
				"10vh": "10vh",
				"20vh": "20vh",
				"30vh": "30vh",
				"40vh": "40vh",
				"50vh": "50vh",
				"60vh": "60vh",
				"70vh": "70vh",
				"80vh": "80vh",
				"90vh": "90vh",
				"100vh": "100vh",
			},
            width: {
                "2vw": "2vw",
                "5vw": "5vw",
				"10vw": "10vw",
				"20vw": "20vw",
				"30vw": "30vw",
				"35vw": "35vw",
				"40vw": "40vw",
				"50vw": "50vw",
				"60vw": "60vw",
				"70vw": "70vw",
				"80vw": "80vw",
				"90vw": "90vw",
				"100vw": "100vw",
			},
            margin: {
                "2vw": "2vw",
                "5vw": "5vw",
				"10vw": "10vw",
				"20vw": "20vw",
				"30vw": "30vw",
                "2vh": "2vh",
                "5vh": "5vh",
				"10vh": "10vh",
				"20vh": "20vh",
				"30vh": "30vh",
			},
            padding: {
                "5vw": "5vw",
                "15vh": "15vh",
            },
            maxWidth: {
                "50": "50%",
            }
        }
    },
    variants: {
        extend: {
            brightness: ['hover'],
            scale: ['hover'],
        },
    },
    plugins: [],
}