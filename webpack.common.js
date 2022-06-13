const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: { 
       main: "./src/index.js",
       vendor: "./src/vendor.js"
    },
    plugins: [new HtmlWebpackPlugin({
       template: "./src/template.html" 
    })],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    }
}