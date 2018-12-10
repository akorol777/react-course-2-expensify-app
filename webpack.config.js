const path = require('path'); //for use path

module.exports = (env) => {
  const isProduction = env === 'production';

  console.log('env', env);
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
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
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

