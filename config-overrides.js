const {
  override,
  addLessLoader,
  addWebpackAlias,
  addDecoratorsLegacy,
  fixBabelImports,
  addPostcssPlugins
} = require('customize-cra')
const path = require('path')

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    ModifyVars: { '@primary-color': '#1DA57A' },
    sourceMap: true
  }),
  // src路径配置
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  addDecoratorsLegacy(),
  // REM配置
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  addPostcssPlugins([
    require('postcss-pxtorem')({
      rootValue: 37.5,
      propList: ['*']
      // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
      // propWhiteList: []
    })
  ])
)
