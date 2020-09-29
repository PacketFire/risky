const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
  mode: "development",
  module: {
    rules: [
      {
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					// options: {
					// 	emitCss: true,
					// 	hotReload: true
					// }
				}
			}
    ]
  },
  plugins: [
    new CopyWebpackPlugin(['index.html'])
  ],
};
