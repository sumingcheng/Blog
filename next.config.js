const path = require('path');
const globalConst = require('./config/globalConst.ts');

const isProd = process.env.NODE_ENV === 'production';

const config = {
  env: {
    staticPageGenerationTimeout: 90,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/scss')],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

if (isProd) {
// 在生产环境下的配置
  config.env = globalConst.development;
} else {
// 在开发环境下的配置
  config.env = globalConst.production;
}

module.exports = config;
