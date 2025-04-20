import { Configuration } from "webpack";
import Zip from "zip-webpack-plugin";

export default {
	module: {
		rules: [
			{
				test: /\.(js|ts)$/,
				exclude: /\.(json)/,
				use: "babel-loader",
			},
		],
	},
	mode: "development",
	devtool: "source-map",
	resolve: {
		extensions: [".js", ".ts"], //automatically inserts these file extensions in import statements
	},
	target: "node",
	output: {
		filename: "index.js", //Change the name of the bundle file (default is main.js)
		library: { type: "commonjs" }, //older syntax for use with webpack that Prevents tree shaking of unused bundle exports--indicating that the bundle is a library
	},
	plugins: [new Zip({ include: /^index.js$/ })], // The plugin automatically zips the bundle file into one zip file in the dist folder using webpack. The regular expression (regex) is looking for an exact filename match
} as Configuration;
