const { override, addWebpackPlugin } = require('customize-cra');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = override(
	addWebpackPlugin(new BundleAnalyzerPlugin({
		analyzerPort: 19000 // or any other available port
	}))
);
