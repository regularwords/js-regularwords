const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/regular-words.js',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: 'regular-words.js',
		library: 'RegularWords',
		libraryTarget: 'umd',
		libraryExport: 'default',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: 'babel-loader',
			},
		],
	},
};
