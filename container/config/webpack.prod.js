const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common.js');

const domain = process.env.PRODUCTION_DOMAIN;

const prodFConfig = {
  mode: "production",
  output: {
    filename: '[name].[contenthash].js',
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
