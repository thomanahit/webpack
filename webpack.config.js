module.exports = {
  entry: './frontend/app.jsx',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [' ', '.js', '.jsx']
  },
  module:{
    loaders:[
      { test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude:/node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }]
  }
};
