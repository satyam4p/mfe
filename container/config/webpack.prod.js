const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common.js');

const domain = process.env.PRODUCTION_DOMAIN;

const prodFConfig = {
  mode: "production",
  output: {
    filename: '[name].[contenthash].js',
    publicPath: "/container/latest/" 
    /**this path specifies to html webpack plugin in case it picking upa nay created js
     file after build it needs to follow public path is we have custom path where files will be present after build, specially in production env */
  },
  plugins: [
    new ModuleFederationPlugin({
      name:'container',
      remotes:{
        marketing:`marketing@${domain}/marketing/remoteEntry.js`
      }
    }),
  ]
}

module.exports = merge(commonConfig, prodFConfig)
