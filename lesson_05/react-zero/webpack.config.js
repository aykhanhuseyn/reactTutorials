const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		open: {
			app: {
				name: 'google-chrome',
				arguments: ['--new-window'],
			},
		},
		compress: true,
		port: 3000,
	},
	mode: process.env.NODE_ENV || 'development',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
			{
				test: /\.s?css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /(\.jpg|\.jpeg|\.png|\.gif|\.mp3|\.svg)$/,
				exclude: /node_modules/,
				use: ['file-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
};
