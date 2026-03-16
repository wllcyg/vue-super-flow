/**
 * User: CHT
 * Date: 2020/5/13
 * Time: 9:08
 */

module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    sourceMap: false
  },
  configureWebpack: {
    // Webpack 5 library build configuration is handled by vue-cli-service build --target lib
  },
}
