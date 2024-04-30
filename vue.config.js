const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Ma PWA",
    themeColor: "#0a94a8"
  }
})
