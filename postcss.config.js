module.exports = (ctx) => ({
	plugins: {
		'tailwindcss': { 'option': './tailwind.config.js' },
		'cssnano': ctx.env === 'production' ? {
			preset: 'default',
			discardComments: false
		} : false,
	'autoprefixer': {}
	}
})

