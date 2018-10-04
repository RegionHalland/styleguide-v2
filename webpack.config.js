const path = require('path');
const glob = require('glob').sync;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
	entry: {
		styles: './src/scss/main.scss',
    	icons: glob('./src/icons/*.svg')
  	},
  	devtool: 'source-map',
	output: {
    	path: path.resolve(__dirname, 'dist')
  	},
	mode: process.env.NODE_ENV,
	module: {
    	rules: [
    	{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				{ loader: 'css-loader', options: { sourceMap: process.env.NODE_ENV === "development" } },
				{ loader: 'postcss-loader', options: { sourceMap: process.env.NODE_ENV === "development" } },
				{ loader: 'sass-loader', options: { sourceMap: process.env.NODE_ENV === "development" } }
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