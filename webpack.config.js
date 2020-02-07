const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 访问内置的插件
const merge = require('webpack-merge');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const packageName = process.env.npm_package_name;
const packageVersion = process.env.npm_package_version;
const outPath = `dist/${packageName}/${packageVersion}/`;

module.exports = merge({}, {
  mode: 'development',
  entry: {
    index: './demo/entry/index.js'
  },
  output: {
    path: path.resolve(__dirname, outPath),
    // filename: '[name]_[hash:8].js'
    filename: '[name].js'
  },
  devServer: {
    port: 8000,
    open: true,
    host: 'local.host.net' // 默认是localhost
  },
  // eslint: {
  //   configFile: './.eslintrc'
  // },
  plugins: [
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ['**/*', 'dist'],
    // }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    // 该插件可以把index.html打包到bundle.js文件所属目录，跟着bundle走
    // 同时也会自动在index.html中注入script引用链接，并且引用的资源名称，也取决于打包的文件名称
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   enforce: 'pre',
      //   exclude: /node_modules/,
      //   include: [
      //       path.resolve(__dirname, './src'),
      //       path.resolve(__dirname, './demo'),
      //   ],
      //   loader: ['babel-loader','eslint-loader'], //执行顺序从右往左
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/env',
              '@babel/preset-react',
              '@babel/preset-flow'
            ],
            plugins: [
              ['import', {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: 'css' // `style: true` 会加载 less 文件
              }]
            ]
          }
        }]
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
      { // 这里的内容是新增加的对样式的支持
        test: /\.(c|le)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
            // options: {
            //   // you can specify a publicPath here
            //   // by default it uses publicPath in webpackOptions.output
            //   // publicPath: './',
            //   // hmr: process.env.NODE_ENV === 'development',
            // },
          },
          // "style-loader",
          'css-loader',
          'less-loader'
        ]
      }
    ]
  }
});
