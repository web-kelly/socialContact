const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭Eslint 代码校验
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    host: "192.168.199.219",
  },
  // 相对路径别名设置
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
      }
    }
  },

})
