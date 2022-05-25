const path = require('path')

module.exports = {

    entry: './src/app.js', 
    output: {

        filename:'bundle.js',
        path: path.resolve(__   dirname, '/dist'),
        publicPath: 'dist'
    }
}