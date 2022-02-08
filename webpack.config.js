const path         = require('path');
// const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = ({ development }) => ({
  entry   : './src/index.ts',
  devtool : development ? 'inline-source-map' : false,
  mode    : development ? 'development'       : 'production',
  output  : {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'fp-cp',
    libraryExport: 'default',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'typeof self === \'undefined\' ? this : self',
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/, /\.spec.ts$/],
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  // plugins: [new ESLintPlugin({ extensions: ['ts'] })],
});
