const path = require('path')

// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@style': path.resolve(__dirname, 'src/style')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [{ loader: 'babel-loader' }]
        }
      ]
    }
    // optimization: {
    //   minimizer: [
    //     new ImageMinimizerPlugin({
    //       minimizer: {
    //         implementation: ImageMinimizerPlugin.imageminMinify,
    //         options: {
    //           plugins: [
    //             ['gifsicle', { interlaced: true }],
    //             ['jpegtran', { progressive: true }],
    //             ['optipng', { optimizationLevel: 5 }],
    //             [
    //               'svgo',
    //               {
    //                 plugins: [
    //                   {
    //                     name: 'preset-default',
    //                     params: {
    //                       overrides: {
    //                         removeViewBox: false,
    //                         addAttributesToSVGElement: {
    //                           params: {
    //                             attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }]
    //                           }
    //                         }
    //                       }
    //                     }
    //                   }
    //                 ]
    //               }
    //             ]
    //           ]
    //         }
    //       }
    //     })
    //   ]
    // }
  }
}
