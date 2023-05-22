const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:'dist',
  publicPath: './',
  assetsDir:'static',
  configureWebpack: {
    devtool: 'source-map'
  }
})
