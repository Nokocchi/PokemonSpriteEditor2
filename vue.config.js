const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/PokemonSpriteEditor2/" : "./",
  assetsDir:  "./",
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        // sass-loader@^9.0.0 or newer
        additionalData: `
        @import "@/colors.scss";
        `,
      }
    }
  }
})

/*

  module.exports = {
    mode: 'development',
    entry: '@/main.js',
    output: {
      filename: 'bundle.js',
      publicPath: 'dist'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require("node-sass"),
                // you can also read from a file, e.g. `variables.scss`
                // use `prependData` here if sass-loader version = 8, or
                // `data` if sass-loader version < 8
                additionalData: `
                $base-color: yellow;
                @import "@/colors.scss";`
              },
            },
          ],
        },
      ],
    },
  };
  */