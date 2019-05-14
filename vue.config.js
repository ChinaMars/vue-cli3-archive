const isProduction = process.env.NODE_ENV === 'production'
const isWebpackReport = process.env.VUE_APP_WEBPACK_REPORT
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  chainWebpack: config => {
    if(isProduction && isWebpackReport){
      config.plugin('webpack-bundle-analyzer')
        .use(new BundleAnalyzerPlugin())
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          red: '#03a9f4',
          blue: '#3eaf7c',
          orange: '#ff6600',
          'text-color': '#111'
        }
      }
    }
  }
};