module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://www.vue-js.com',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }