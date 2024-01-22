const { override, addWebpackPlugin } = require('customize-cra');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const portfinder = require('portfinder');

module.exports = override(
	(config) => {
		portfinder.getPort ({ port: 9400 }, (err, port) => {
			if ( err ) {
				throw new Error ('No free ports found');
			}

	addWebpackPlugin(new BundleAnalyzerPlugin({
				analyzerPort: port
			}))(config);
		});

		return config;
	}
);
