const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

module.exports = [
  {
    mode: 'development',
    entry: {
      bundle: './src/bundle.ts',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    target: 'web',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/static'),
    },
    plugins: [
      new CopyPlugin({
        patterns: [{ from: 'public' }],
      }),
    ],
  },
  {
    mode: 'development',
    entry: {
      server: './src/server.ts',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    target: 'node',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new EnvironmentPlugin({
        DB_HOST: '',
        DB_USERNAME: '',
        DB_PASSWORD: '',
        BASE_URL: '',
        PORT: '',
      }),
    ],
  },
];
