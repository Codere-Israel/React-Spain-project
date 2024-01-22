const { override, addWebpackPlugin } = require('customize-cra');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = override(
	(config) => {
		portfinder.getPort({ port: 9400 }, (err, port) => {
			if (err) {
				throw new Error('No free ports found');
			}

	addWebpackPlugin(new BundleAnalyzerPlugin({
		analyzerPort: 9300 // or any other available port
	}))
);
