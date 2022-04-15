const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/beer-test/" : "/",
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData:`@import "@/assets/styles/normalize.scss"; @import "@/assets/styles/style.scss";`
      }
    }
  }
})
