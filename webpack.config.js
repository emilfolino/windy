const path = require("path");

module.exports = {
    mode: "development",
    entry: "./js/index.js",
    output: {
        path: path.resolve(__dirname, ''),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ]
            }
        ]
    }
};
