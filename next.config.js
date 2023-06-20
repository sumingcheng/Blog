/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  staticPageGenerationTimeout: 90,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/scss')],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}
