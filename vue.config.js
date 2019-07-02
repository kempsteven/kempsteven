const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/style/style.scss";`
			}
		}
	},

	configureWebpack: {
		plugins: [
			new CleanWebpackPlugin(),
			new webpack.HashedModuleIdsPlugin(),
			new BundleAnalyzerPlugin()
		],

		optimization: {
			runtimeChunk: 'single',
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all'
					}
				}
			}
		}
	},
};