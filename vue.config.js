const { defineConfig } = require("@vue/cli-service");
const UnoCSS = require("@unocss/webpack").default;
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  configureWebpack: {
    plugins: [UnoCSS()],
    optimization: {
      realContentHash: true,
    },
  },
  chainWebpack(config) {
    config.module.rule("vue").uses.delete("cache-loader");
    config.merge({
      cache: false,
    });
  },
  css: {
    extract: true,
  },
});
