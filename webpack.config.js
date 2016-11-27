const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        "./js/main.js"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/js",
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, "js"),
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            }
          ]
    },
    devServer: {
        contentBase: "./",
        port: 3000,
        host: 'localhost'
    },
    debug: true
};
