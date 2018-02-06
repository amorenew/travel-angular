const path = require('path');

module.exports = {
    module: {
        rules: [{
            test: /\.md$/,
            use: [
              {
                loader: 'html-loader',
              },
              {
                loader: 'markdown-loader',
              },
            ],
            include: path.resolve(__dirname, '../')
          }]
    }
}