const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
	entry: {
		"styles": "./src/scss/main.scss"
	},
	mode: process.env.NODE_ENV,
	module: {
    	rules: [{
			test: /\.scss$/,
			use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
			]
       }]
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/main.min.css",
        }),
    ],
};