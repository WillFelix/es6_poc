module.exports = {
	entry: [__dirname + '/app/scripts/index.js'],
	output: {
		path: __dirname + "/build",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					plugins: [
						'react-html-attrs'
					]
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		port: 4000,
		contentBase: __dirname + '/build',
		inline: true,
		historyApiFallback: true
	}
}
