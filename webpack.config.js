var path = require('path');
module.exports = {
  entry: {
    example: './example.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]-webpack.js',
    library: 'buildOctokat',
    libraryTarget: 'umd'
  },
  externals:[{
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  }]
};
