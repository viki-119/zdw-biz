const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const webpack = require('webpack'); //访问内置的插件
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const package_name = process.env.npm_package_name;
const package_version = process.env.npm_package_version;
const outPath = `dist/${package_name}/${package_version}/`

module.exports = merge({}, {
  mode: 'development',
  entry: {
    index: './index.js'
  },
  output: {
    path: path.resolve(__dirname, outPath),
    // filename: '[name]_[hash:8].js'
    filename: '[name].js'
  },
  devServer: {
    port: 8000,
    open: true
  },
  plugins:[
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    // 该插件可以把index.html打包到bundle.js文件所属目录，跟着bundle走
    // 同时也会自动在index.html中注入script引用链接，并且引用的资源名称，也取决于打包的文件名称
    new HtmlWebpackPlugin({
        template:'./index.html'
    })
  ],
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/env",
                "@babel/preset-react"
              ]
            }
        }],
      },
      // {
      //   test:/\.(js|jsx)?$/,
      //   exclude: /node_modules/,
      //   enforce: "pre", // post
      //   loader: require.resolve("eslint-loader"),
      //   options: {
      //     fix: true
      //   }
      //   // use: [{
      //   //     loader: "eslint-loader",
      //   //     options: {
      //   //       fix: true
      //   //     }
      //   // }],
      // },
      {   //这里的内容是新增加的对样式的支持
        test: /\.(c|le)ss$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ]
  }
});
