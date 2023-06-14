/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = ({
  staticPageGenerationTimeout: 90,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/scss')],
  }
})

module.exports = nextConfig
