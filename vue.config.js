//const isProduction = process.env.NODE_ENV === 'production'
const isAnalyz = process.env.VUE_APP_IS_ANALYZ === 'analyz'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  chainWebpack: config => {
    if(isAnalyz){
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