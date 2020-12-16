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
  // less配置
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
  // antd-mobile集成
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  // REM配置
  addPostcssPlugins([
    require('postcss-pxtorem')({
      rootValue: 14,
      propList: ['*']
      // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
      // propWhiteList: []
    })
  ])
)
