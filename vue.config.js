const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
  
  chainWebpack: config => {
    config.plugin('eslint').tap(args => {
      return args; // extensions 옵션을 제거
    });
  },
});
