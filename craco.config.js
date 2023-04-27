const path = require('path')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@customTypes': path.resolve(__dirname, 'src/customTypes'),
      '@style': path.resolve(__dirname, 'src/style')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [{ loader: 'babel-loader' }]
        },
        {
          test: /\.(mp3|wav)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'audio/'
              }
            }
          ]
        }
      ]
    },
    optimization: {
      minimizer: [
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                ['gifsicle', { interlaced: true }],
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }]
              ]
            }
          }
        })
      ]
    }
  }
}
