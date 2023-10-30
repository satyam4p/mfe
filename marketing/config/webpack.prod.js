const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

// const domain = process.env.PRODUCTION_DOMAIN;

const prodFConfig = {
  mode: "production",
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name:'marketing',
      exposes:{
        './MarketingApp': './src/bootstrap'
      }
    }),
  ]
}

module.exports = merge(commonConfig, prodFConfig)
