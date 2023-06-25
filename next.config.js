const path = require('path');
const {PHASE_PRODUCTION_BUILD} = require('next/constants');
const globalConst = require('./config/globalConst.ts')

module.exports = (phase) => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;
  console.log(isProd)
  const config = {
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
  };

  if (isProd) {
    // 在生产环境下的配置
    config.env = globalConst.development
  } else {
    // 在开发环境下的配置
    config.env = globalConst.production
  }

  return config;
};
