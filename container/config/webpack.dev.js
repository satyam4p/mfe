const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


const devConfig = {
  mode:'development',
  devServer:{
    port:8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins:[
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {/**the marketing in value should matchup with name specified in marketing module/package in webpack config */
        marketing: 'marketing@http://localhost:8081/remoteEntry.js'
      },
      shared:['react', 'react-dom']
      
    })
  ]
}

/**merge will override the common config with devConfig if there are some config similar, tis happens if devConfig is second param to merge */
module.exports = merge(commonConfig, devConfig);
