const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(csv|tsv)$/i,
				use: ['csv-loader'],
			},
		],
	},
	devtool: 'inline-source-map',
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		historyApiFallback: true,
		port: 5000,
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.scss', '.js', '.csv'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			title: 'React Homeworks Title',
			template: path.resolve(__dirname, 'public', 'index.html'),
		}),
		new MiniCssExtractPlugin(),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src', 'assets'),
					to: path.resolve(__dirname, 'dist', 'assets'),
				},
			],
		}),
	],
	optimization: {
		runtimeChunk: 'single',
	},
};
