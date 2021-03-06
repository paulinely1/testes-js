module.exports = {
	entry: ['@babel/polyfill', './src/main.js'],
	output: {
		path: __dirname + '/public/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};