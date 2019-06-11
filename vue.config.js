const isProduction = process.env.NODE_ENV === 'production'
const isAnalyz = process.env.VUE_APP_IS_ANALYZ === 'analyz'
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  publicPath: './',
  css: {
    sourceMap: isProduction ? false : true,
    loaderOptions: {
      less: {
        modifyVars: {
          blue: '#249ff6',
          orange: '#ff6600'
        },
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: ( config ) => {
    if(isAnalyz){
      config
        .plugin('webpack-bundle-analyzer')
        .use(new BundleAnalyzerPlugin())
    }

    // https://cli.vuejs.org/guide/css.html#referencing-assets
    // https://github.com/yenshih/style-resources-loader#resources
    config.module
      .rule('less')
      .oneOf('vue')
      .use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/style/variables.less'),
          path.resolve(__dirname, './src/style/mixins.less'),
        ],
      })
  }
};