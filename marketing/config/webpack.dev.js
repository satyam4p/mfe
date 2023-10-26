const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


const devConfig = {
  mode:'development',
  devServer:{
    port:8081,
    historyApiFallback: {
      index: 'index.html'
    },
  },
  plugins:[
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
        shared:['react', 'react-dom']
      }
    }),
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    })
  ]
}

/**merge will override the common config with devConfig if there are some config similar, tis happens if devConfig is second param to merge */
module.exports = merge(commonConfig, devConfig);
