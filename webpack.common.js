const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: { 
       main: "./src/index.js",
       vendor: "./src/vendor.js"
    },
    plugins: [new HtmlWebpackPlugin({
       template: "./src/template.html" 
    }),new HtmlWebpackPlugin({
        template: "./src/offers.html",
        filename: "offers.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/1.html",
        filename: "offers/1.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/2.html",
        filename: "offers/2.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/3.html",
        filename: "offers/3.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/4.html",
        filename: "offers/4.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/5.html",
        filename: "offers/5.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/6.html",
        filename: "offers/6.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/7.html",
        filename: "offers/7.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/8.html",
        filename: "offers/8.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/8.html",
        filename: "offers/9.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/9.html",
        filename: "offers/9.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/10.html",
        filename: "offers/10.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/11.html",
        filename: "offers/11.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/12.html",
        filename: "offers/12.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/13.html",
        filename: "offers/13.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/14.html",
        filename: "offers/14.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/15.html",
        filename: "offers/15.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/16.html",
        filename: "offers/16.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/17.html",
        filename: "offers/17.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/18.html",
        filename: "offers/18.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/19.html",
        filename: "offers/19.html",
    }),new HtmlWebpackPlugin({
        template: "./src/offers/20.html",
        filename: "offers/20.html",
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