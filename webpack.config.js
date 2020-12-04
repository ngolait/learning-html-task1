const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'todo.js',
    path: path.resolve(__dirname, 'dist'),
  },
};