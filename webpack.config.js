const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ruleForJavascript = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
    ],
  },
};

const ruleForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const rules = [ruleForJavascript, ruleForStyles];

module.exports = (env, args) => {
  const { mode } = args;
  const isProduction = mode === 'production';
  return {
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
    module: {
      rules,
    },
    devServer: {
      open: true, //open browser
      port: 3000,
      //overlay: true, //show overlay with errors
    },
    devtool: 'source-map', //generate two versions of same code compiled/uncompiled}
  };
};
