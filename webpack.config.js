const path = require('path'); //for use path
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-maps' : 'cheap-module-eval-source-map',
    // 'source-maps' - для прода
    // создает два отдельных файла, bundle.js (мелкий) и bundle.js.map (большой)
    // bundle.js.map грузится только тогда, если кто-то открывает девтул
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true // для того, что б роуты заработалиы
    }
  };
};

