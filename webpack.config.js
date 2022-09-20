const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'production',
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "./src/pages/"),
                    to: "./"
                }
            ]
        })
    ]
};

// const path = require('path');

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         filename: 'main.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     mode: 'production',
// };

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');

// module.exports = {
//     mode: 'production',
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: 'index_bundle.js',
//     },
//     plugins: [new HtmlWebpackPlugin()],
// };