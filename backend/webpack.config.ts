import { Configuration } from "webpack";

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
} as Configuration;
