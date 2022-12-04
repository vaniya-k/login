const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `dist`)
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    open: false,
    port: 3000,
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
        ],
      },
    ],
  },
  devtool: `source-map`,
};