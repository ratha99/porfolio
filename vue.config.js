const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    //proxy:'https://freetestapi.com/'
     proxy: process.env.VUE_APP_URL_DEMO_BACKEND
  }
})
