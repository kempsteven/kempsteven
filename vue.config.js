const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
			new webpack.HashedModuleIdsPlugin()
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