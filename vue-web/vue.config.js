const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/v1/api": {
        target: "http://localhost:9080",
        changeOrigin: true,
        pathRewrite: {
          "^/v1/api": "/learn/api",
        },
      },
    },
  },
})
