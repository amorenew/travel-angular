const path = require('path');
module.exports = (baseConfig, env) => {
  baseConfig.resolve.alias = {
    ...baseConfig.resolve.alias,
    'sass': path.join(process.cwd(), 'src/sass'),
  };
  return baseConfig;
}


// const path = require('path');

// module.exports = {
//     module: {
//         rules: [{
//             test: /\.md$/,
//             use: [
//               {
//                 loader: 'html-loader',
//               },
//               {
//                 loader: 'markdown-loader',
//               },
//             ],
//             include: path.resolve(__dirname, '../')
//           }],{
//              baseConfig.resolve.alias = {
//         ...baseConfig.resolve.alias,
//         'sass': path.join(process.cwd(), 'src/sass'),
//     };
//           }
//     }




// }
