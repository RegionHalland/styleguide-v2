const path = require('path');
const glob = require('glob').sync;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
	mode: 'none',
	entry: {
		styles: './src/scss/main.scss',
    	icons: glob('./src/icons/*.svg')
  	},
	output: {
    	path: path.resolve(__dirname, 'dist')
  	},
	module: {
		rules: [
		{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				{ loader: 'css-loader' },
				{ loader: 'postcss-loader' },
				{ loader: 'sass-loader' }
			]
		},
		{
			test: /\.svg$/,
			use: [
				{
					loader: 'svg-sprite-loader',
						options: {
						extract: true,
						spriteFilename: './icons/icons.svg',
						runtimeCompat: true
					}
				},
				{loader: 'svgo-loader'},
			]
		}
		]
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin({
        	extensions: ["svg", "scss"]	
        }),
        new MiniCssExtractPlugin({
            filename: "css/main.min.css",
        }),
        new SpriteLoaderPlugin({
      		plainSprite: true
    	})
    ],
};
