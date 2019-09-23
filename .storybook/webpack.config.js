const path = require('path');
const webpack = require('webpack');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    });

    function resolve(dir) {
        return path.join(__dirname, '..', dir)
    };

    config.resolve = {
        extensions: ['.js', '.vue', '.json'],
            alias: {
            vue$: 'vue/dist/vue.esm.js',
                '@': resolve('src'),
            },
        };

    // Return the altered config
    return config;
};