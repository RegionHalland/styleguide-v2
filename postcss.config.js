module.exports = (ctx) => ({
	plugins: {
		'tailwindcss': { 
			config: './tailwind.config.js' 
		},
		'cssnano': ctx.env === 'production' ? {
			preset: 'default',
			discardComments: false
		} : false,
	'autoprefixer': {}
	}
})

