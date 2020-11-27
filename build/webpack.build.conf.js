const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif)$/i,
            pngquant: {
                quality: '95-100'
            },
            plugins: [
                imageminMozjpeg({
                    quality: 100,
                    progressive: true
                })
            ]
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
});
