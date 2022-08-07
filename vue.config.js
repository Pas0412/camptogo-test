const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //代理
    proxy: {
      '/api': {
        //只要输入/api(该路径可自定义)会自动重定向(替换)为target中的地址(服务器地址)
        target: 'https://www.camptogo.com',
        //changeOrigin：true 允许跨域
        changeOrigin: true,
        //路径重写，/api是自定义路径，真正项目中是没有这个路径的，所以要去掉
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
