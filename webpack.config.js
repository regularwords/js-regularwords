const path = require('path');

module.exports = {
	entry: './src/regular-words.js',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: 'regular-words.js',
		library: 'RegularWords',
		libraryTarget: "umd"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				loader: 'babel-loader',
				options: {
					presets: ['env'],
					plugins: ['transform-object-assign']
				}
			}
		]
	},
	plugins: []
};
